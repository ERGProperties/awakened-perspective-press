import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  BookOpen,
  Check,
  Globe2,
  Megaphone,
  PenLine,
  Sparkles,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Publish a Book: Author Guide",
  description:
    "Learn how to publish a book from manuscript to marketplace. Explore traditional publishing, self-publishing, ISBNs, KDP, IngramSpark, book marketing, distribution, and author platform strategies.",
  keywords: [
    "how to publish a book",
    "how to get a book published",
    "book publishing guide",
    "self publishing a book",
    "traditional publishing",
    "KDP",
    "IngramSpark",
    "ISBN",
    "book distribution",
    "book marketing",
    "author services",
  ],
  alternates: {
    canonical:
      "https://awakenedperspectivepress.com/publishing/how-to-publish-a-book",
  },
};

const steps = [
  {
    number: "01",
    title: "Start With Your Manuscript",
    icon: PenLine,
    text: "Before choosing a publishing path, make sure the manuscript itself is ready. Depending on the project, that may involve developmental editing, structural refinement, proofreading, fact checking, and preparing the final manuscript for publication.",
  },
  {
    number: "02",
    title: "Choose Your Publishing Path",
    icon: BookOpen,
    text: "Authors generally have several options, including pursuing a traditional publishing deal, working with an independent publishing company, or self-publishing. The right choice depends on your goals, timeline, budget, desired control, and willingness to handle the publishing process.",
  },
  {
    number: "03",
    title: "Prepare the Book Professionally",
    icon: Sparkles,
    text: "A finished manuscript is only one part of a finished book. Cover design, interior formatting, ebook preparation, proofreading, metadata, and the overall reader experience all matter.",
  },
  {
    number: "04",
    title: "Handle ISBNs & Publishing Setup",
    icon: Globe2,
    text: "Your publishing setup may include ISBNs, book editions, metadata, pricing, territories, distribution settings, and the accounts or platforms needed to bring your book to market.",
  },
  {
    number: "05",
    title: "Choose Distribution Channels",
    icon: Store,
    text: "Depending on your goals, your book may be distributed through online retailers, ebook platforms, print-on-demand services, bookstores, libraries, direct sales, or other channels.",
  },
  {
    number: "06",
    title: "Plan Your Marketing",
    icon: Megaphone,
    text: "Publishing the book is not the same as marketing the book. A strong launch can include positioning, author branding, social media, advertising, email, promotional assets, events, partnerships, and ongoing audience development.",
  },
];

const questions = [
  {
    question: "Should I find a literary agent?",
    answer:
      "A literary agent can be an excellent path for authors pursuing traditional publishing, but it is not the only way to become a published author. Authors should understand the tradeoffs of each publishing path before deciding.",
  },
  {
    question: "Is self-publishing a real publishing option?",
    answer:
      "Yes. Self-publishing gives authors substantial control over the publishing process, but that control also means the author must make decisions about editing, design, production, distribution, marketing, and other aspects of publishing.",
  },
  {
    question: "Do I need an ISBN?",
    answer:
      "ISBN requirements and best practices can vary by format, market, and publishing platform. Authors should understand how ISBNs relate to different editions and distribution channels before setting up their books.",
  },
  {
    question: "What are KDP and IngramSpark?",
    answer:
      "KDP and IngramSpark are two important publishing and distribution platforms used by independent authors and publishers. They serve different purposes and can be evaluated based on the author&apos;s distribution and publishing goals.",
  },
];

