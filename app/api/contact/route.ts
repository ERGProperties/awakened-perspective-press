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

    // Email to Awakened Perspective Press
    const { error: ownerError } = await resend.emails.send({
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

    if (ownerError) {
      console.error("Resend owner email error:", ownerError);

      return NextResponse.json(
        { error: "Unable to send your message." },
        { status: 500 }
      );
    }

    // Confirmation email to the prospective author
    const { error: confirmationError } = await resend.emails.send({
      from: "Awakened Perspective Press <noreply@awakenedperspectivepress.com>",
      to: [email],
      replyTo: "gary@awakenedperspectivepress.com",
      subject: "Thank You for Contacting Awakened Perspective Press",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #222; max-width: 650px; margin: 0 auto;">
          
          <div style="padding: 30px 0; border-bottom: 1px solid #ddd;">
            <h1 style="margin: 0; color: #102a43; font-family: Georgia, serif;">
              Awakened Perspective Press
            </h1>
            <p style="margin: 8px 0 0; color: #b7791f; font-size: 13px; font-weight: bold; letter-spacing: 2px;">
              YOUR STORY. YOUR VOICE. YOUR BOOK.
            </p>
          </div>

          <div style="padding: 35px 0;">
            <h2 style="color: #102a43; font-family: Georgia, serif; font-size: 28px;">
              Thank you for reaching out, ${name}.
            </h2>

            <p>
              We've received your inquiry and appreciate you taking the time
              to tell us about your book.
            </p>

            <p>
              Gary Walker will personally review your information and be in
              touch soon to discuss your book, where you are in the publishing
              process, and how Awakened Perspective Press may be able to help.
            </p>

            <div style="margin: 30px 0; padding: 22px; background: #f1ede4; border-radius: 12px;">
              <p style="margin: 0 0 10px; font-weight: bold; color: #102a43;">
                What happens next?
              </p>

              <p style="margin: 0; color: #555;">
                We'll review your inquiry and contact you using the information
                you provided. We look forward to learning more about your story.
              </p>
            </div>

            <p>
              In the meantime, there's nothing else you need to do.
              We'll be in touch soon.
            </p>

            <p style="margin-top: 30px;">
              Warm regards,<br />
              <strong>Gary Walker</strong><br />
              Founder & Publisher<br />
              Awakened Perspective Press
            </p>
          </div>

          <div style="padding: 25px 0; border-top: 1px solid #ddd; color: #777; font-size: 12px;">
            <p style="margin: 0;">
              Awakened Perspective Press
            </p>
            <p style="margin: 5px 0 0;">
              Your Story. Your Voice. Your Book.
            </p>
          </div>

        </div>
      `,
    });

    if (confirmationError) {
      console.error(
        "Resend confirmation email error:",
        confirmationError
      );

      // The owner's email already succeeded, so don't tell the
      // prospective author their inquiry failed.
      return NextResponse.json({ success: true });
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