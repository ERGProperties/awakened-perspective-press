"use client";

import {
  ArrowRight,
  BookOpen,
  Check,
  Globe2,
  Megaphone,
  PenLine,
  Sparkles,
  Store,
  WandSparkles,
} from "lucide-react";

export default function AwakenedPerspectivePressPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#fbfaf7] text-stone-900">
      {/* APP HEADER */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fbfaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="group flex items-center">
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
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-600 md:flex">
            <a
              href="#why-app"
              className="transition hover:text-stone-950"
            >
              Why APP
            </a>
            <a
              href="#services"
              className="transition hover:text-stone-950"
            >
              What We Do
            </a>
            <a
              href="#ai"
              className="transition hover:text-stone-950"
            >
              AI & Authors
            </a>
            <a
              href="#process"
              className="transition hover:text-stone-950"
            >
              How It Works
            </a>
          </nav>

          <a
  href="/publishing-packages"
  className="rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
>
  Find Your Publishing Path
</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative border-b border-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(180,145,90,.16),transparent_30%)]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full border border-stone-300/50" />
        <div className="absolute -right-24 top-36 h-64 w-64 rounded-full border border-stone-300/40" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-36">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              A different kind of publishing company
            </p>

            <h1 className="mt-7 max-w-4xl font-serif text-5xl font-bold leading-[1.02] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Your story deserves
              <span className="block italic text-amber-800">
                to be heard.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              You shouldn&apos;t have to spend years waiting for someone to
              decide whether your voice is worth publishing. Awakened
              Perspective Press helps authors turn ideas, manuscripts, and life
              experiences into professionally published books—and then helps
              bring those books to the world.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
  href="/publishing-packages"
  className="group inline-flex items-center justify-center rounded-full bg-stone-900 px-7 py-4 font-bold text-white transition hover:bg-stone-700"
>
  Find Your Publishing Path
  <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
