import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import OfferCards from "./OfferCards";

export const metadata: Metadata = {
  title: "The 3X Value Guarantee | Awakened Perspective Press",
  description:
    "Explore Understanding External Reflections and Abundance Abounds by Gary Walker, backed by the proposed 30-day 3X Value Guarantee.",
  alternates: {
    canonical: "https://awakenedperspectivepress.com/3x-guarantee",
  },
  openGraph: {
    title: "The 3X Value Guarantee | Awakened Perspective Press",
    description:
      "Two books. Two perspectives. One extraordinary value guarantee.",
    url: "https://awakenedperspectivepress.com/3x-guarantee",
    siteName: "Awakened Perspective Press",
    type: "website",
    images: [
      {
        url: "/understanding-external-reflections-hero.png",
        alt: "Understanding External Reflections by Gary Walker",
      },
    ],
  },
};

export default function ThreeXGuaranteePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071b33] text-white">
      <header className="relative z-10 border-b border-white/10 bg-[#071b33]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Awakened Perspective Press home">
            <Image
              src="/app-logo-hero.png"
              alt=""
              width={76}
              height={48}
              priority
              className="h-12 w-[76px] shrink-0 object-contain"
            />
            <div className="leading-none">
              <p className="font-serif text-[1.35rem] font-bold tracking-[-0.02em]">Awakened</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">Perspective Press</p>
            </div>
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-300 transition hover:text-amber-200">
            Contact
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_15%,rgba(242,178,74,.20),transparent_35%),radial-gradient(ellipse_at_10%_70%,rgba(38,111,145,.18),transparent_38%),linear-gradient(180deg,#071b33_0%,#102a43_100%)]" />
        <div className="pointer-events-none absolute -right-40 top-16 h-[28rem] w-[28rem] rounded-full border border-amber-200/10" />
        <div className="pointer-events-none absolute -right-20 top-36 h-[20rem] w-[20rem] rounded-full border border-amber-200/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_.92fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-amber-300 sm:text-sm">
              An extraordinary offer from Gary Walker
            </p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Love the experience.
              <span className="mt-2 block text-amber-300">Or get 3X your money back.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Explore either book for 30 days. If you don&apos;t feel you received value from what you read, the 3X Value Guarantee is designed to put my confidence behind your experience.
            </p>
            <div className="mt-9 inline-flex items-center gap-4 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-5 py-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-300 text-xl font-black text-[#071b33]">3×</div>
              <div>
                <p className="font-bold text-amber-200">30 days to discover the value</p>
                <p className="mt-1 text-sm text-slate-300">A bold promise. A clear process. No guesswork.</p>
              </div>
            </div>
            <a href="#choose-your-book" className="mt-9 inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 font-bold text-[#071b33] transition hover:bg-amber-200">
              Explore the books <span className="ml-2" aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-amber-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.05] p-3 shadow-2xl shadow-black/30">
              <Image
                src="/understanding-external-reflections-hero.png"
                alt="Understanding External Reflections by Gary Walker"
                width={1280}
                height={1280}
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full rounded-[1.4rem]"
              />
              <div className="px-4 pb-4 pt-5 text-center">
                <p className="font-serif text-2xl font-semibold">Two books. Two perspectives.</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">An invitation to question familiar assumptions and experience life differently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b223b] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">A little about the author</p>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            A different perspective can change the way you experience your life.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            I went from prison, where I served a seven-year sentence, to living on an island in Thailand. Along the way, my experiences—and the questions they led me to ask—changed how I see life. While living on the island, I completed these two books.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m not suggesting that my path is yours to follow. These books are an invitation to explore your own experiences, question familiar interpretations, and consider what becomes possible when you look at life from a different perspective.
          </p>
        </div>
      </section>

      <section id="choose-your-book" className="bg-[#071b33] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">Choose your starting point</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">Which perspective speaks to you?</h2>
            <p className="mt-5 leading-7 text-slate-300">Choose either book and select the format that works best for you.</p>
          </div>
          <div className="mt-12">
            <OfferCards />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b223b] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">The 3X Value Guarantee</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">Confidence should come with accountability.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              ["01", "Choose your book", "Select the title and edition that feel right for you."],
              ["02", "Take 30 days", "Read the book and decide whether the experience delivered value."],
              ["03", "Make your decision", "If you are not satisfied, you can submit a request under the published guarantee terms."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm font-bold tracking-[0.2em] text-amber-300">{number}</p>
                <h3 className="mt-4 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-9 max-w-3xl text-center text-xs leading-6 text-slate-400">
            The complete guarantee terms—including the 30-day eligibility window, qualifying purchases, claim process, payout calculation, and any return requirements for physical editions—will be clearly presented before checkout is enabled.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Awakened Perspective Press. All rights reserved.</p>
        <p className="mt-2"><Link href="/" className="transition hover:text-amber-200">Awakened Perspective Press</Link></p>
      </footer>
    </main>
  );
}
