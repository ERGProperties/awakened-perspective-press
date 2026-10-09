
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

    // Save the reader before sending any notification email.
    const existingReader = await prisma.reader.findUnique({
      where: { email },
    });

    if (existingReader) {
      // Do not duplicate records or silently re-consent an existing reader.
      // A previously opted-out reader can contact the press to resubscribe.
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

    // Email notification is secondary to saving the signup.
    if (!process.env.RESEND_API_KEY) {
      console.error(
        "Reader saved, but RESEND_API_KEY is not configured."
      );

      return NextResponse.redirect(
        new URL("/book-launch/thank-you", origin),
        303
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    const { error } = await resend.emails.send({
      from: "Awakened Perspective Press <noreply@awakenedperspectivepress.com>",
      to: ["gary@awakenedperspectivepress.com"],
      replyTo: email,
      subject:
        "New Book Launch Signup — Understanding External Reflections",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;color:#222;max-width:620px;margin:auto">
          <h1 style="color:#102a43">New book launch signup</h1>
          <p>Someone asked to receive launch updates for <em>Understanding External Reflections</em>.</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Marketing consent:</strong> Yes — requested launch and publication updates.</p>
          <p style="font-size:12px;color:#777">Submitted through awakenedperspectivepress.com/book-launch.</p>
        </div>
      `,
    });

    if (error) {
      console.error(
        "Reader saved, but Resend notification failed:",
        error
      );
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
