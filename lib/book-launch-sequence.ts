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
    subject: "What if life could be experienced differently?",
    heading: "A Different Perspective",
    paragraphs: [
      "When you begin Understanding External Reflections, I invite you to approach it with curiosity rather than the expectation that you must agree with every idea.",
      "The book grew out of a simple but powerful exploration: how much of what we experience is shaped by the meaning we give to what happens?",
      "An event takes place. We interpret it through our expectations, memories, assumptions, and beliefs. Then we often respond to that interpretation as though it were the only possible way to see things.",
      "What changes when we become curious about that process?",
      "This isn't about pretending difficult circumstances don't exist or convincing ourselves that everything is wonderful. It's about recognizing that our first interpretation may not be the only one available to us.",
      "As you read, give yourself permission to pause, question, and notice what resonates with your own experience. You don't need to reach a conclusion. The investigation itself can be valuable.",
      "Here's something to consider: What might become possible if you allowed yourself to see a familiar part of your life from a different perspective?"
    ],
  },
  {
    subject: "The space between what happens and what we experience",
    heading: "The Space Between",
    paragraphs: [
      "There is often a moment between an event and our response to it, even if that moment feels very small.",
      "Something happens. A conversation takes an unexpected turn. A plan changes. An opportunity doesn't appear. Almost immediately, we can begin telling ourselves what it means and what is likely to happen next.",
      "But what happened and the story we formed about what happened are not necessarily the same thing.",
      "When we notice that distinction, we create room to investigate. What do I actually know? What am I assuming? What else might be worth considering?",
      "The purpose isn't to replace every uncomfortable thought with a positive one. It is to become more aware of how we are experiencing life, so our next response can come from greater clarity rather than automatic reaction.",
      "Try this the next time something surprises you: take a breath, notice the interpretation forming, and give yourself permission not to settle on an answer immediately.",
      "Sometimes a little space is enough to reveal a choice you couldn't see while caught up in the first reaction."
    ],
  },
  {
    subject: "Moving from understanding to experiencing abundance",
    heading: "The Experience of Abundance",
    paragraphs: [
      "Understanding a different perspective can change the questions we ask. But eventually, understanding invites us into something more: experiencing life differently.",
      "That is where Abundance Abounds continues the conversation.",
      "Abundance is often treated as something we will experience once we have acquired enough, achieved enough, or reached a particular destination. That way of thinking can keep fulfillment permanently somewhere in the future.",
      "What if abundance is also a way of experiencing the life that is already unfolding? What if appreciation, possibility, curiosity, and the freedom to participate in each moment are part of the experience—not merely rewards waiting at the finish line?",
      "This doesn't mean ignoring practical needs, giving up goals, or pretending that circumstances never matter. It means exploring whether the pursuit of more has distracted us from experiencing what is already here.",
      "As you continue reading your free eBook, notice the moments when your attention moves entirely toward what is missing. Then gently ask: What is available to appreciate, explore, or experience right now?",
      "Abundance becomes more meaningful when it is something we live, not simply something we wait to possess."
    ],
  },
  {
    subject: "What if the experience is the reward?",
    heading: "Living Abundance",
    paragraphs: [
      "We can become so focused on the result we hope to achieve that the experience required to get there becomes something we simply endure.",
      "We work toward the next milestone, the next purchase, the next opportunity, or the next version of life. And when we reach it, our attention may already have moved to whatever comes after.",
      "Abundance Abounds explores a different possibility: that the experience itself has value, and that life doesn't have to be postponed until a particular outcome arrives.",
      "You can have ambitions and still appreciate the present. You can want change without treating today as an obstacle. You can take meaningful action while remaining open to what the journey reveals.",
      "Consider something you are currently working toward. What part of the experience could you appreciate today, rather than reserving all your satisfaction for the eventual result?",
      "This is not a request to settle or stop growing. It is an invitation to include the journey in what you are creating.",
      "What if the experience is not merely the path to the reward? What if the experience is part of the reward itself?"
    ],
  },
  {
    subject: "The internal shift that opens the door to joy",
    heading: "Finding Greatest Joy",
    paragraphs: [
      "There is a natural progression in this journey. First, we investigate how we understand our experiences. Then we begin exploring what it means to live with a greater sense of abundance.",
      "Finding Greatest Joy takes the conversation another step inward.",
      "Joy is often treated as a response to circumstances: something good happens, and then we feel happy. But what if discovering joy also involves an internal shift in how we relate to life?",
      "That shift doesn't require every circumstance to be perfect. It doesn't ask us to deny sadness, disappointment, or uncertainty. It invites us to recognize that our capacity to experience life is not limited to waiting for everything outside us to line up.",
      "When our attention changes, what we notice can change. When what we notice changes, new possibilities for experiencing the moment may become visible.",
      "Think about a time when you felt genuinely engaged in life—not because everything was exactly as planned, but because you were present in the experience. What was different about the way you were relating to that moment?",
      "Perhaps the discovery of joy begins less with controlling life and more with changing how we participate in it."
    ],
  },
  {
    subject: "Could freedom and joy be two sides of the same experience?",
    heading: "The Freedom to Enjoy Life",
    paragraphs: [
      "I've been exploring the relationship between freedom and joy, and I keep returning to the possibility that they are deeply connected.",
      "Freedom is often described as having the ability to choose what we do. But there is another kind of freedom worth considering: the freedom to experience the moment without making our well-being entirely dependent on a particular outcome.",
      "When we believe we must control every detail before we can relax, our attention can become consumed by what might go wrong. When we allow ourselves to participate without demanding certainty, a different experience becomes possible.",
      "This doesn't mean abandoning discernment or responsibility. We still make choices, set boundaries, and take practical action. The difference is that we don't have to turn every unknown into a threat or every delay into a verdict on our lives.",
      "Could joy be the experience of being free to engage with life as it unfolds? And could freedom become more meaningful when it allows us to experience greater joy?",
      "You might consider: Where am I waiting for permission, certainty, or a particular result before allowing myself to enjoy the life I'm living?",
      "The question isn't whether circumstances matter. It is whether we can discover more freedom in the way we meet them."
    ],
  },
  {
    subject: "When we stop forcing, we can begin to listen",
    heading: "Allowing Life to Unfold",
    paragraphs: [
      "Sometimes our effort to make life happen can become so constant that we leave little room to notice what is already unfolding.",
      "We plan, analyze, push, and search for the next answer. Yet some of our most meaningful insights arrive when we become quiet—while walking, reflecting, or simply allowing our attention to settle.",
      "In those moments, an idea may arise, a direction may become clearer, or we may recognize a next step that wasn't visible while we were trying to force an outcome.",
      "I think of this as a cooperative dance with life: we become still enough to notice what draws our interest, take an inspired and considered step, observe how life responds, and remain open to what that response reveals.",
      "This is not a promise that every impulse is guidance or that practical judgment is unnecessary. We can listen inwardly and still examine our options, consider consequences, and take responsibility for our choices.",
      "The invitation is to balance effort with openness. Instead of insisting that the entire path reveal itself now, what if we became attentive to the next reasonable step?",
      "What might you notice if you allowed a little more quiet, trust, and room for life to surprise you?"
    ],
  },
  {
    subject: "Love. Investigate. Venture. Enjoy. — Bringing the journey together",
    heading: "L.I.V.E.",
    paragraphs: [
      "We've arrived at the point where the three books come together.",
      "Understanding External Reflections invites us to investigate how we interpret and experience life. Abundance Abounds invites us to move beyond understanding and experience abundance as part of living. Finding Greatest Joy explores the internal shift that allows us to participate in life with greater freedom, trust, and joy.",
      "And this brings us back to the philosophy that sparked the first book: L.I.V.E. — Love. Investigate. Venture. Enjoy.",
      "Love the life you are experiencing. Investigate what you believe, what you feel, and what might be possible. Venture toward what inspires your curiosity. Enjoy the experience—not only the destination you hope to reach.",
      "L.I.V.E. isn't a formula to follow perfectly. It is a reminder to remain engaged with life: to be open, to explore, to take thoughtful action, and to appreciate the unfolding.",
      "You don't have to finish a book, solve every question, or reach a final destination to begin living this way. The next moment is already an opportunity to participate.",
      "Thank you for allowing me to share this journey with you. I hope the books give you ideas to investigate, perspectives to consider, and questions that continue to unfold in your own experience.",
      "If you'd like to explore the complete Conversations With My Inner Being trilogy, you'll find all three books together here."
    ],
  },
] as const;

