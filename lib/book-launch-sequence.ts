import {
  createHmac,
  timingSafeEqual,
} from "node:crypto";
import { Resend } from "resend";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.awakenedperspectivepress.com"
).replace(/\/+$/, "");

const FROM_EMAIL =
  "Awakened Perspective Press <noreply@awakenedperspectivepress.com>";

const REPLY_TO = "hello@awakenedperspectivepress.com";

const unsubscribeSecret = process.env.EMAIL_UNSUBSCRIBE_SECRET;

export const BOOK_LAUNCH_EMAILS = [
  {
    subject: "Welcome to a Different Perspective",
    heading: "Welcome",
    paragraphs: [
      "Thank you for joining me on the journey behind Understanding External Reflections: An Unorthodox Conversation.",
      "I didn't set out to write a book. I was exploring questions about life, reality, manifestation, and why the way we feel inside doesn't always seem to match what we see happening around us.",
      "What began as a conversation gradually changed the questions I was asking.",
      "Instead of constantly wondering, When will things change? Where is the evidence? What am I missing? I began to explore something different.",
      "What if I didn't need to figure everything out before I could enjoy my life?",
      "That question opened a door I hadn't expected.",
      "Over the next few days, I'll share some of the reflections that emerged along the way. You don't have to agree with them. You don't have to adopt a new philosophy. I'm simply inviting you to investigate your own experience and see what resonates.",
      "For now, here's a question to carry with you: What if you don't need another answer to begin experiencing life differently?",
    ],
  },
  {
    subject: "What If Your Perspective Is Part of the Picture?",
    heading: "A Different Way of Seeing",
    paragraphs: [
      "Have you ever experienced something, decided what it meant, and then reacted to that interpretation as though it were the only possible explanation?",
      "It happens to all of us.",
      "Someone says something unexpected. An opportunity doesn't materialize. A plan falls apart. Almost immediately, our minds begin constructing a story about what happened and what it means for us.",
      "But there's a distinction worth investigating: What happened isn't always the same as what we believe happened.",
      "That doesn't mean the circumstances aren't real. It doesn't mean every difficult experience has a hidden positive meaning. And it certainly doesn't mean we're responsible for everything that happens to us.",
      "It means we can become curious about the part we play in interpreting our experiences.",
      "Two people can encounter the same situation and understand it differently. Our expectations, memories, and assumptions influence what we notice and how we respond.",
      "Sometimes a new perspective doesn't change the event itself. It changes what becomes possible for us to see and do next.",
      "Think of a situation you've been interpreting in one particular way. Ask yourself: What do I actually know, and what am I assuming?",
      "You don't have to replace your original interpretation with a more positive one. Just allow room for another possibility.",
      "You may discover something interesting. And even if you don't, you've given yourself permission to question rather than automatically accept the first story that comes to mind.",
      "That's where a different perspective begins.",
    ],
  },
  {
    subject: "The Space Between What Happens and What We Experience",
    heading: "The Space Between",
    paragraphs: [
      "Imagine receiving unexpected news.",
      "Before you've had time to understand what happened, your mind is already considering what it means, what might happen next, and what you should do about it.",
      "Within seconds, one event can become an entire story about your future.",
      "I've become increasingly interested in the space between what happens and how we experience it.",
      "In that space, we can begin to notice our assumptions, expectations, emotions, and interpretations. We can recognize when we're responding to the actual situation and when we're reacting to what we fear it might mean.",
      "This isn't about suppressing emotions or forcing ourselves to remain positive.",
      "Sometimes disappointment is disappointment. Uncertainty is uncertainty. And some circumstances genuinely require difficult decisions and practical action.",
      "The opportunity is to become aware of our experience before automatically allowing our first reaction to determine our next move.",
      "Something doesn't go according to plan. One response is to conclude, This isn't working. I've made the wrong decision.",
      "Another is to pause and ask: What actually happened? What do I know now that I didn't know before? What options do I have from here?",
      "The circumstances may be exactly the same. But the questions you ask can open up a different way of responding.",
      "The next time something catches you off guard, pause. Notice what happened. Notice the story you're telling yourself. Then investigate what comes next.",
      "You don't have to solve your entire life in that moment. Sometimes awareness is enough to help you see the next step more clearly.",
    ],
  },
  {
    subject: "The Confidence to Not Know",
    heading: "The Confidence to Not Know",
    paragraphs: [
      "For a long time, I thought confidence meant knowing.",
      "Knowing what I was doing. Knowing where I was going. Knowing that a decision was right and that an opportunity would work out.",
      "The problem was that life rarely offered the certainty I wanted.",
      "So I kept searching. Another answer. Another realization. Another sign that I was finally moving in the right direction.",
      "Eventually, a different possibility emerged.",
      "What if confidence isn't knowing what will happen, but trusting yourself to navigate what does?",
      "Think about that for a moment.",
      "You can make a decision without knowing exactly where it will lead. You can explore an opportunity without having a guarantee. You can change your mind when new information appears.",
      "You can discover that you were mistaken without treating that discovery as a personal failure.",
      "Not knowing doesn't have to mean you're lost. It can simply mean the next part of the experience hasn't happened yet.",
      "Of course, there are times when we need to gather information, consider risks, and make careful plans. This isn't an invitation to ignore reality or abandon responsibility.",
      "It's an invitation to recognize that no amount of thinking can give us complete certainty about everything that lies ahead.",
      "What would you explore if you trusted yourself to respond to whatever you discovered?",
      "You don't need to know the entire path before taking a reasonable next step. Sometimes the confidence comes not from predicting the outcome, but from being willing to meet it when it arrives.",
    ],
  },
  {
    subject: "The Creation: What Will You Do With This Moment?",
    heading: "The Creation",
    paragraphs: [
      "When I first thought about creation, I thought about creating something.",
      "A business. A book. An opportunity. A future.",
      "I imagined creation as the process of making something happen and eventually reaching the result I wanted.",
      "But as the conversations behind Understanding External Reflections unfolded, my perspective began to change.",
      "What if creation isn't only about the things we're trying to bring into existence? What if it's also about experiencing what is unfolding right now?",
      "As I write these words, I don't know what the next sentence will be until I write it. The next conversation hasn't happened. The next idea hasn't arrived. The next experience is still unknown.",
      "And rather than seeing that uncertainty as a problem, I can approach it with curiosity.",
      "What interests me? What inspires me? What do I appreciate about this moment? What might I like to explore?",
      "That doesn't mean giving up on goals or refusing to take action. I still have ideas, ambitions, and things I want to create.",
      "The difference is that I don't need the outcome of those things to determine whether the present moment has value.",
      "I can want something without needing it to feel fulfilled. I can pursue an opportunity without demanding that it unfold exactly as imagined. I can take action without knowing where the path will lead.",
      "And when something unexpected happens, I can investigate rather than immediately deciding what it means.",
      "For me, that is where L.I.V.E. comes in: Love. Investigate. Venture. Enjoy.",
      "Love the moment. Investigate your curiosity. Venture when something draws you forward. Enjoy the unfolding.",
      "These aren't rules you have to follow perfectly. They're reminders to experience the life that's actually happening rather than becoming so focused on the future that you miss the present.",
      "Understanding External Reflections: An Unorthodox Conversation grew out of the questions, unexpected insights, and discoveries that changed the way I approach my own experience.",
      "It isn't a set of instructions telling you what to believe. It's an invitation to question, reflect, and discover what a different perspective might open up for you.",
      "Whatever you choose to do next, here's one final question: What is creating itself in your life right now—and what might happen if you simply became curious enough to find out?",
      "Thank you for being part of this journey.",
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
  const normalizedEmail = email.trim().toLowerCase();
  const token = createUnsubscribeToken(normalizedEmail);
  const url = new URL(
    "/book-launch/unsubscribe",
    SITE_URL
  );

  url.searchParams.set("email", normalizedEmail);
  url.searchParams.set("token", token);

  return url.toString();
}

export function verifyUnsubscribeToken(
  email: string,
  token: string
) {
  if (
    !unsubscribeSecret ||
    !/^[a-f0-9]{64}$/i.test(token)
  ) {
    return false;
  }

  const expected = createUnsubscribeToken(email);

  return timingSafeEqual(
    Buffer.from(expected, "hex"),
    Buffer.from(token, "hex")
  );
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

export function renderSequenceEmail(
  name: string,
  step: number,
  unsubscribeUrl: string
) {
  const message = BOOK_LAUNCH_EMAILS[step];

  if (!message) {
    throw new Error(
      `Invalid book launch email step: ${step}`
    );
  }

  const buttonLabel =
    step === 4
      ? "Get Your Copy — $7.99"
      : step <= 1
        ? "Discover the Book"
        : "Explore the Book";

  const safeName = escapeHtml(name);

  const paragraphs = message.paragraphs
    .map(
      (paragraph) =>
        `<p style="margin:0 0 18px">${escapeHtml(paragraph)}</p>`
    )
    .join("");

  const safeUnsubscribeUrl = escapeHtml(unsubscribeUrl);
  const purchaseUrl = escapeHtml(
    `${SITE_URL}/book-launch/thank-you`
  );
  const safeHeading = escapeHtml(message.heading);
  const safeButtonLabel = escapeHtml(buttonLabel);

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.8;color:#243447;max-width:620px;margin:0 auto;padding:24px">
      <div style="background:#102a43;padding:28px 24px;text-align:center;border-radius:8px 8px 0 0">
        <p style="color:#d6b56d;letter-spacing:2px;font-size:12px;margin:0 0 10px">
          AWAKENED PERSPECTIVE PRESS
        </p>
        <h1 style="color:#ffffff;font-size:27px;margin:0">
          ${safeHeading}
        </h1>
      </div>

      <div style="border:1px solid #e5e7eb;border-top:0;padding:28px 24px;border-radius:0 0 8px 8px">
        <p>Hi ${safeName},</p>

        ${paragraphs}

        <p style="margin:28px 0;text-align:center">
          <a href="${purchaseUrl}"
             style="display:inline-block;background:#102a43;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:5px;font-weight:bold">
            ${safeButtonLabel}
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
    throw new Error(
      `Invalid book launch email step: ${step}`
    );
  }

  const unsubscribeUrl = createUnsubscribeUrl(email);
  const resend = new Resend(apiKey);

  return resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    replyTo: REPLY_TO,
    subject: message.subject,
    html: renderSequenceEmail(
      name,
      step,
      unsubscribeUrl
    ),
  });
}