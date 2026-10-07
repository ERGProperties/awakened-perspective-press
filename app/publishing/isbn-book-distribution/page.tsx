import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  Globe2,
  Layers,
  Library,
  Megaphone,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ISBNs & Book Distribution: A Guide for Authors",
  description:
    "Learn how ISBNs work, how book editions are identified, and how authors can approach distribution through KDP, IngramSpark, bookstores, libraries, and online retailers.",
  keywords: [
    "ISBN",
    "ISBN for books",
    "how to get an ISBN",
    "book distribution",
    "book distribution for authors",
    "KDP",
    "IngramSpark",
    "book editions",
    "self publishing ISBN",
    "book publishing",
    "author publishing services",
  ],
  alternates: {
    canonical:
      "https://awakenedperspectivepress.com/publishing/isbn-book-distribution",
  },
};

const topics = [
  {
    number: "01",
    icon: BookOpen,
    title: "What an ISBN Does",
    text: "An ISBN is a unique identifier used to identify a specific edition and format of a book. Understanding how ISBNs relate to editions is an important part of setting up a publishing project.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Think in Editions",
    text: "A hardcover, paperback, ebook, and other distinct formats may be treated as separate editions or products. Publishing plans should account for the formats an author actually intends to produce.",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Choose Distribution Channels",
    text: "Authors can consider Amazon, bookstores, libraries, online retailers, direct sales, and other channels. The right mix depends on the audience and goals for the book.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Understand KDP",
    text: "Amazon Kindle Direct Publishing can provide authors with a direct publishing route for eligible print and digital formats and access to Amazon's marketplace.",
  },
  {
    number: "05",
    icon: Library,
    title: "Understand IngramSpark",
    text: "IngramSpark can provide access to broader distribution infrastructure and may be relevant for authors interested in bookstore, library, and other distribution opportunities.",
  },
  {
    number: "06",
    icon: Megaphone,
    title: "Connect Distribution to Marketing",
    text: "Distribution makes a book available. Marketing gives readers a reason to find it. A strong publishing plan considers both rather than treating them as unrelated activities.",
  },
];

const questions = [
  {
    question: "What is an ISBN?",
    answer:
      "An ISBN, or International Standard Book Number, is a unique identifier assigned to a specific book edition and format. It helps identify and distinguish books within the publishing and bookselling ecosystem.",
  },
  {
    question: "Does every format of a book need its own ISBN?",
    answer:
      "ISBN requirements depend on the format and publishing arrangement. Different editions and formats are generally treated separately, so authors should plan their ISBN strategy around the versions they intend to publish.",
  },
  {
    question: "Can I publish a book without an ISBN?",
    answer:
      "Some publishing platforms offer options that do not require an author to purchase and assign their own ISBN in every circumstance. However, authors should understand the implications for publisher identification, editions, and distribution before making that choice.",
  },
  {
    question: "What is the difference between KDP and IngramSpark?",
    answer:
      "KDP and IngramSpark serve different roles within the publishing ecosystem. KDP provides a direct route into Amazon's marketplace, while IngramSpark can be useful for broader distribution opportunities. The best approach depends on the author's goals and publishing strategy.",
  },
  {
    question: "Do I need an ISBN for every book I write?",
    answer:
      "ISBN planning is generally handled by edition and format rather than simply by title. An author publishing multiple formats may need multiple ISBNs depending on the publishing setup.",
  },
  {
    question: "Can a publishing company help with ISBNs and distribution?",
    answer:
      "Yes. Publishing professionals can help authors understand ISBN planning, editions, metadata, publishing platforms, distribution options, and the setup required to bring a book to market.",
  },
];

const isbnSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "ISBNs & Book Distribution: A Guide for Authors",
      description:
        "A practical guide to ISBNs, book editions, KDP, IngramSpark, distribution channels, and connecting distribution with book marketing.",
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
        "https://awakenedperspectivepress.com/publishing/isbn-book-distribution",
      about: [
        "ISBN",
        "Book distribution",
        "Book publishing",
        "KDP",
        "IngramSpark",
        "Self-publishing",
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

export default function IsbnBookDistributionPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#fbfaf7] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(isbnSchema),
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
              ISBNs &amp; book distribution
            </p>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              ISBNs &amp; Book Distribution:
              <span className="block italic text-amber-800">
                A Guide for Authors
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
              ISBNs, editions, publishing platforms, and distribution can feel
              complicated. Understanding how the pieces fit together makes the
              publishing process much easier to navigate.
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
              Start with the basics
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              An ISBN is only one piece of the publishing puzzle.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-600">
            <p>
              Authors often hear about ISBNs as soon as they begin researching
              self-publishing. It is an important topic, but an ISBN by itself
              does not publish, distribute, or market a book.
            </p>

            <p>
              Think of the ISBN as part of the identification and
              infrastructure behind a book edition. The larger publishing
              strategy includes the formats you create, the platforms you use,
              the markets you want to reach, and how readers will discover the
              book.
            </p>

            <p>
              Understanding those relationships before publishing can prevent
              expensive or confusing decisions later.
            </p>
          </div>
        </div>
      </section>

      {/* SIX TOPICS */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
              What authors should understand
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Six pieces of ISBN and distribution planning.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              The right setup depends on the book, the formats, the author's
              goals, and the readers the book is intended to reach.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <div
                  key={topic.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-amber-300">
                      {topic.number}
                    </span>

                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{topic.title}</h3>

                  <p className="mt-4 leading-7 text-stone-400">
                    {topic.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ISBN DETAILS */}
      <section className="bg-[#fbfaf7] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
                ISBN planning
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Plan ISBNs around the book you actually intend to publish.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                One of the most useful ways to think about ISBNs is in terms
                of editions and formats. If you plan to publish a paperback,
                hardcover, and ebook, your publishing plan should account for
                those different products.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                The exact requirements can vary depending on the platform,
                market, and publishing arrangement, so authors should verify
                the current requirements before purchasing or assigning
                identifiers.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
              <p className="font-serif text-2xl font-bold">
                Think about these variables:
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Paperback edition",
                  "Hardcover edition",
                  "Ebook edition",
                  "Different language editions",
                  "Different publishing arrangements",
                  "Retailer and distribution requirements",
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

      {/* KDP / INGRAM */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            Distribution platforms
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            KDP and IngramSpark can serve different purposes.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-stone-600">
            Choosing a publishing platform should begin with your goals, not
            simply with whichever platform you heard about first. Amazon KDP
            and IngramSpark can each play useful roles in a broader publishing
            strategy.
          </p>

          <div className="mt-12 grid gap-5 text-left md:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8">
              <h3 className="text-xl font-bold">Amazon KDP</h3>

              <p className="mt-4 leading-7 text-stone-600">
                Kindle Direct Publishing provides authors with a direct route
                to publishing eligible print and digital books through
                Amazon.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                It can be especially relevant when Amazon is a major part of
                the author's sales strategy.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8">
              <h3 className="text-xl font-bold">IngramSpark</h3>

              <p className="mt-4 leading-7 text-stone-600">
                IngramSpark provides publishing and distribution infrastructure
                that can be useful for authors seeking broader distribution
                opportunities.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                It may be relevant when bookstores, libraries, and other
                distribution channels are important to the publishing plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISTRIBUTION STRATEGY */}
      <section className="relative overflow-hidden bg-[#f1ede4] py-24 md:py-32">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-800">
                Distribution strategy
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Being available is not the same as being discovered.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                Distribution determines where a book can be purchased or
                accessed. Marketing determines how potential readers learn
                that the book exists.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                The strongest publishing strategies connect those two pieces
                from the beginning.
              </p>
            </div>

            <div className="rounded-[2rem] bg-stone-950 p-8 text-white shadow-xl sm:p-10">
              <p className="font-serif text-2xl font-bold">
                Think beyond the upload button.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Where are your readers already shopping?",
                  "Do bookstores matter to your goals?",
                  "Could libraries be part of your audience?",
                  "Will you sell directly to readers?",
                  "How will readers discover the book?",
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

      {/* RELATED GUIDES */}
<section className="bg-white py-24 md:py-32">
  <div className="mx-auto max-w-5xl px-6">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
        Continue learning
      </p>

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
        Build the rest of your publishing plan.
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
          Explore the professional services that can help take a manuscript
          to a finished book.
        </p>

        <span className="mt-6 inline-flex items-center font-bold text-stone-900">
          Explore services
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
              Questions authors ask about ISBNs and distribution.
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
            Get the infrastructure right.
            <span className="block italic text-amber-200">
              Then focus on reaching readers.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            If you are unsure how ISBNs, editions, platforms, or distribution
            fit together, we can help you understand the options and determine
            what makes sense for your book.
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