function createUnsubscribeToken(email: string) {
  if (!unsubscribeSecret) {
    throw new Error("EMAIL_UNSUBSCRIBE_SECRET is not configured.");
  }

  return createHmac("sha256", unsubscribeSecret)
    .update(email.trim().toLowerCase())
    .digest("hex");
}

export function createUnsubscribeUrl(email: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const token = createUnsubscribeToken(normalizedEmail);
  const url = new URL("/book-launch/unsubscribe", SITE_URL);

  url.searchParams.set("email", normalizedEmail);
  url.searchParams.set("token", token);

  return url.toString();
}

export function verifyUnsubscribeToken(email: string, token: string) {
  if (!unsubscribeSecret || !/^[a-f0-9]{64}$/i.test(token)) {
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
    throw new Error(`Invalid book launch email step: ${step}`);
  }

  const safeName = escapeHtml(name);
  const paragraphs = message.paragraphs
    .map((paragraph) => `<p style="margin:0 0 18px">${escapeHtml(paragraph)}</p>`)
    .join("");
  const safeUnsubscribeUrl = escapeHtml(unsubscribeUrl);
  const storefrontUrl = escapeHtml(
    `${SITE_URL}/conversations-with-my-inner-being`
  );
  const safeHeading = escapeHtml(message.heading);

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.8;color:#243447;max-width:620px;margin:0 auto;padding:24px">
      <div style="background:#102a43;padding:28px 24px;text-align:center;border-radius:8px 8px 0 0">
        <p style="color:#d6b56d;letter-spacing:2px;font-size:12px;margin:0 0 10px">
          AWAKENED PERSPECTIVE PRESS
        </p>
        <h1 style="color:#ffffff;font-size:27px;margin:0">${safeHeading}</h1>
      </div>
      <div style="border:1px solid #e5e7eb;border-top:0;padding:28px 24px;border-radius:0 0 8px 8px">
        <p>Hi ${safeName},</p>
        ${paragraphs}
        <p style="margin:28px 0;text-align:center">
          <a href="${storefrontUrl}" style="display:inline-block;background:#102a43;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:5px;font-weight:bold">
            Explore the Trilogy
          </a>
        </p>
        <p style="margin-top:28px">
          Warm regards,<br />
          <strong>Gary Walker</strong><br />
          Awakened Perspective Press
        </p>
        <hr style="border:0;border-top:1px solid #e5e7eb;margin:28px 0 16px" />
        <p style="font-size:12px;color:#6b7280">
          You're receiving these reflections because you requested the free eBook and agreed to receive occasional reflections and trilogy updates.
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
