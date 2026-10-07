import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  Globe2,
  Megaphone,
  PenLine,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book Publishing Services for Authors",
  description:
    "Explore book publishing services for authors, from manuscript development and editing to cover design, ISBNs, distribution, book marketing, and author platform development.",
  keywords: [
    "book publishing services",
    "publishing services for authors",
    "book publishing company",
    "author services",
    "self publishing services",
    "manuscript editing",
    "book cover design",
    "ISBN services",
    "book distribution",
    "book marketing",
    "author platform",
  ],
  alternates: {
    canonical:
      "https://awakenedperspectivepress.com/publishing/book-publishing-services",
  },
};

const services = [
  {
    icon: PenLine,
    number: "01",
    title: "Manuscript Development",
    text: "A strong book starts with a strong manuscript. Depending on the project, publishing support may include developmental guidance, structure, editing, refinement, proofreading, and preparing the manuscript for publication.",
  },
  {
    icon: WandSparkles,
    number: "02",
    title: "Book Cover & Interior Design",
    text: "Readers see the cover before they read the first page. Professional cover concepts, interior formatting, print preparation, and ebook formatting help create a finished book that looks intentional and credible.",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "ISBN & Publishing Setup",
    text: "Publishing involves more than uploading a manuscript. ISBNs, editions, metadata, pricing, publishing accounts, and platform setup all need to work together.",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Distribution",
    text: "Authors may want their books available through Amazon, bookstores, libraries, online retailers, or other channels. Distribution decisions should reflect the author's goals rather than follow a one-size-fits-all formula.",
  },
  {
    icon: Megaphone,
    number: "05",
    title: "Book Marketing & Launch",
    text: "A published book still needs to be discovered. Positioning, launch campaigns, social content, advertising, email, promotional assets, events, and outreach can all become part of an author's marketing strategy.",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Author Platform",
    text: "A book can become the beginning of an author's larger platform. Websites, landing pages, social presence, media kits, speaking opportunities, and audience-building can extend beyond publication day.",
  },
];

const questions = [
  {
    question: "What are book publishing services?",
    answer:
      "Book publishing services are professional services that help an author move from manuscript to finished, market-ready book. Depending on the provider and project, services can include editing, design, formatting, ISBN and publishing setup, distribution, marketing, and author platform development.",
  },
  {
    question: "Do I need a publishing company to self-publish?",
    answer:
      "An author can self-publish without hiring a publishing company. However, self-publishing does not require doing every task personally. Authors can retain control of the publishing process while hiring professionals for the areas where they need expertise.",
  },
  {
    question: "What should a publishing service include?",
    answer:
      "There is no universal package that fits every author. The right combination depends on the manuscript, goals, budget, audience, formats, distribution plans, and marketing needs. A good publishing service should make those choices clear rather than forcing every author into the same process.",
  },
  {
    question: "Can a publishing company help with marketing?",
    answer:
      "Yes. Publishing and marketing are closely connected, and many authors need help creating a launch strategy, promotional assets, social content, advertising campaigns, email campaigns, events, or an ongoing author platform.",
  },
  {
    question: "Can authors who used AI work with a publishing service?",
    answer:
      "Yes. AI can be part of a modern author's workflow. The important consideration is the quality, originality, accuracy, and human direction behind the finished work. At Awakened Perspective Press, the philosophy is Human voice. AI assistance. Professional publishing.",
  },
];

const publishingServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Book Publishing Services: What Authors Actually Need",
      description:
        "A practical guide to book publishing services, including manuscript development, design, ISBNs, distribution, marketing, and author platform development.",
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
        "https://awakenedperspectivepress.com/publishing/book-publishing-services",
      about: [
        "Book publishing services",
        "Author services",
        "Self-publishing",
        "Book marketing",
        "Book distribution",
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

export default function BookPublishingServicesPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#fbfaf7] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(publishingServicesSchema),
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
              Book publishing services
            </p>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Book Publishing Services:
              <span className="block italic text-amber-800">
                What Authors Actually Need
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
              Publishing a book involves much more than putting words on a
              page. The right publishing support helps connect the creative,
              technical, and business sides of becoming a published author.
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
              The bigger picture
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              A book is a creative project, but publishing is a process.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-600">
            <p>
              Authors often begin with one simple goal: finish the book. Once
              the manuscript is ready, however, a series of new decisions
              appears.
            </p>

            <p>
              How should the book be edited? What should the cover look like?
              Which editions should be created? Who handles the ISBN? Where
              should the book be distributed? How will readers discover it?
            </p>

            <p>
  Professional publishing services exist to help answer those
  questions and turn a manuscript into a finished book with a
  strategy behind it. That can include everything from manuscript
  development and design to{" "}
  <Link
    href="/publishing/isbn-book-distribution"
    className="font-semibold text-amber-800 underline decoration-amber-800/30 underline-offset-4 transition hover:text-amber-700"
  >
    ISBN and book distribution
  </Link>
  .
</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-stone-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
              What publishing services can include
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              The pieces that take a manuscript to market.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              Not every author needs every service. The goal should be to
              identify what the individual book actually needs.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-amber-300">
                      {service.number}
                    </span>

                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-stone-400">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="bg-[#fbfaf7] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
                Choosing the right help
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                You may not need every publishing service.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                A finished manuscript may need design and distribution. An
                early manuscript may need significant editorial development.
                An already published book may need marketing or a stronger
                author platform.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                The best publishing relationship starts by understanding
                where you are now and what you want the book to accomplish.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
              <p className="font-serif text-2xl font-bold">
                Ask these questions first:
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "What stage is my book currently in?",
                  "Who is the book for?",
                  "What do I want the book to accomplish?",
                  "Which parts can I handle confidently?",
                  "Where do I need professional expertise?",
                  "What should happen after publication?",
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

      {/* SELF PUBLISHING */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            Self-publishing support
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Self-publishing does not mean doing everything yourself.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-stone-600">
            Authors can retain control over their publishing path while
            bringing in specialists for the areas where they need help.
            Editing, design, publishing setup, distribution, marketing, and
            author platform development can all be handled as individual
            pieces of a larger strategy.
          </p>

          <div className="mt-10">
            <Link
              href="/publishing/self-publishing"
              className="group inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-4 font-bold text-white transition hover:bg-stone-700"
            >
              Learn About Self-Publishing
              <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="relative overflow-hidden bg-[#f1ede4] py-24 md:py-32">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-amber-300">
                <Sparkles className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-amber-800">
                Modern publishing
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                AI is becoming part of the publishing conversation.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                Authors may use AI to brainstorm, organize, research, refine,
                edit, or work through parts of the creative process. That does
                not eliminate the need for human judgment or a distinct author
                voice.
              </p>

              <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-stone-800">
                Human voice. AI assistance. Professional publishing.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-300 bg-white p-8 shadow-xl sm:p-10">
              <p className="font-serif text-2xl font-bold">
                The technology should serve the author.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "The author's perspective remains central.",
                  "AI can assist without replacing judgment.",
                  "Professional editing still matters.",
                  "Accuracy and originality still matter.",
                  "The finished book should sound like the author.",
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

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              Frequently asked questions
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Questions authors ask about publishing services.
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
            Your publishing path
          </p>

          <h2 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl">
            Your book does not need
            <span className="block italic text-amber-200">
              to look like everyone else&apos;s.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Tell us where you are in the process, what you want to accomplish,
            and where you need help. We can start from there.
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