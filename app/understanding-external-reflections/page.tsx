import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, BookOpen, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Understanding External Reflections | Gary Walker",
  description:
    "Explore Understanding External Reflections: An Unorthodox Conversation by Gary Walker. A different perspective on life, reality, and who you really are.",
  alternates: {
    canonical: "https://awakenedperspectivepress.com/understanding-external-reflections",
  },
  openGraph: {
    title: "Understanding External Reflections | Gary Walker",
    description:
      "A different perspective could change everything. Discover the book by Gary Walker.",
    url: "https://awakenedperspectivepress.com/understanding-external-reflections",
    siteName: "Awakened Perspective Press",
    type: "website",
    images: [{ url: "/understanding-external-reflections-hero.png", alt: "Understanding External Reflections by Gary Walker" }],
  },
};

const questions = [
  "What if the way you see the world is only one way of seeing it?",
  "How much of what we call reality is shaped by the perspective we bring to it?",
  "What might change if we became willing to ask different questions?",
];

export default function UnderstandingExternalReflectionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071b33] text-white">
      <header className="relative z-10 border-b border-white/10 bg-[#071b33]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Awakened Perspective Press home">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/50 bg-amber-300/10">
              <Sparkles className="h-5 w-5 text-amber-300" />
            </div>
            <div className="leading-none">
              <p className="font-serif text-lg font-bold tracking-tight">Awakened</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-amber-300">Perspective Press</p>
            </div>
          </Link>
          <Link href="/contact?book=Understanding%20External%20Reflections" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200 sm:px-5">
            Follow the Launch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_30%,rgba(242,178,74,.22),transparent_40%),linear-gradient(180deg,#071b33_0%,#0b2c50_55%,#071b33_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-amber-200">
              <ArrowLeft className="h-4 w-4" /> Awakened Perspective Press
            </Link>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-amber-300 sm:text-sm">
              A book by Gary Walker
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
              Understanding
              <span className="mt-1 block text-amber-300">External Reflections</span>
            </h1>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-slate-200 sm:text-2xl">
              An Unorthodox Conversation About Life, Reality, and a Deeper Understanding of Who You Really Are.
            </p>
            <div className="my-8 h-px w-24 bg-amber-300" />
            <h2 className="max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
              A Different Perspective Could Change Everything.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              What if the questions we ask shape what we are able to see? This book invites you to pause, look again, and explore familiar ideas from an unfamiliar perspective.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#the-conversation" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-[#071b33] transition hover:bg-amber-200">
                Explore the Conversation <ArrowDown className="h-4 w-4" />
              </a>
              <Link href="/contact?book=Understanding%20External%20Reflections" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:border-amber-300 hover:text-amber-200">
                Get Launch Updates <Mail className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-400">
              Publication date and ordering details will be announced when the editions are ready.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-5 rounded-[3rem] bg-amber-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-black/20 p-2 shadow-2xl shadow-black/40">
              <Image
                src="/understanding-external-reflections-hero.png"
                alt="Three-dimensional hardcover mockup of Understanding External Reflections by Gary Walker, against a golden sunset over the ocean"
                width={1280}
                height={1280}
                priority
                className="h-auto w-full rounded-[1.25rem]"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
            </div>
            <p className="mt-4 text-center text-xs tracking-wide text-slate-400">
              UNDERSTANDING EXTERNAL REFLECTIONS · GARY WALKER
            </p>
          </div>
        </div>
      </section>

      <section id="the-conversation" className="bg-[#fbf8f1] px-5 py-20 text-[#172b43] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-800">The conversation begins with a question</p>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              What if seeing differently is the beginning of understanding differently?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We all move through life with assumptions about who we are, how reality works, and what our experiences mean. This unorthodox conversation invites you to examine those assumptions—not by handing you a list of answers, but by making room for new questions.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {questions.map((question, index) => (
              <article key={question} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                <span className="font-serif text-3xl text-amber-700">0{index + 1}</span>
                <p className="mt-5 font-serif text-xl leading-relaxed">{question}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center font-serif text-xl italic leading-relaxed text-slate-700">
            Different questions. Deeper answers. A bigger perspective.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#172b43] sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-800">The journey behind the perspective</p>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              A life is more than any one chapter.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Gary Walker’s perspective has been shaped by real experiences, difficult chapters, entrepreneurship, and a continuing willingness to question what he once believed. His story includes a period of incarceration—part of his journey that he does not hide, and one chapter that does not define the entirety of who he is.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              His exploration of perspective first found expression in <em>Awakening: A Different Perspective Is a Better Understanding</em>. <em>Understanding External Reflections</em> continues that exploration, inviting readers to look more closely at life, reality, and the assumptions through which they experience the world.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              This is not a claim to have all the answers. It is an invitation to ask different questions—and to discover what those questions might open up.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#071b33] p-8 text-white sm:p-11">
            <BookOpen className="h-8 w-8 text-amber-300" />
            <p className="mt-7 font-serif text-2xl italic leading-relaxed sm:text-3xl">
              “This isn’t a story about having all the answers. It’s an invitation to ask different questions.”
            </p>
            <div className="mt-8 h-px w-16 bg-amber-300" />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-amber-200">Gary Walker</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Author of <em>Understanding External Reflections</em></p>
          </div>
        </div>
      </section>

      <section className="bg-[#102a43] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">An invitation, not a conclusion</p>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
            The next perspective could be your own.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If these questions resonate with you, follow the book’s journey. We’ll share publication news and ordering information as the editions become available.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact?book=Understanding%20External%20Reflections" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-[#071b33] transition hover:bg-amber-200">
              Follow the Launch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-bold transition hover:border-amber-300 hover:text-amber-200">
              Visit Awakened Perspective Press
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#071b33] px-5 py-8 text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Awakened Perspective Press.</p>
          <p>Ideas for a more conscious, fulfilled life.</p>
          <Link href="/contact?book=Understanding%20External%20Reflections" className="transition hover:text-amber-200">Contact the Press</Link>
        </div>
      </footer>
    </main>
  );
}
