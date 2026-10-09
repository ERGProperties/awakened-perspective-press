import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

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

    // Save the reader before attempting email delivery.
    const existingReader = await prisma.reader.findUnique({
      where: { email },
    });

    if (existingReader) {
      // Do not create duplicate records or silently renew consent.
      return NextResponse.redirect(
        new URL("/book-launch/thank-you", origin),
        303
      );
    }

    await prisma.reader.create({
      data: {
        name,
        email,
        consent: true,
        consentedAt: new Date(),
        source: "book-launch",
      },
    });

    // Email delivery is separate from database storage.
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error(
        "Reader saved, but RESEND_API_KEY is not configured."
      );

      return NextResponse.redirect(
        new URL("/book-launch/thank-you", origin),
        303
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    // 1. Send the welcome email to the reader.
    try {
      const { data, error } = await resend.emails.send({
        from: "Awakened Perspective Press <noreply@awakenedperspectivepress.com>",
        to: [email],
        replyTo: "hello@awakenedperspectivepress.com",
        subject:
          "Welcome — Understanding External Reflections",
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.8;color:#243447;max-width:620px;margin:0 auto;padding:24px">
            <div style="background:#102a43;padding:28px 24px;text-align:center;border-radius:8px 8px 0 0">
              <p style="color:#d6b56d;letter-spacing:2px;font-size:12px;margin:0 0 10px">
                AWAKENED PERSPECTIVE PRESS
              </p>
              <h1 style="color:#ffffff;font-size:27px;margin:0">
                Welcome
              </h1>
            </div>

            <div style="border:1px solid #e5e7eb;border-top:0;padding:28px 24px;border-radius:0 0 8px 8px">
              <p>Hi ${safeName},</p>

              <p>Thank you for signing up for launch updates for
              <em>Understanding External Reflections</em> by Gary Walker.</p>

              <p>I'm glad you're joining us for this journey. This book explores how a different perspective can change the way we understand ourselves, our experiences, and the world around us.</p>

              <p>We'll share relevant updates about the book's publication and launch as they become available.</p>

              <p>In the meantime, thank you for your interest and for being part of this growing community of readers.</p>

              <p style="margin-top:28px">
                Warm regards,<br />
                <strong>Gary Walker</strong><br />
                Awakened Perspective Press
              </p>

              <hr style="border:0;border-top:1px solid #e5e7eb;margin:28px 0 16px" />

              <p style="font-size:12px;color:#6b7280">
                You received this confirmation because you requested book launch updates at awakenedperspectivepress.com.
                If you did not submit this signup, you can disregard this message.
              </p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error(
          "Reader saved, but welcome email failed:",
          error
        );
      } else {
        console.info(
          "Reader welcome email accepted by Resend:",
          data?.id
        );
      }
    } catch (error) {
      console.error("Welcome email request failed:", error);
    }

    // 2. Independently notify the publisher.
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
      console.error("Publisher notification request failed:", error);
    }

    return NextResponse.redirect(
      new URL("/book-launch/thank-you", origin),
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