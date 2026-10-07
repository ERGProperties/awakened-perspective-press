import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  Compass,
  FileText,
  Globe2,
  Megaphone,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Self-Publishing a Book: What Authors Need to Know",
  description:
    "Learn how self-publishing works, from manuscript preparation and ISBNs to book formatting, distribution, marketing, and building an author platform.",
  keywords: [
    "self publishing a book",
    "self-publishing help",
    "how to self publish a book",
    "self publishing services",
    "book publishing",
    "ISBN",
    "KDP",
    "IngramSpark",
    "book distribution",
    "book marketing",
    "author platform",
  ],
  alternates: {
    canonical:
      "https://awakenedperspectivepress.com/publishing/self-publishing",
  },
};

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Prepare the Manuscript",
    text: "Before publishing, make sure the manuscript is ready for readers. Depending on the project, that may include developmental editing, copy editing, proofreading, formatting, and final quality review.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Develop the Book",
    text: "A professionally published book needs more than a manuscript. Cover design, interior formatting, ebook preparation, title information, author information, and other publishing assets all matter.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Choose Your Publishing Setup",
    text: "Self-publishing gives authors control over many decisions, including the publishing platform, editions, pricing, distribution channels, and how the book is presented to readers.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Handle ISBNs & Distribution",
    text: "Different editions and distribution channels may require careful ISBN and metadata planning. Platforms such as KDP and IngramSpark can play different roles in getting a book into the marketplace.",
  },
  {
    number: "05",
    icon: Megaphone,
    title: "Launch the Book",
    text: "Publication is the beginning of the marketing process, not the end. A launch can include positioning, social content, advertising, email, events, media outreach, and other promotional efforts.",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Build the Author Platform",
    text: "A book can become the foundation for something larger. An author website, email audience, social presence, speaking opportunities, and future books can extend the life of the original publication.",
  },
];

const questions = [
  {
    question: "Is self-publishing a legitimate way to publish a book?",
    answer:
      "Yes. Self-publishing gives authors direct control over the publishing process rather than requiring a traditional publishing contract. The important distinction is that self-publishing still requires professional preparation if the goal is to produce a book that can compete for readers' attention.",
  },
  {
    question: "Do I need an ISBN to self-publish?",
    answer:
      "ISBN requirements depend on the edition and publishing arrangement. Authors should understand which ISBNs apply to print and digital editions and who is listed as the publisher before setting up distribution.",
  },
  {
    question: "What is the difference between KDP and IngramSpark?",
    answer:
      "KDP and IngramSpark are publishing and distribution platforms with different strengths and workflows. The right choice depends on the formats you plan to publish, the retailers and markets you want to reach, and how you want your distribution structured.",
  },
  {
    question: "Can I self-publish without doing everything myself?",
    answer:
      "Absolutely. Self-publishing describes the publishing path, not necessarily every task an author must personally perform. Authors can work with editors, designers, publishing specialists, marketers, and other professionals while retaining control over their project.",
  },
  {
    question: "Can AI be used when self-publishing a book?",
    answer:
      "AI can be used as a tool during parts of the creative and publishing process. The important question is how it is used. At Awakened Perspective Press, our philosophy is Human voice. AI assistance. Professional publishing.",
  },
];

const selfPublishingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Self-Publishing a Book: What Authors Need to Know",
      description:
        "A practical guide to self-publishing a book, including manuscript preparation, ISBNs, distribution, marketing, and author platform development.",
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
        "https://awakenedperspectivepress.com/publishing/self-publishing",
      about: [
        "Self-publishing",
        "Book publishing",
        "ISBN",
        "Book distribution",
        "Book marketing",
        "Author platform",
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

export default function SelfPublishingPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#fbfaf7] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(selfPublishingSchema),
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
              Self-publishing
            </p>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Self-Publishing a Book:
              <span className="block italic text-amber-800">
                What Authors Need to Know
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
              Self-publishing gives authors more control over the publishing
              process. But control does not mean you have to figure everything
              out alone.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-stone-900 px-7 py-4 font-bold text-white transition hover:bg-stone-700"
              >
                Talk With APP
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
              A different publishing path
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Self-publishing does not mean doing everything yourself.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-600">
            <p>
              Traditional publishing is not the only way to become a published
              author. Self-publishing allows an author to retain more control
              over the project and make decisions about the book, its timing,
              its presentation, and its marketplace strategy.
            </p>

            <p>
  But there is an important distinction between <strong>self-publishing</strong>{" "}
  and <strong>doing everything yourself</strong>. An author can
  choose the self-publishing path while still working with
  experienced professionals. Our{" "}
  <Link
    href="/publishing/book-publishing-services"
    className="font-semibold text-amber-800 underline decoration-amber-800/30 underline-offset-4 transition hover:text-amber-700"
  >
    book publishing services guide
  </Link>{" "}
  explains the areas where professional support can make the process easier.
</p>

            <p>
              The goal is not simply to make a book available. The goal is to
              create a professionally prepared book and give it the best
              possible opportunity to reach the readers it was written for.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
              The process
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Six pieces of a successful self-publishing journey.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              There is no single formula for every book. But these are the
              major pieces authors should understand before publishing.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-amber-300">
                      {step.number}
                    </span>

                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                  <p className="mt-4 leading-7 text-stone-400">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNICAL SETUP */}
      <section className="bg-[#fbfaf7] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
                The technical side
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Publishing is a business process as well as a creative one.
              </h2>

              <p className="mt-7 text-lg leading-8 text-stone-600">
                Authors often focus understandably on writing the book. But
                once the manuscript is finished, a number of practical
                decisions still need to be made.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="space-y-5">
                {[
                  "ISBN strategy and editions",
                  "Print and ebook formatting",
                  "Book cover and interior design",
                  "Metadata and book descriptions",
                  "Pricing and marketplace setup",
                  "Distribution strategy",
                  "Retailer and platform accounts",
                  "Launch and promotional planning",
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

      {/* KDP / INGRAINSPARK */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            Distribution choices
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            KDP and IngramSpark are tools—not publishing strategies.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-stone-600">
  Platforms such as Amazon KDP and IngramSpark can be important
  pieces of a self-publishing plan. But choosing a platform should
  come after understanding your goals, formats, distribution needs,
  and audience. Our{" "}
  <Link
    href="/publishing/isbn-book-distribution"
    className="font-semibold text-amber-800 underline decoration-amber-800/30 underline-offset-4 transition hover:text-amber-700"
  >
    ISBN and book distribution guide
  </Link>{" "}
  goes deeper into those decisions.
</p>

          <div className="mt-12 grid gap-5 text-left md:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8">
              <h3 className="text-xl font-bold">Amazon KDP</h3>
              <p className="mt-4 leading-7 text-stone-600">
                KDP can provide authors with a direct path to publishing
                books through Amazon and offers print and digital publishing
                workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8">
              <h3 className="text-xl font-bold">IngramSpark</h3>
              <p className="mt-4 leading-7 text-stone-600">
                IngramSpark can be useful for authors who want broader
                distribution options and access to channels beyond a single
                retailer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING */}
      <section className="relative overflow-hidden bg-[#f1ede4] py-24 md:py-32">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-800">
                After publication
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Publishing the book is not the finish line.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                One of the biggest mistakes authors can make is treating
                publication day as the end of the process. A book needs a
                reason for readers to discover it.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                That can mean social media, advertising, email, speaking,
                events, media outreach, partnerships, content, or a long-term
                author platform.
              </p>
            </div>

            <div className="rounded-[2rem] bg-stone-950 p-8 text-white shadow-xl sm:p-10">
              <p className="font-serif text-2xl font-bold">
                A book can become a platform.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Build credibility around your expertise.",
                  "Create opportunities for speaking and events.",
                  "Develop an audience for future books.",
                  "Turn your ideas into content beyond the book.",
                  "Create a foundation for a long-term author brand.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-300 text-stone-950">
                      <Check className="h-4 w-4" />
                    </div>

                    <p className="text-stone-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-amber-300" />

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
            The modern author
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            AI is changing how books are created.
            <span className="block italic text-amber-200">
              That does not mean the author disappears.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-stone-300">
            AI can help authors brainstorm, organize ideas, research, refine
            drafts, and work through parts of the publishing process. Used
            thoughtfully, it can be a tool that makes publishing more
            accessible.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
            Human voice. AI assistance. Professional publishing.
          </p>

          <div className="mt-10">
            <Link
              href="/#ai"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              Explore the APP AI Philosophy
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              Frequently asked questions
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Questions authors ask about self-publishing.
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {questions.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-7 sm:p-8"
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
            Your book. Your path.
          </p>

          <h2 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl">
            You do not have to
            <span className="block italic text-amber-200">
              figure it all out alone.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Whether you are beginning with an idea, finishing a manuscript, or
            already have a published book, Awakened Perspective Press can help
            you understand what comes next.
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