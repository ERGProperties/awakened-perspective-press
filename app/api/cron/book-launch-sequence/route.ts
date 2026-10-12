import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendSequenceEmail } from "@/lib/book-launch-sequence";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const BATCH_SIZE = 25;
const RETRY_DELAY_MS = 10 * 60 * 1000;
const NEXT_EMAIL_DELAY_MS = 24 * 60 * 60 * 1000;

type ProcessingResults = {
  checked: number;
  sent: number;
  skipped: number;
  failed: number;
};

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.error("CRON_SECRET is not configured.");

    return NextResponse.json(
      {
        success: false,
        error: "Cron endpoint is not configured.",
      },
      { status: 500 }
    );
  }

  if (
    request.headers.get("authorization") !==
    `Bearer ${cronSecret}`
  ) {
    return NextResponse.json(
      { success: false, error: "Unauthorized." },
      { status: 401 }
    );
  }

  try {
    const now = new Date();

    const dueReaders = await prisma.reader.findMany({
      where: {
        consent: true,
        unsubscribedAt: null,
        nextEmailAt: { lte: now },
        sequenceStep: { gte: 0, lt: 5 },
      },
      orderBy: { nextEmailAt: "asc" },
      take: BATCH_SIZE,
      select: {
        id: true,
        name: true,
        email: true,
        sequenceStep: true,
        nextEmailAt: true,
      },
    });

    const results: ProcessingResults = {
      checked: dueReaders.length,
      sent: 0,
      skipped: 0,
      failed: 0,
    };

    for (const reader of dueReaders) {
      const claimTime = new Date();
      const claimUntil = new Date(
        claimTime.getTime() + RETRY_DELAY_MS
      );

      // Claim only the exact due state that was retrieved.
      // This helps prevent overlapping runs from sending
      // the same email simultaneously.
      const claimed = await prisma.reader.updateMany({
        where: {
          id: reader.id,
          consent: true,
          unsubscribedAt: null,
          sequenceStep: reader.sequenceStep,
          nextEmailAt: {
            equals: reader.nextEmailAt,
            lte: claimTime,
          },
        },
        data: {
          nextEmailAt: claimUntil,
        },
      });

      if (claimed.count !== 1) {
        results.skipped += 1;
        continue;
      }

      try {
        // Stop the sequence if the reader has already purchased.
        const purchase = await prisma.purchase.findFirst({
          where: {
            email: {
              equals: reader.email,
              mode: "insensitive",
            },
            paymentStatus: "paid",
          },
          select: { id: true },
        });

        if (purchase) {
          await prisma.reader.updateMany({
            where: {
              id: reader.id,
              sequenceStep: reader.sequenceStep,
              nextEmailAt: claimUntil,
            },
            data: {
              sequenceStep: 5,
              nextEmailAt: null,
            },
          });

          results.skipped += 1;
          continue;
        }

        // Confirm that the reader still owns this claim
        // and remains eligible to receive the email.
        const currentReader = await prisma.reader.findUnique({
          where: { id: reader.id },
          select: {
            consent: true,
            unsubscribedAt: true,
            sequenceStep: true,
            nextEmailAt: true,
          },
        });

        if (
          !currentReader ||
          !currentReader.consent ||
          currentReader.unsubscribedAt ||
          currentReader.sequenceStep !== reader.sequenceStep ||
          currentReader.nextEmailAt?.getTime() !==
            claimUntil.getTime()
        ) {
          results.skipped += 1;
          continue;
        }

        // Check purchase status again immediately before sending.
        const latestPurchase = await prisma.purchase.findFirst({
          where: {
            email: {
              equals: reader.email,
              mode: "insensitive",
            },
            paymentStatus: "paid",
          },
          select: { id: true },
        });

        if (latestPurchase) {
          await prisma.reader.updateMany({
            where: {
              id: reader.id,
              sequenceStep: reader.sequenceStep,
              nextEmailAt: claimUntil,
            },
            data: {
              sequenceStep: 5,
              nextEmailAt: null,
            },
          });

          results.skipped += 1;
          continue;
        }

        const { error, data } = await sendSequenceEmail({
          name: reader.name,
          email: reader.email,
          step: reader.sequenceStep,
        });

        if (error) {
          console.error(
            `Sequence email failed for reader ${reader.id}:`,
            error
          );

          // Retry only if this run still owns the claim
          // and the reader remains subscribed.
          await prisma.reader.updateMany({
            where: {
              id: reader.id,
              consent: true,
              unsubscribedAt: null,
              sequenceStep: reader.sequenceStep,
              nextEmailAt: claimUntil,
            },
            data: {
              nextEmailAt: new Date(
                Date.now() + RETRY_DELAY_MS
              ),
            },
          });

          results.failed += 1;
          continue;
        }

        const nextStep = reader.sequenceStep + 1;

        // Advance only while this run still owns the claim.
        const advanced = await prisma.reader.updateMany({
          where: {
            id: reader.id,
            consent: true,
            unsubscribedAt: null,
            sequenceStep: reader.sequenceStep,
            nextEmailAt: claimUntil,
          },
          data: {
            sequenceStep: nextStep,
            nextEmailAt:
              nextStep < 5
                ? new Date(
                    Date.now() + NEXT_EMAIL_DELAY_MS
                  )
                : null,
          },
        });

        console.info(
          `Sequence email ${reader.sequenceStep} accepted by Resend for reader ${reader.id}:`,
          data?.id
        );

        if (advanced.count === 1) {
          results.sent += 1;
        } else {
          // The provider accepted the email, but the record
          // changed before the sequence could advance.
          results.skipped += 1;

          console.warn(
            `Email accepted, but sequence state was not advanced for reader ${reader.id}.`
          );
        }
      } catch (error) {
        console.error(
          `Sequence processing failed for reader ${reader.id}:`,
          error
        );

        results.failed += 1;

        // Isolate retry-scheduling errors so other readers
        // in this batch can still be processed.
        try {
          await prisma.reader.updateMany({
            where: {
              id: reader.id,
              consent: true,
              unsubscribedAt: null,
              sequenceStep: reader.sequenceStep,
              nextEmailAt: claimUntil,
            },
            data: {
              nextEmailAt: new Date(
                Date.now() + RETRY_DELAY_MS
              ),
            },
          });
        } catch (retryError) {
          console.error(
            `Could not schedule retry for reader ${reader.id}:`,
            retryError
          );
        }
      }
    }

    return NextResponse.json({
      success: true,
      ...results,
    });
  } catch (error) {
    console.error("Book launch email cron failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process scheduled emails.",
      },
      { status: 500 }
    );
  }
}