"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  Crown,
  Megaphone,
  PenLine,
  Sparkles,
} from "lucide-react";

const paths = [
  {
    name: "PUBLISH",
    eyebrow: "For authors ready to become published",
    description:
      "You have a manuscript—or you&apos;re close—and you want professional guidance turning your work into a finished, published book.",
    icon: BookOpen,
    features: [
      "Publishing guidance and strategy",
      "ISBN and publishing setup",
      "Professional book formatting",
      "Cover design and presentation",
      "KDP and distribution guidance",
      "A clear path from manuscript to marketplace",
    ],
  },
  {
    name: "LAUNCH",
    eyebrow: "For authors ready to be seen",
    description:
      "You don&apos;t just want a published book. You want to give your book a meaningful launch and begin building an audience around your work.",
    icon: Megaphone,
    featured: true,
    features: [
      "Everything involved in the publishing path",
      "Launch strategy and positioning",
      "Promotional content and assets",
      "Social media strategy",
      "Author positioning",
      "Launch and promotional guidance",
    ],
  },
  {
    name: "PARTNER",
    eyebrow: "For authors building something bigger",
    description:
      "Your book is part of something larger. You want an ongoing publishing and growth partner who can help develop the author and the platform behind the book.",
    icon: Crown,
    features: [
      "Publishing and launch support",
      "Author platform development",
      "Marketing strategy",
      "Website and digital presence",
      "Media and podcast outreach",
      "Long-term growth and promotional support",
    ],
  },
];

export default function PublishingPackagesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-900">
      {/* APP HEADER */}
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

          <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-600 md:flex">
            <Link href="/" className="transition hover:text-stone-950">
              Home
            </Link>

            <Link
              href="/publishing-packages"
              className="text-stone-950"
            >
              Publishing
            </Link>

            <Link href="/contact" className="transition hover:text-stone-950">
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
          >
            Talk With Us
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(180,145,90,.16),transparent_30%)]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full border border-stone-300/50" />
        <div className="absolute -right-24 top-36 h-64 w-64 rounded-full border border-stone-300/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            Your Publishing Path
          </p>

          <h1 className="mx-auto mt-7 max-w-4xl font-serif text-5xl font-bold leading-[1.02] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            Your book deserves
            <span className="block italic text-amber-800">
              a path forward.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
            Every author starts from a different place. Whether you have an
            idea, a finished manuscript, or a vision that goes beyond the book
            itself, Awakened Perspective Press can help you determine the path
            that makes sense for your story.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-stone-500">
            <span>Human voice</span>
            <span>•</span>
            <span>AI assistance</span>
            <span>•</span>
            <span>Professional publishing</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-amber-300">
            <Sparkles className="h-7 w-7" />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            More than a publishing package
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            The right path depends on your book—and where you are in the
            journey.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-stone-600">
            We don&apos;t believe every author should be placed into the same
            publishing box. Your manuscript, goals, audience, and vision all
            matter. That&apos;s why we start by understanding your project before
            recommending the best way forward.
          </p>
        </div>
      </section>

      {/* THREE PATHS */}
      <section className="bg-stone-100 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {paths.map((path) => {
              const Icon = path.icon;

              return (
                <div
                  key={path.name}
                  className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-sm ${
                    path.featured
                      ? "border-amber-600 shadow-xl lg:-mt-4"
                      : "border-stone-200"
                  }`}
                >
                  {path.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-700 px-5 py-2 text-xs font-bold tracking-[0.18em] text-white">
                      A POPULAR PATH
                    </div>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="mt-7 text-xs font-bold tracking-[0.2em] text-amber-700">
                    {path.eyebrow.toUpperCase()}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl font-bold text-stone-950">
                    {path.name}
                  </h3>

                  <p className="mt-5 leading-7 text-stone-600">
                    {path.description}
                  </p>

                  <div className="my-7 border-t border-stone-200" />

                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-stone-900">
                    Your path may include
                  </p>

                  <ul className="mt-5 space-y-3">
                    {path.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-stone-600"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-amber-700" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY A CONVERSATION */}
      <section className="bg-[#f1ede4] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-800">
            Every author is different
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s determine what your book actually needs.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-stone-600">
            You may already have a completed manuscript. You may have an idea
            you&apos;ve carried for years. You may want your book to establish
            credibility, grow your business, share your knowledge, or simply
            tell a story that deserves to be heard.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            Rather than forcing your project into a predetermined package,
            we&apos;ll learn where you are, understand what you&apos;re trying to
            accomplish, and discuss the best path forward.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-4 font-bold text-white transition hover:bg-stone-700"
          >
            Let&apos;s Talk About Your Book
            <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              What happens next
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
              A conversation before a commitment.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              We believe you should understand what you&apos;re getting into before
              you make a decision about your book.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {[
              [
                "01",
                "TELL US",
                "Tell us about your book, where you are in the process, and what you hope to accomplish.",
              ],
              [
                "02",
                "CONNECT",
                "We&apos;ll review your information and connect with you to learn more about your project.",
              ],
              [
                "03",
                "PLAN",
                "Together, we&apos;ll determine the publishing path and level of support that makes sense.",
              ],
              [
                "04",
                "CREATE",
                "Once we&apos;re aligned, we&apos;ll put the plan into action and help bring your book to the world.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8"
              >
                <span className="font-serif text-4xl font-bold text-amber-700">
                  {number}
                </span>

                <h3 className="mt-6 text-lg font-black tracking-[0.18em]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-stone-950 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,175,96,.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
            Your story starts here
          </p>

          <h2 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl">
            Ready to explore
            <span className="block italic text-amber-200">
              your publishing path?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Tell us about your book. We&apos;ll learn where you are, where you want
            to go, and help you determine the best path forward.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 font-black text-stone-950 transition hover:bg-amber-200"
          >
            Let&apos;s Talk About Your Book
            <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 px-6 pb-8 text-center text-sm text-stone-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p>© {new Date().getFullYear()} Awakened Perspective Press.</p>

          <p>Your Story. Your Voice. Your Book.</p>
        </div>
      </footer>
    </main>
  );
}