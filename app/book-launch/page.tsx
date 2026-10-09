import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Follow the Launch | Understanding External Reflections",
  description:
    "Join the launch list for Understanding External Reflections by Gary Walker. Get publication news and edition availability updates from Awakened Perspective Press.",
  alternates: {
    canonical: "https://awakenedperspectivepress.com/book-launch",
  },
};

export default function BookLaunchPage() {
  return (
    <main className="min-h-screen bg-[#071b33] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Awakened Perspective Press home">
            <Image src="/app-logo-hero.png" alt="" width={76} height={48} priority className="h-12 w-[76px] shrink-0 object-contain" />
            <div className="leading-none">
              <p className="font-serif text-[1.35rem] font-bold tracking-[-0.02em]">Awakened</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">Perspective Press</p>
            </div>
          </Link>
          <Link href="/understanding-external-reflections" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-amber-200">
            <ArrowLeft className="h-4 w-4" /> Back to the Book
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_10%,rgba(242,178,74,.17),transparent_38%),linear-gradient(180deg,#071b33_0%,#102a43_100%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-24">
          <div>
            <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10">
              <Sparkles className="h-5 w-5 text-amber-300" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">Be part of the beginning</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
              A Different Perspective Could <span className="text-amber-300">Change Everything.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Follow the journey of <em>Understanding External Reflections: An Unorthodox Conversation</em> by Gary Walker.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              Sign up for occasional updates about the book’s publication, the eBook and print editions, and when ordering becomes available. No purchase is required to join the launch list.
            </p>
            <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-slate-400">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
              <p>We’ll use your email address to send the book launch updates you request. You can ask us to stop at any time.</p>
            </div>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-8">
            <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <Image
                src="/understanding-external-reflections-hero.png"
                alt="Hardcover mockup of Understanding External Reflections by Gary Walker"
                width={1280}
                height={1280}
                priority
                sizes="220px"
                className="h-auto w-full"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold">Get launch updates</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">Tell us where to send the news when the book is ready.</p>
            </div>

            <form action="/api/book-launch" method="POST" className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-100">First name</label>
                <input id="name" name="name" type="text" autoComplete="given-name" required maxLength={100} className="w-full rounded-xl border border-white/15 bg-[#071b33] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300" placeholder="Your first name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-100">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className="w-full rounded-xl border border-white/15 bg-[#071b33] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300" placeholder="you@example.com" />
              </div>
              <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <input name="consent" type="checkbox" value="yes" required className="mt-1 h-4 w-4 accent-amber-300" />
                <span>Yes, email me occasional publication and launch updates for <em>Understanding External Reflections</em>. I understand I can opt out at any time.</span>
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-4 font-bold text-[#071b33] transition hover:bg-amber-200">
                Join the Launch List <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs leading-5 text-slate-400">This is an interest signup, not a paid preorder. Edition details, pricing, and availability will be announced when confirmed.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-400 sm:px-8">
        <p>© {new Date().getFullYear()} Awakened Perspective Press.</p>
        <Link href="/understanding-external-reflections" className="mt-2 inline-block transition hover:text-amber-200">Return to the book</Link>
      </footer>
    </main>
  );
}