export default function HowToPublishABookPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://awakenedperspectivepress.com/publishing/how-to-publish-a-book/#article",
        headline: "How to Publish a Book: A Modern Author's Guide",
        description:
          "A modern guide explaining the major steps involved in publishing a book, from manuscript preparation and choosing a publishing path to ISBNs, distribution, marketing, and launching.",
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
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://awakenedperspectivepress.com/publishing/how-to-publish-a-book",
        },
        about: [
          "Book Publishing",
          "Self-Publishing",
          "Author Services",
          "Book Marketing",
          "Book Distribution",
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Publish a Book",
        description:
          "The major steps an author can consider when taking a book from manuscript to marketplace.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Start With Your Manuscript",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Choose Your Publishing Path",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Prepare the Book Professionally",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Handle ISBNs and Publishing Setup",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Choose Distribution Channels",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Plan Your Marketing",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-900">
  <Script
    id="publishing-guide-structured-data"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData),
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
      Explore Publishing Options
    </Link>
  </div>
</header>

      {/* HERO */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            Publishing Guide
          </p>

          <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-stone-950 sm:text-6xl md:text-7xl">
            How to Publish a Book
          </h1>

          <p className="mx-auto mt-7 max-w-3xl font-serif text-2xl italic leading-relaxed text-stone-700">
            A modern author&apos;s guide from manuscript to marketplace.
          </p>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-stone-600">
            Finishing your manuscript is an exciting milestone—but it is only
            the beginning of the publishing journey. This guide explains the
            major decisions authors face and the steps involved in turning a
            manuscript into a professionally published book.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f1ede4] py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-800">
            First, understand your options
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            There is more than one way to become a published author.
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-stone-700">
            <p>
              For years, many aspiring authors were taught that the primary
              path to publication was finding a literary agent and securing a
              traditional publishing deal.
            </p>

            <p>
              Traditional publishing remains an important option. But today,
              authors can also consider independent publishing, self-publishing,
              print-on-demand distribution, and publishing partnerships.
            </p>

            <p>
              The goal is not to choose the path that sounds most impressive.
              The goal is to choose the path that best fits <strong>your book,
              your goals, your resources, and the level of control you want
              over the process.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              The publishing journey
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Six steps from manuscript to marketplace.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Every book is different, but most publishing journeys involve
              these core decisions and stages.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-amber-700">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-amber-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                  <p className="mt-4 leading-7 text-stone-600">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PUBLISHING PATHS */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
              Choose intentionally
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Traditional publishing and self-publishing are not the same
              journey.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-300">
  Before committing to a publishing path, understand what each
  option requires from you and what you receive in return. If you are
  considering self-publishing, our{" "}
  <Link
    href="/publishing/self-publishing"
    className="font-semibold text-amber-300 underline decoration-amber-300/40 underline-offset-4 transition hover:text-amber-200"
  >
    self-publishing guide
  </Link>{" "}
  explores the process in greater detail.
