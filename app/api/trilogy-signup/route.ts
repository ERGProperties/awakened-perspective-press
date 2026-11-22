import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { createUnsubscribeUrl } from "@/lib/book-launch-sequence";

export const runtime = "nodejs";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.awakenedperspectivepress.com"
).replace(/\/+$/, "");

const EBOOK_URL =
  `${SITE_URL}/downloads/understanding-external-reflections-6x9.pdf`;

const FOLLOW_UP_DELAY_MS = 48 * 60 * 60 * 1000;

function redirectToReaderWelcome(origin: string, error?: string) {
  const url = new URL(
    "/conversations-with-my-inner-being/reader-welcome",
    origin
  );

  if (error) url.searchParams.set("error", error);

  return NextResponse.redirect(url, 303);
}

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

    // Honeypot: quietly ignore automated submissions.
    if (website) return redirectToReaderWelcome(origin);

    if (
      !name ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !consent
    ) {
      return redirectToReaderWelcome(origin, "invalid");
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");
      return redirectToReaderWelcome(origin, "unavailable");
    }

    const now = new Date();
    const nextEmailAt = new Date(now.getTime() + FOLLOW_UP_DELAY_MS);

    // The form contains explicit consent. Re-subscribing an existing reader
    // is allowed only because they have actively checked the consent box again.
    const existing = await prisma.reader.findUnique({
      where: { email },
    });

    if (!existing) {
      await prisma.reader.create({
        data: {
          name,
          email,
          consent: true,
          consentedAt: now,
          source: "conversations-with-my-inner-being",
          sequenceStep: 1,
          nextEmailAt,
        },
      });
    } else {
      await prisma.reader.update({
        where: { email },
        data: {
          name,
          consent: true,
          consentedAt: now,
          unsubscribedAt: null,
          source: "conversations-with-my-inner-being",
          // If the reader was already subscribed, preserve their current
          // sequence position and schedule. If previously unsubscribed,
          // restart the follow-up sequence after this new opt-in.
          ...(existing.consent && !existing.unsubscribedAt
            ? {}
            : { sequenceStep: 1, nextEmailAt }),
        },
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const unsubscribeUrl = createUnsubscribeUrl(email);
    const safeName = escapeHtml(name);
    const safeDownloadUrl = escapeHtml(EBOOK_URL);
    const safeUnsubscribeUrl = escapeHtml(unsubscribeUrl);

    const { data, error } = await resend.emails.send({
      from: "Awakened Perspective Press <noreply@awakenedperspectivepress.com>",
      to: [email],
      replyTo: "hello@awakenedperspectivepress.com",
      subject: "Your Free eBook — Understanding External Reflections",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for requesting your complimentary copy of Understanding External Reflections.",
        "",
        "Download your 6 × 9 PDF edition here:",
        EBOOK_URL,
        "",
        "Over the next few days, I'll share a few reflections from the conversations behind the book.",
        "",
        "Warm regards,",
        "Gary Walker",
        "Awakened Perspective Press",
        "",
        `Unsubscribe: ${unsubscribeUrl}`,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.75;color:#243447;max-width:620px;margin:0 auto;padding:24px">
          <div style="background:#102a43;padding:28px 24px;text-align:center;border-radius:8px 8px 0 0">
            <p style="color:#f2c66d;letter-spacing:2px;font-size:12px;margin:0 0 10px">
              AWAKENED PERSPECTIVE PRESS
            </p>
            <h1 style="color:#ffffff;font-size:27px;margin:0">
              Your eBook is ready
            </h1>
          </div>

          <div style="border:1px solid #e5e7eb;border-top:0;padding:28px 24px;border-radius:0 0 8px 8px">
            <p>Hi ${safeName},</p>

            <p>Thank you for requesting your complimentary copy of
              <strong>Understanding External Reflections</strong>.
            </p>

            <p>I'm glad you're joining me for this exploration of perspective,
              inner connection, and the experience of being alive.</p>

            <p style="margin:30px 0;text-align:center">
              <a href="${safeDownloadUrl}"
                 style="display:inline-block;background:#d9a93e;color:#071b33;text-decoration:none;padding:15px 24px;border-radius:28px;font-weight:bold">
                Download Your Free eBook
              </a>
            </p>

            <p>If the button doesn't work, copy and paste this link into your browser:</p>
            <p style="word-break:break-all;font-size:13px">
              <a href="${safeDownloadUrl}" style="color:#315f91">${safeDownloadUrl}</a>
            </p>

            <p>Over the next few days, I'll share a few reflections from the
              conversations behind the book. You can explore them at your own pace.</p>

            <p style="margin-top:28px">
              Warm regards,<br />
              <strong>Gary Walker</strong><br />
              Awakened Perspective Press
            </p>

            <hr style="border:0;border-top:1px solid #e5e7eb;margin:28px 0 16px" />

            <p style="font-size:12px;color:#6b7280">
              You're receiving this because you requested the free eBook and
              agreed to receive occasional reflections and book updates.
              <a href="${safeUnsubscribeUrl}" style="color:#6b7280">Unsubscribe</a>.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Free eBook email failed:", error);
      return redirectToReaderWelcome(origin, "delivery");
    }

    console.info("Free eBook email accepted by Resend:", data?.id);

    // Optional publisher notification. Failure here does not block delivery.
    try {
      await resend.emails.send({
        from: "Awakened Perspective Press <noreply@awakenedperspectivepress.com>",
        to: ["gary@awakenedperspectivepress.com"],
        replyTo: email,
        subject: "New Free eBook Reader",
        text: `New reader signup\nName: ${name}\nEmail: ${email}\nSource: Conversations With My Inner Being`,
      });
    } catch (notificationError) {
      console.error("Publisher signup notification failed:", notificationError);
    }

    return redirectToReaderWelcome(origin);
  } catch (error) {
    console.error("Trilogy reader signup failed:", error);
    return redirectToReaderWelcome(origin, "unavailable");
  }
}