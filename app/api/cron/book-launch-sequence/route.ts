import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendSequenceEmail } from "@/lib/book-launch-sequence";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const BATCH_SIZE = 25;
const RETRY_DELAY_MS = 10 * 60 * 1000;
const NEXT_EMAIL_DELAY_MS = 24 * 60 * 60 * 1000;

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.error("CRON_SECRET is not configured.");

    return NextResponse.json(
      { error: "Cron endpoint is not configured." },
      { status: 500 }
    );
  }

  if (
    request.headers.get("authorization") !==
    `Bearer ${cronSecret}`
  ) {
    return NextResponse.json(
      { error: "Unauthorized." },
      { status: 401 }
    );
  }

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
    },
  });

  const results = {
    checked: dueReaders.length,
    sent: 0,
    skipped: 0,
    failed: 0,
  };

  for (const reader of dueReaders) {
    // Atomically claim this due email so overlapping cron runs
    // do not process the same reader at the same time.
    const claimed = await prisma.reader.updateMany({
      where: {
        id: reader.id,
        consent: true,
        unsubscribedAt: null,
        sequenceStep: reader.sequenceStep,
        nextEmailAt: { lte: now },
      },
      data: {
        nextEmailAt: new Date(Date.now() + RETRY_DELAY_MS),
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
          where: { id: reader.id },
          data: {
            sequenceStep: 5,
            nextEmailAt: null,
          },
        });

        results.skipped += 1;
        continue;
      }

      // Recheck unsubscribe status immediately before sending.
      const currentReader = await prisma.reader.findUnique({
        where: { id: reader.id },
        select: {
          consent: true,
          unsubscribedAt: true,
          sequenceStep: true,
        },
      });

      if (
        !currentReader ||
        !currentReader.consent ||
        currentReader.unsubscribedAt ||
        currentReader.sequenceStep !== reader.sequenceStep
      ) {
        await prisma.reader.updateMany({
          where: { id: reader.id },
          data: { nextEmailAt: null },
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

        await prisma.reader.updateMany({
          where: {
            id: reader.id,
            sequenceStep: reader.sequenceStep,
          },
          data: {
            nextEmailAt: new Date(Date.now() + RETRY_DELAY_MS),
          },
        });

        results.failed += 1;
        continue;
      }

      const nextStep = reader.sequenceStep + 1;

      await prisma.reader.updateMany({
        where: {
          id: reader.id,
          sequenceStep: reader.sequenceStep,
        },
        data: {
          sequenceStep: nextStep,
          nextEmailAt:
            nextStep < 5
              ? new Date(Date.now() + NEXT_EMAIL_DELAY_MS)
              : null,
        },
      });

      console.info(
        `Sequence email ${reader.sequenceStep} accepted by Resend for reader ${reader.id}:`,
        data?.id
      );

      results.sent += 1;
    } catch (error) {
      console.error(
        `Sequence processing failed for reader ${reader.id}:`,
        error
      );

      await prisma.reader.updateMany({
        where: {
          id: reader.id,
          sequenceStep: reader.sequenceStep,
        },
        data: {
          nextEmailAt: new Date(Date.now() + RETRY_DELAY_MS),
        },
      });

      results.failed += 1;
    }
  }

  return NextResponse.json({
    success: true,
    ...results,
  });
}