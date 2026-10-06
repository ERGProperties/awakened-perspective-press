import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      phone,
      bookTitle,
      stage,
      genre,
      message,
    } = data;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          error:
            "Name, email, phone number, and message are required.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Awakened Perspective Press <noreply@awakenedperspectivepress.com>",
      to: ["gary@awakenedperspectivepress.com"],
      replyTo: email,
      subject: `New Author Inquiry${bookTitle ? ` — ${bookTitle}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2 style="color: #102a43;">New Author Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Book Title:</strong> ${bookTitle || "Not provided"}</p>
          <p><strong>Stage:</strong> ${stage || "Not provided"}</p>
          <p><strong>Genre:</strong> ${genre || "Not provided"}</p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p style="font-size: 12px; color: #777;">
            Submitted through the Awakened Perspective Press website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}