</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
              <h3 className="font-serif text-2xl font-bold">
                Traditional Publishing
              </h3>

              <ul className="mt-7 space-y-4">
                {[
                  "Typically involves submitting to agents or publishers",
                  "Usually requires an acquisition decision",
                  "Can provide professional publishing infrastructure",
                  "Often involves less author control over some decisions",
                  "May involve a longer timeline",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-stone-300">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.07] p-8">
              <h3 className="font-serif text-2xl font-bold">
                Self-Publishing
              </h3>

              <ul className="mt-7 space-y-4">
                {[
                  "Authors retain significant control",
                  "Can provide a faster route to market",
                  "Authors make or outsource publishing decisions",
                  "Requires attention to production and distribution",
                  "Marketing and audience development remain important",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-stone-300">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="font-serif text-2xl italic text-stone-200">
              The right publishing path is not necessarily the path someone
              else tells you to take. It is the path that makes sense for the
              book you are trying to bring into the world.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNICAL PUBLISHING */}
      <section className="bg-[#fbfaf7] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            The details matter
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Publishing involves more than uploading a manuscript.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-stone-600">
            <p>
  Authors often discover that publishing involves a surprising
  number of decisions. Cover design, interior formatting, ebook
  preparation, ISBNs, metadata, pricing, distribution, retailer
  setup, and marketing all influence how a book reaches readers. Our{" "}
  <Link
    href="/publishing/book-publishing-services"
    className="font-semibold text-amber-800 underline decoration-amber-800/30 underline-offset-4 transition hover:text-amber-700"
  >
    book publishing services guide
  </Link>{" "}
  explains the different areas where authors may want professional support.
</p>

            <p>
  Platforms such as Amazon Kindle Direct Publishing (KDP) and
  IngramSpark can play important roles in an independent
  publishing strategy. Which platforms make sense depends on the
  author&apos;s goals and desired distribution. For a deeper look at
  ISBNs, editions, KDP, IngramSpark, and distribution strategy, see our{" "}
  <Link
    href="/publishing/isbn-book-distribution"
    className="font-semibold text-amber-800 underline decoration-amber-800/30 underline-offset-4 transition hover:text-amber-700"
  >
    ISBN and book distribution guide
  </Link>
  .
</p>

            <p>
              The important thing is not simply getting a book online. It is
              creating a professional product and a publishing strategy that
              supports the author&apos;s larger goals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              "ISBN strategy",
              "Print and ebook editions",
              "Cover design",
              "Interior formatting",
              "Metadata",
              "Pricing",
              "Distribution",
              "Retailer setup",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-5"
              >
                <Check className="h-5 w-5 shrink-0 text-amber-700" />
                <span className="font-semibold text-stone-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETING */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-amber-300">
              <Megaphone className="h-7 w-7" />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              After publication
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Publishing the book is not the finish line.
            </h2>

            <p className="mt-7 text-lg leading-8 text-stone-600">
              A book needs readers. That means thinking about positioning,
              audience, author platform, launch strategy, promotional content,
              advertising, partnerships, events, and the long-term life of the
              book.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-[#f1ede4] p-8 sm:p-10">
            <h3 className="font-serif text-2xl font-bold">
              A book marketing strategy may include:
            </h3>

            <div className="mt-8 space-y-4">
              {[
                "Author positioning",
                "Book positioning",
                "Launch planning",
                "Social media content",
                "Paid advertising",
                "Email marketing",
                "Book signings and events",
                "Ongoing audience growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                    <Check className="h-4 w-4" />
                  </div>

                  <span className="text-stone-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="bg-[#f1ede4] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-amber-300">
            <Sparkles className="h-7 w-7" />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-amber-800">
            AI & modern authors
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            AI is changing how books are created—and how authors publish them.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-stone-700">
            <p>
              Authors today may use artificial intelligence to brainstorm,
              organize ideas, research, edit, refine language, or accelerate
              parts of the creative process.
            </p>

            <p>
              That does not automatically eliminate the human element of a
              book. The author&apos;s perspective, experiences, judgment,
              creativity, and voice remain central to what makes a book worth
              reading.
            </p>

            <p className="font-semibold text-stone-900">
              The question is not simply whether AI was involved. The more
              important question is how the technology was used—and whether the
              finished work genuinely represents the author.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/#ai"
              className="group inline-flex items-center rounded-full bg-stone-900 px-7 py-4 font-bold text-white transition hover:bg-stone-700"
            >
              Learn About APP&apos;s AI Philosophy
              <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              Common questions
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
              Questions authors often ask.
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {questions.map((item) => (
              <article
                key={item.question}
                className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-7 sm:p-8"
              >
                <h3 className="text-xl font-bold text-stone-900">
                  {item.question}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APP CTA */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
            Your publishing path
          </p>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            You don&apos;t have to figure it all out alone.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Awakened Perspective Press is being built to help authors navigate
            the journey from idea or manuscript to published book and beyond.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/publishing-packages"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 font-black text-stone-950 transition hover:bg-amber-200"
            >
              Explore Publishing Options
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 pb-10 text-center text-sm text-stone-500">
        <p>© {new Date().getFullYear()} Awakened Perspective Press.</p>
        <p className="mt-2">Your Story. Your Voice. Your Book.</p>
      </footer>
    </main>
  );
}