import { createHmac } from "node:crypto";
import { Resend } from "resend";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://awakenedperspectivepress.com";

const FROM_EMAIL =
  "Awakened Perspective Press <noreply@awakenedperspectivepress.com>";

const REPLY_TO = "hello@awakenedperspectivepress.com";

const unsubscribeSecret = process.env.EMAIL_UNSUBSCRIBE_SECRET;

export const BOOK_LAUNCH_EMAILS = [
  {
    subject: "Welcome to a Different Perspective",
    heading: "Welcome",
    paragraphs: [
      "Thank you for joining the launch journey for Understanding External Reflections.",
      "This book explores how a different perspective can change the way we understand ourselves, our experiences, and the world around us.",
      "Over the next few days, I'll share a few reflections from the ideas behind the book. There's nothing you need to agree with or figure out. Simply consider what resonates with you.",
    ],
  },
  {
    subject: "What If Your Perspective Is Part of the Picture?",
    heading: "A Different Way of Seeing",
    paragraphs: [
      "We often experience an event and immediately decide what it means. But what happened and the meaning we give it aren't always the same thing.",
      "Two people can experience the same moment and walk away with very different understandings. Neither perspective necessarily tells the whole story.",
      "Today, consider a situation that has been on your mind. What might change if you allowed another interpretation to exist alongside your own?",
    ],
  },
  {
    subject: "The Space Between What Happens and What We Experience",
    heading: "The Space Between",
    paragraphs: [
      "Between an experience and our response lies a space we don't always notice. Our assumptions, memories, and expectations can influence what we believe is happening.",
      "Noticing that space doesn't require you to suppress your feelings or pretend everything is positive. It simply gives you an opportunity to see your experience with a little more openness.",
      "The next time something surprises or frustrates you, pause for a moment. What do you know happened, and what are you adding to that experience?",
    ],
  },
  {
    subject: "The Confidence to Not Know",
    heading: "The Confidence to Not Know",
    paragraphs: [
      "We're often encouraged to have answers. Yet sometimes the most honest and freeing response is to acknowledge that we don't know.",
      "Not knowing doesn't mean you lack confidence. It can mean you're open to information you haven't considered and possibilities you couldn't previously see.",
      "Think about something you've already decided is true. What becomes possible if, just for a moment, you give yourself permission to reconsider it?",
    ],
  },
  {
    subject: "The Creation: What Will You Do With This Moment?",
    heading: "The Creation",
    paragraphs: [
      "Every moment presents an opportunity to respond, explore, and create. We can't always choose the circumstances that arrive, but we can become more aware of how we participate in what happens next.",
      "The ideas in Understanding External Reflections are invitations to investigate your own experience, not instructions telling you what to believe.",
      "If these reflections have sparked your curiosity, you can explore the book below and continue the conversation in your own way.",
    ],
  },
] as const;

function createUnsubscribeToken(email: string) {
  if (!unsubscribeSecret) {
    throw new Error(
      "EMAIL_UNSUBSCRIBE_SECRET is not configured."
    );
  }

  return createHmac("sha256", unsubscribeSecret)
    .update(email.trim().toLowerCase())
    .digest("hex");
}

export function createUnsubscribeUrl(email: string) {
  const token = createUnsubscribeToken(email);
  const url = new URL("/book-launch/unsubscribe", SITE_URL);

  url.searchParams.set("email", email.trim().toLowerCase());
  url.searchParams.set("token", token);

  return url.toString();
}

export function verifyUnsubscribeToken(
  email: string,
  token: string
) {
  if (!unsubscribeSecret || !/^[a-f0-9]{64}$/i.test(token)) {
    return false;
  }

  const expected = createUnsubscribeToken(email);
  const { timingSafeEqual } = require("node:crypto") as typeof import("node:crypto");

  return timingSafeEqual(
    Buffer.from(expected, "hex"),
    Buffer.from(token, "hex")
  );
}

export function renderSequenceEmail(
  name: string,
  step: number,
  unsubscribeUrl: string
) {
  const message = BOOK_LAUNCH_EMAILS[step];

  if (!message) {
    throw new Error(`Invalid book launch email step: ${step}`);
  }

  const safeName = name.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });

  const paragraphs = message.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const safeUnsubscribeUrl = unsubscribeUrl.replace(/&/g, "&amp;");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.8;color:#243447;max-width:620px;margin:0 auto;padding:24px">
      <div style="background:#102a43;padding:28px 24px;text-align:center;border-radius:8px 8px 0 0">
        <p style="color:#d6b56d;letter-spacing:2px;font-size:12px;margin:0 0 10px">
          AWAKENED PERSPECTIVE PRESS
        </p>
        <h1 style="color:#ffffff;font-size:27px;margin:0">
          ${message.heading}
        </h1>
      </div>

      <div style="border:1px solid #e5e7eb;border-top:0;padding:28px 24px;border-radius:0 0 8px 8px">
        <p>Hi ${safeName},</p>
        ${paragraphs}

        <p style="margin:28px 0">
          <a href="${SITE_URL}/book-launch/thank-you"
             style="display:inline-block;background:#102a43;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:5px">
            Explore the Book
          </a>
        </p>

        <p style="margin-top:28px">
          Warm regards,<br />
          <strong>Gary Walker</strong><br />
          Awakened Perspective Press
        </p>

        <hr style="border:0;border-top:1px solid #e5e7eb;margin:28px 0 16px" />

        <p style="font-size:12px;color:#6b7280">
          You're receiving these messages because you requested book launch updates from Awakened Perspective Press.
          <a href="${safeUnsubscribeUrl}" style="color:#6b7280">Unsubscribe from these emails</a>.
        </p>
      </div>
    </div>
  `;
}

export async function sendSequenceEmail({
  name,
  email,
  step,
}: {
  name: string;
  email: string;
  step: number;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const message = BOOK_LAUNCH_EMAILS[step];

  if (!message) {
    throw new Error(`Invalid book launch email step: ${step}`);
  }

  const unsubscribeUrl = createUnsubscribeUrl(email);
  const resend = new Resend(apiKey);

  return resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    replyTo: REPLY_TO,
    subject: message.subject,
    html: renderSequenceEmail(name, step, unsubscribeUrl),
  });
}