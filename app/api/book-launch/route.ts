import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { sendSequenceEmail } from "@/lib/book-launch-sequence";

export const runtime = "nodejs";

const RETRY_DELAY_MS = 10 * 60 * 1000;
const NEXT_EMAIL_DELAY_MS = 24 * 60 * 60 * 1000;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const origin = new URL(request.url).origin;

  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "")
      .trim()
      .toLowerCase();

    const consent = formData.get("consent") === "yes";
    const website = String(formData.get("website") ?? "").trim();

    // Silently reject likely automated submissions.
    if (website) {
      return NextResponse.redirect(
        new URL("/book-launch/thank-you", origin),
        303
      );
    }

    if (
      !name ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !consent
    ) {
      return NextResponse.redirect(
        new URL("/book-launch?error=invalid", origin),
        303
      );
    }

    // Do not create duplicate records or silently renew consent.
    const existingReader = await prisma.reader.findUnique({
      where: { email },
    });

    if (existingReader) {
      return NextResponse.redirect(
        new URL("/book-launch/thank-you", origin),
        303
      );
    }

    // Save consent and signup information before sending emails.
    const reader = await prisma.reader.create({
      data: {
        name,
        email,
        consent: true,
        consentedAt: new Date(),
        source: "book-launch",
        sequenceStep: 0,
        nextEmailAt: new Date(),
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    // Check whether this email address has already purchased the book.
    let hasPurchased = false;

    try {
      const purchase = await prisma.purchase.findFirst({
        where: {
          email: {
            equals: email,
            mode: "insensitive",
          },
          paymentStatus: "paid",
        },
        select: { id: true },
      });

      hasPurchased = Boolean(purchase);
    } catch (error) {
      // If purchase status cannot be verified, log the issue.
      console.error(
        "Could not verify purchase status for new reader:",
        error
      );
    }

    if (hasPurchased) {
      // Preserve signup and consent history, but suppress marketing emails.
      await prisma.reader.update({
        where: { id: reader.id },
        data: {
          sequenceStep: 5,
          nextEmailAt: null,
        },
      });
    } else {
      // Send the first sequence email.
      try {
        const result = await sendSequenceEmail({
          name: reader.name,
          email: reader.email,
          step: 0,
        });

        if (result.error) {
          console.error(
            "Reader saved, but welcome sequence email failed:",
            result.error
          );

          // Leave the sequence at step 0 and schedule a retry.
          await prisma.reader.updateMany({
            where: {
              id: reader.id,
              consent: true,
              unsubscribedAt: null,
              sequenceStep: 0,
            },
            data: {
              nextEmailAt: new Date(
                Date.now() + RETRY_DELAY_MS
              ),
            },
          });
        } else {
          // Advance only after Resend accepts the welcome email.
          await prisma.reader.updateMany({
            where: {
              id: reader.id,
              consent: true,
              unsubscribedAt: null,
              sequenceStep: 0,
            },
            data: {
              sequenceStep: 1,
              nextEmailAt: new Date(
                Date.now() + NEXT_EMAIL_DELAY_MS
              ),
            },
          });

          console.info(
            "Welcome sequence email accepted by Resend:",
            result.data?.id
          );
        }
      } catch (error) {
        console.error(
          "Welcome sequence email request failed:",
          error
        );

        // Keep the reader eligible for the scheduler to retry.
        try {
          await prisma.reader.updateMany({
            where: {
              id: reader.id,
              consent: true,
              unsubscribedAt: null,
              sequenceStep: 0,
            },
            data: {
              nextEmailAt: new Date(
                Date.now() + RETRY_DELAY_MS
              ),
            },
          });
        } catch (retryError) {
          console.error(
            "Could not schedule welcome email retry:",
            retryError
          );
        }
      }
    }

    // Independently notify the publisher, including for purchasers.
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error(
        "Reader saved, but RESEND_API_KEY is not configured."
      );
    } else {
      const resend = new Resend(apiKey);

      try {
        const { data, error } = await resend.emails.send({
          from: "Awakened Perspective Press <noreply@awakenedperspectivepress.com>",
          to: ["gary@awakenedperspectivepress.com"],
          replyTo: email,
          subject:
            "New Book Launch Signup — Understanding External Reflections",
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.7;color:#222;max-width:620px;margin:auto">
              <h1 style="color:#102a43">New book launch signup</h1>

              <p>Someone asked to receive launch updates for
              <em>Understanding External Reflections</em>.</p>

              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Marketing consent:</strong> Yes — requested launch and publication updates.</p>

              <p><strong>Already purchased:</strong> ${
                hasPurchased
                  ? "Yes — marketing sequence suppressed."
                  : "No purchase found."
              }</p>

              <p style="font-size:12px;color:#777">
                Submitted through awakenedperspectivepress.com/book-launch.
              </p>
            </div>
          `,
        });

        if (error) {
          console.error(
            "Reader saved, but publisher notification failed:",
            error
          );
        } else {
          console.info(
            "Publisher notification accepted by Resend:",
            data?.id
          );
        }
      } catch (error) {
        console.error(
          "Publisher notification request failed:",
          error
        );
      }
    }

    // Only a newly created reader receives the signup tracking marker.
    return NextResponse.redirect(
      new URL("/book-launch/thank-you?signup=success", origin),
      303
    );
  } catch (error) {
    console.error("Book launch signup route error:", error);

    return NextResponse.redirect(
      new URL("/book-launch?error=unavailable", origin),
      303
    );
  }
}