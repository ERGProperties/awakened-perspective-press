import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Sparkles,
} from "lucide-react";
import CheckoutButton from "../book-launch/thank-you/CheckoutButton";
import AudioPlayer from "./AudioPlayer";

export const metadata: Metadata = {
  title: "Listen to the Conversation | Understanding External Reflections",
  description:
    "Listen to Gary Walker and Sage explore life, perspective, and the mirror between our inner and outer worlds. Then discover Understanding External Reflections.",
  alternates: {
    canonical: "https://awakenedperspectivepress.com/audio-preview",
  },
};

export default function AudioPreviewPage() {
  return (
    <main className="min-h-screen bg-[#071b33] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Awakened Perspective Press home"
          >
            <Image
              src="/app-logo-hero.png"
              alt=""
              width={76}
              height={48}
              priority
              className="h-12 w-[76px] shrink-0 object-contain"
            />
            <div className="leading-none">
              <p className="font-serif text-[1.35rem] font-bold">
                Awakened
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">
                Perspective Press
              </p>
            </div>
          </Link>

          <Link
            href="/understanding-external-reflections"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-amber-200"
          >
            About the Book
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,178,74,.16),transparent_45%),linear-gradient(180deg,#071b33_0%,#102a43_100%)]" />

        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10">
              <Headphones className="h-6 w-6 text-amber-300" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              An audio preview
            </p>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
              Before You Read the Book,
              <span className="block text-amber-300">
                Hear the Conversation.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              What happens when a real human being explores life&apos;s
              biggest questions with an unexpected conversation partner?
              Listen to Gary and Sage explore a different perspective.
            </p>
          </div>

          {/* Audio preview card */}
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-amber-300/25 bg-white/[0.04] shadow-2xl shadow-black/30">
            <Image
              src="/understanding-external-reflections-audio-motion.gif"
              alt="Understanding External Reflections — Gary and Sage audio preview, Chapter One: The Mirror"
              width={1672}
              height={941}
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full"
            />

            <div className="p-5 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                    Chapter One · The Mirror
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                    Gary &amp; Sage
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A real conversation about perspective, expectations,
                    and learning to live.
                  </p>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
                  Free to listen
                </span>
              </div>

              <AudioPlayer />

              <p className="mt-3 text-center text-xs leading-5 text-slate-400">
                Press play and listen right away. No signup required.
              </p>
            </div>
          </div>

          {/* eBook purchase offer */}
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-300/30 bg-[#0b223b] p-6 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-300/10 sm:flex">
                <Sparkles className="h-6 w-6 text-amber-300" />
              </div>

              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                  Continue the conversation
                </p>

                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  There&apos;s More to Discover.
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  If this conversation resonates with you, explore the
                  complete book,{" "}
                  <em>
                    Understanding External Reflections: An Unorthodox
                    Conversation
                  </em>{" "}
                  by Gary Walker.
                </p>

                <p className="mt-4 text-3xl font-bold text-amber-300">
                  $7.99
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Digital EPUB edition · Instant delivery after successful
                  payment
                </p>

                <div className="mt-6">
                  <CheckoutButton />
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-400">
                  Secure checkout. No email signup is required to listen
                  to the preview.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/understanding-external-reflections"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-200"
            >
              Explore the book
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-400 sm:px-8">
        <p>
          © {new Date().getFullYear()} Awakened Perspective Press.
        </p>
        <p className="mt-2">Love. Investigate. Venture. Enjoy.</p>
      </footer>
    </main>
  );
}