</a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-4 font-bold text-stone-800 transition hover:border-stone-500"
              >
                How We Can Help
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-stone-500">
              <span>Human voice</span>
              <span>•</span>
              <span>AI assistance</span>
              <span>•</span>
              <span>Professional publishing</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-amber-100/60 blur-2xl" />

            <div className="relative rotate-[-4deg] rounded-[1.75rem] bg-stone-950 p-5 shadow-2xl">
              <div className="flex aspect-[3/4] flex-col justify-between rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 p-8 text-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
                    Awakened Perspective Press
                  </p>

                  <div className="mt-20 h-px w-20 bg-amber-300/70" />

                  <p className="mt-8 font-serif text-4xl leading-tight">
                    Every perspective
                    <span className="block italic text-amber-200">
                      has a story.
                    </span>
                  </p>

                  <div className="mt-10 flex justify-center">
                    <img
                      src="/app-logo-hero.png"
                      alt="Awakened Perspective Press logo"
                      className="h-auto w-28 opacity-95 sm:w-32"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-serif text-lg text-stone-300">
                    Publish the voice behind the idea.
                  </p>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500">
                    APP • 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY APP */}
      <section id="why-app" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
                Why APP
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Between traditional publishing and doing it all yourself,
                there should be another choice.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "No waiting for permission",
                  text: "A literary agent isn’t the only path to becoming a published author. We help you move your project forward.",
                },
                {
                  title: "More than an ISBN",
                  text: "Publishing isn’t finished when a book is printed. We can help with the cover, interior, distribution, launch, and marketing.",
                },
                {
                  title: "Your voice stays yours",
                  text: "Your experiences, ideas, perspective, and final creative decisions remain at the center of the process.",
                },
                {
                  title: "Built for the modern author",
                  text: "We combine publishing, marketing, technology, and AI-assisted workflows to make the process more accessible.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-stone-200 bg-[#fbfaf7] p-7"
                >
                  <Check className="h-6 w-6 text-amber-700" />

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-stone-950 py-24 text-white md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
              Full-service publishing
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              From manuscript to marketplace—and beyond.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              We are building APP to handle the pieces authors shouldn&apos;t
              have to figure out alone.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: PenLine,
                title: "Manuscript Development",
                text: "Editorial guidance, structure, refinement, proofreading, and preparing your manuscript for publication.",
              },
              {
                icon: WandSparkles,
                title: "Book Cover & Design",
                text: "Professional cover concepts, interior formatting, ebook preparation, and a polished finished product.",
              },
              {
                icon: BookOpen,
                title: "ISBN & Publishing Setup",
                text: "Guidance through ISBNs, KDP, IngramSpark, metadata, editions, and distribution setup.",
              },
              {
                icon: Megaphone,
                title: "Book Launch Marketing",
                text: "Positioning, launch campaigns, social content, advertising, email, promotional assets, and strategy.",
              },
              {
                icon: Globe2,
                title: "Author Platform",
                text: "Author websites, landing pages, social presence, media kits, and a foundation for building an audience.",
              },
              {
                icon: Store,
                title: "Events & Book Signings",
                text: "We can help coordinate bookstores, libraries, speaking opportunities, signings, and promotional events.",
              },
            ].map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10">
                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-stone-400">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PUBLISHING PATH BRIDGE */}
      <section className="bg-[#fbfaf7] py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
            Your publishing journey
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Every author starts somewhere.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Maybe you have an idea. Maybe your manuscript is finished. Maybe
            you&apos;ve already published and you&apos;re wondering what comes
            next.
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-serif text-2xl italic text-stone-800">
            Your book is unique. Your publishing path should be too.
          </p>

          <div className="mt-9">
            <a
              href="/publishing-packages"
              className="group inline-flex items-center justify-center rounded-full bg-stone-900 px-8 py-4 font-bold text-white transition hover:bg-stone-700"
            >
              Explore Your Publishing Path
              <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* AI */}
      <section
        id="ai"
        className="relative overflow-hidden bg-[#f1ede4] py-24 md:py-32"
      >
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
                We don&apos;t fear AI.
                <br />
                <span className="italic">
                  We put it to work for authors.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                AI can help an author brainstorm, organize, research, refine,
                edit, and communicate ideas. It can make the writing process
                more accessible than ever. But technology should serve the
                author&apos;s voice—not replace it.
              </p>

              <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-stone-800">
                Human voice. AI assistance. Professional publishing.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-300 bg-white p-8 shadow-xl sm:p-10">
              <p className="font-serif text-2xl font-bold">
                Imagine starting with...
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "A story you’ve carried for years.",
                  "An idea you’ve never known how to organize.",
                  "A lifetime of knowledge sitting in your head.",
                  "A manuscript that needs another set of eyes.",
                  "A book you believe should exist.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <Check className="h-4 w-4" />
                    </div>

                    <p className="text-stone-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-stone-200 pt-8">
                <p className="font-serif text-xl italic text-stone-700">
                  &ldquo;You don’t have to start as a writer. You have to
                  start with something worth saying.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              How it works
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
              Your book. One guided journey.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {[
              [
                "01",
                "DISCOVER",
                "Tell us about your book, your goals, and the audience you want to reach.",
              ],
              [
                "02",
                "CREATE",
                "Develop, edit, design, and prepare your manuscript for publication.",
              ],
              [
                "03",
                "PUBLISH",
                "Bring your book to market through the publishing and distribution channels that fit your goals.",
              ],
              [
                "04",
                "GROW",
                "Launch, market, promote, and build your author platform beyond publication day.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="relative rounded-3xl border border-stone-200 bg-[#fbfaf7] p-8"
              >
                <span className="font-serif text-4xl font-bold text-amber-700">
                  {number}
                </span>

                <h3 className="mt-6 text-lg font-black tracking-[0.18em]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="bg-[#f1ede4] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-800">
            More than a publishing service
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            We want to help authors build something that lasts.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-stone-600">
            Depending on the project, APP may offer straightforward publishing
            packages or explore deeper author partnerships that combine an
            upfront project fee with ongoing services and agreed economics.
            Every arrangement should be transparent, clearly documented, and
            designed around the author&apos;s goals.
          </p>

          <div className="mt-10 inline-flex flex-wrap justify-center gap-3 text-sm font-semibold text-stone-700">
            <span className="rounded-full bg-white px-5 py-3 shadow-sm">
              Transparent agreements
            </span>

            <span className="rounded-full bg-white px-5 py-3 shadow-sm">
              Clear deliverables
            </span>

            <span className="rounded-full bg-white px-5 py-3 shadow-sm">
              Author-focused
            </span>

            <span className="rounded-full bg-white px-5 py-3 shadow-sm">
              Long-term growth
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
  id="contact"
  className="relative overflow-hidden bg-stone-950 pt-24 pb-10 text-white md:pt-32 md:pb-10"
>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,175,96,.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
            Your story starts here
          </p>

          <h2 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl">
            Ready to give your
            <span className="block italic text-amber-200">
              book a voice?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            We&apos;re building Awakened Perspective Press for authors who want
            more than a book sitting on a shelf. Tell us what you&apos;re
            creating.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-4">
  <a
    href="/publishing-packages"
    className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 font-black text-stone-950 transition hover:bg-amber-200"
  >
    Find Your Publishing Path
    <ArrowRight className="ml-3 h-5 w-5" />
  </a>

  <p className="text-sm text-stone-400">
    Already know what you need?{" "}
    <a
      href="/contact"
      className="font-semibold text-amber-300 transition hover:text-amber-200"
    >
      Start a Conversation →
    </a>
  </p>
</div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-stone-500 sm:flex-row">
              <p>
                © {new Date().getFullYear()} Awakened Perspective Press.
              </p>

              <p>
                Your Story. Your Voice. Your Book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}