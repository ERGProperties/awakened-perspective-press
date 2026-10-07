import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  Globe2,
  PenLine,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Authors: AI-Assisted Publishing Guide",
  description:
    "Learn how AI-assisted and AI-generated content differ, how authors can use AI responsibly, and what to consider when publishing an AI-assisted book.",
  keywords: [
    "AI and authors",
    "AI-assisted publishing",
    "AI-assisted writing",
    "AI-generated books",
    "publishing AI-assisted books",
    "AI book publishing",
    "can I publish a book written with AI",
    "AI and self-publishing",
    "AI author services",
    "AI book writing",
    "book publishing with AI",
    "AI publishing guidelines",
  ],
  alternates: {
    canonical:
      "https://awakenedperspectivepress.com/publishing/ai-and-authors",
  },
};

const distinctions = [
  {
    icon: PenLine,
    number: "01",
    title: "AI-Assisted",
    text: "The author remains the creative decision-maker while using AI as a tool for brainstorming, organization, editing, refinement, research assistance, or other parts of the creative process.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "AI-Generated",
    text: "AI creates the actual content, such as text, images, or translations. Publishing platforms may have specific disclosure requirements for this type of content.",
  },
];

const uses = [
  "Brainstorming ideas and exploring possibilities.",
  "Developing chapter structures and outlines.",
  "Organizing thoughts and identifying repetition.",
  "Suggesting alternative phrasing during revision.",
  "Helping identify inconsistencies or areas that need clarification.",
  "Supporting research and preparation before human review.",
];

const considerations = [
  {
    icon: ShieldCheck,
    title: "Accuracy",
    text: "AI output can contain errors, invented information, or unsupported claims. Authors remain responsible for reviewing and verifying what appears in their books.",
  },
  {
    icon: FileText,
    title: "Originality",
    text: "The finished work should reflect the author's ideas, perspective, judgment, and creative direction rather than simply accepting whatever an AI system produces.",
  },
  {
    icon: UserRound,
    title: "Author Voice",
    text: "Technology can help refine language, but the finished manuscript should still sound like the person whose name appears on the cover.",
  },
  {
    icon: Globe2,
    title: "Platform Policies",
    text: "Publishing platforms can establish their own rules about AI-generated and AI-assisted content. Authors should check the current requirements of the platforms they use.",
  },
];

const questions = [
  {
    question: "Can I publish a book I used AI to help write?",
    answer:
      "Yes, authors can use AI as part of their creative and publishing workflow. The important distinction is between AI assistance and AI-generated content, along with the policies of the publishing platforms being used. Authors should review the current requirements of each platform and remain responsible for the finished work.",
  },
  {
    question: "What is the difference between AI-assisted and AI-generated content?",
    answer:
      "AI-assisted work involves the author using AI as a tool while remaining responsible for the creative direction and final decisions. AI-generated content is content created by an AI system itself, such as generated text, images, or translations. Publishing platforms may treat these categories differently.",
  },
  {
    question: "Does Amazon KDP allow AI-generated books?",
    answer:
      "Amazon KDP currently allows AI-generated content but requires authors to inform Amazon when content is AI-generated. KDP distinguishes this from AI-assisted content, which currently does not require disclosure. Authors should always check Amazon&apos;s current guidelines because platform policies can change.",
  },
  {
    question: "Do I have to disclose that I used AI?",
    answer:
      "There is no single rule that applies to every publishing situation. Requirements can depend on how AI was used and which publishing platform or service is involved. For example, Amazon KDP currently requires disclosure of AI-generated content but not AI-assisted content.",
  },
  {
    question: "Can AI help me edit my manuscript?",
    answer:
      "Yes. AI can assist with identifying repetition, suggesting alternative wording, organizing material, and spotting areas that may need additional attention. Professional human editing can still provide important judgment, context, consistency, voice, and developmental perspective.",
  },
  {
    question: "Should I tell readers that I used AI?",
    answer:
      "That depends on the circumstances, the type of AI assistance involved, the publishing platform, and the author&apos;s own approach to transparency. Authors should understand the applicable platform requirements and make thoughtful decisions about how they communicate their creative process.",
  },
  {
    question: "Can Awakened Perspective Press help authors who used AI?",
    answer:
      "Yes. Awakened Perspective Press believes AI can be a useful tool when it serves the author rather than replacing the author. The focus is on developing a professional finished book while preserving human voice, judgment, originality, accuracy, and creative direction.",
  },
];

const aiPublishingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "AI & Authors: AI-Assisted Publishing Guide",
      description:
        "A practical guide to AI-assisted and AI-generated publishing, including author voice, accuracy, originality, platform policies, and responsible use of AI.",
      author: {
        "@type": "Organization",
        name: "Awakened Perspective Press",
        url: "https://awakenedperspectivepress.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Awakened Perspective Press",
        url: "https://awakenedperspectivepress.com",
      },
      mainEntityOfPage:
        "https://awakenedperspectivepress.com/publishing/ai-and-authors",
      about: [
        "AI-assisted publishing",
        "AI-generated content",
        "Book publishing",
        "Self-publishing",
        "Author services",
        "AI and authors",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: questions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function AIAndAuthorsPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#fbfaf7] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiPublishingSchema),
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fbfaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="group flex items-center">
            <div className="flex items-center gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 92 58"
                className="h-12 w-[76px] shrink-0"
                fill="none"
              >
                <path
                  d="M46 49C37 39 24 29 8 27C21 43 33 50 46 52"
                  stroke="#b7791f"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M46 49C55 39 68 29 84 27C71 43 59 50 46 52"
                  stroke="#b7791f"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M12 28C23 27 34 32 46 45C58 32 69 27 80 28"
                  stroke="#102a43"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M17 23C28 23 37 28 46 39C55 28 64 23 75 23"
                  stroke="#b7791f"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M23 18C31 19 39 23 46 32C53 23 61 19 69 18"
                  stroke="#102a43"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="46" cy="20" r="7" fill="#d69e2e" />
                <path
                  d="M46 12V4M38 14L34 7M54 14L58 7M33 18L26 15M59 18L66 15"
                  stroke="#d69e2e"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M29 6C34 1 40 0 46 0C52 0 58 1 63 6"
                  stroke="#b7791f"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

              <div className="leading-none">
                <p className="font-serif text-[1.35rem] font-bold tracking-[-0.02em] text-[#102a43]">
                  Awakened
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-[#b7791f]">
                  Perspective Press
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/publishing-packages"
            className="rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
          >
            Find Your Publishing Path
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(180,145,90,.16),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              AI & authors
            </p>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Where technology meets
              <span className="block italic text-amber-800">
                your voice.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
              AI is becoming part of the modern author&apos;s toolkit. The
              important question is not simply whether an author used AI, but
              how it was used and who remains responsible for the finished
              book.
            </p>

            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-800 sm:text-xl">
              AI can help you create a book. It shouldn&apos;t have to become
              the author.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/publishing-packages"
                className="group inline-flex items-center justify-center rounded-full bg-stone-900 px-7 py-4 font-bold text-white transition hover:bg-stone-700"
              >
                Explore Publishing Packages
                <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/publishing/how-to-publish-a-book"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-4 font-bold text-stone-800 transition hover:border-stone-500"
              >
                Read the Publishing Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              The important distinction
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              AI can be a tool without becoming the author.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-600">
            <p>
              Authors use technology in many different ways. Some use AI to
              brainstorm ideas or organize thoughts. Others use it during
              revision, editing, research, or preparation.
            </p>

            <p>
              That is different from having an AI system generate the actual
              content of a book. Publishing platforms may treat those
              situations differently, which makes understanding the
              distinction important.
            </p>

            <p>
              The goal should not be to hide technology from the creative
              process. The goal should be to use technology thoughtfully while
              keeping the author&apos;s perspective, judgment, originality,
              and responsibility at the center.
            </p>
          </div>
        </div>
      </section>

      {/* DISTINCTION */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
              Two different concepts
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              AI-assisted and AI-generated are not the same thing.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              Understanding this distinction can help authors make better
              decisions about their workflow and the publishing platforms they
              choose.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {distinctions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-amber-300">
                      {item.number}
                    </span>

                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-stone-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT AI CAN HELP WITH */}
      <section className="bg-[#fbfaf7] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
                Practical assistance
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Where AI can genuinely help an author.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                Used thoughtfully, AI can reduce friction around parts of the
                creative process without taking responsibility away from the
                author.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                The author should remain the person making the meaningful
                creative decisions and approving the final work.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
              <p className="font-serif text-2xl font-bold">
                AI can assist with:
              </p>

              <div className="mt-8 space-y-5">
                {uses.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <Check className="h-4 w-4" />
                    </div>

                    <p className="text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSIDERATIONS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              What authors should consider
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Technology does not remove responsibility.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Whether AI is used for one sentence or an entire workflow,
              authors should understand the quality, originality, accuracy,
              and publishing implications of the finished work.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {considerations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8 transition hover:-translate-y-1 hover:border-stone-400"
                >
                  <Icon className="h-7 w-7 text-amber-700" />

                  <h3 className="mt-7 text-xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-stone-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APP PHILOSOPHY */}
      <section className="relative overflow-hidden bg-[#f1ede4] py-24 md:py-32">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-amber-300">
                <Sparkles className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-amber-800">
                The APP philosophy
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Human voice.
                <span className="block italic text-amber-800">
                  AI assistance.
                </span>
                Professional publishing.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                Awakened Perspective Press does not believe authors should be
                forced to choose between modern technology and authentic human
                creativity.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                The technology should serve the author. The finished book
                should still reflect the person whose name appears on the
                cover.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-300 bg-white p-8 shadow-xl sm:p-10">
              <p className="font-serif text-2xl font-bold">
                What we believe matters:
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "The author's perspective remains central.",
                  "AI can assist without replacing judgment.",
                  "Professional editing still matters.",
                  "Accuracy and originality still matter.",
                  "The finished book should sound like the author.",
                  "Technology should support the publishing process, not define it.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <Check className="h-4 w-4" />
                    </div>

                    <p className="text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
              A practical approach
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              A modern publishing workflow.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              AI can become one tool inside a larger publishing process while
              the author remains responsible for the finished work.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Idea & Direction",
              "AI-Assisted Creation",
              "Human Review & Revision",
              "Professional Publishing",
            ].map((item, index) => (
              <div
                key={item}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="font-serif text-4xl font-bold text-amber-300">
                  0{index + 1}
                </p>

                <p className="mt-6 text-lg font-bold">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-8 text-center">
            <p className="text-lg font-semibold leading-8 text-stone-200">
              The technology may change. The author&apos;s responsibility for
              the finished book does not.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              Continue learning
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Explore the rest of your publishing plan.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Link
              href="/publishing/how-to-publish-a-book"
              className="group rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8 transition hover:-translate-y-1 hover:border-stone-400"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Publishing guide
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                How to Publish a Book
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Explore the complete journey from manuscript to marketplace.
              </p>

              <span className="mt-6 inline-flex items-center font-bold text-stone-900">
                Read the guide
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/publishing/self-publishing"
              className="group rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8 transition hover:-translate-y-1 hover:border-stone-400"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Self-publishing
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Self-Publishing a Book
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Learn how self-publishing works and which pieces authors need
                to consider.
              </p>

              <span className="mt-6 inline-flex items-center font-bold text-stone-900">
                Read the guide
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/publishing/book-publishing-services"
              className="group rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8 transition hover:-translate-y-1 hover:border-stone-400"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Author services
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Book Publishing Services
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Explore the professional services that can help take a
                manuscript to a finished book.
              </p>

              <span className="mt-6 inline-flex items-center font-bold text-stone-900">
                Explore services
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/publishing/isbn-book-distribution"
              className="group rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8 transition hover:-translate-y-1 hover:border-stone-400"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                ISBN & distribution
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                ISBNs & Book Distribution
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Understand ISBNs, editions, distribution channels, and
                marketplace options.
              </p>

              <span className="mt-6 inline-flex items-center font-bold text-stone-900">
                Read the guide
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fbfaf7] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              Frequently asked questions
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Questions authors ask about AI and publishing.
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {questions.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-8"
              >
                <h3 className="text-xl font-bold">{item.question}</h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-stone-950 pt-24 pb-10 text-white md:pt-32 md:pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,175,96,.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
            Your publishing path
          </p>

          <h2 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl">
            Your technology can evolve.
            <span className="block italic text-amber-200">
              Your voice should remain yours.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Tell us where you are in the process, what you want to accomplish,
            and where technology has helped along the way. We can start from
            there.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 font-black text-stone-950 transition hover:bg-amber-200"
            >
              Start a Conversation
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href="/publishing-packages"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              Explore Publishing Packages
            </Link>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-stone-500 sm:flex-row">
              <p>© {new Date().getFullYear()} Awakened Perspective Press.</p>

              <p>Your Story. Your Voice. Your Book.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}