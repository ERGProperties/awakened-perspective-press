import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import CheckoutButton from "./CheckoutButton";

export const metadata: Metadata = {
  title: "Read Now | Understanding External Reflections",
  robots: { index: false, follow: true },
};

export default function BookLaunchOfferPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#071b33] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-4 sm:px-8">
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
              <p className="font-serif text-[1.35rem] font-bold">Awakened</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">
                Perspective Press
              </p>
            </div>
          </Link>
        </div>
      </header>

      <section className="flex flex-1 items-center justify-center px-5 py-8 sm:px-8 sm:py-12">
        <div className="w-full max-w-4xl">
          <div className="rounded-3xl border border-amber-300/30 bg-white/[0.04] p-6 sm:p-12">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10">
                <BookOpen className="h-8 w-8 text-amber-300" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                  Available now · Instant digital edition
                </p>

                <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                  Don&apos;t wait. Read it now.
                </h1>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Get the digital edition of{" "}
                  <em>
                    Understanding External Reflections: An Unorthodox Conversation
                  </em>{" "}
                  and begin reading as soon as your purchase is complete.
                </p>

                <div className="mt-7 flex flex-col items-center gap-3 sm:items-start">
                  <CheckoutButton />

                  <Link
                    href="/book-launch/updates-confirmed"
                    className="text-sm text-slate-400 underline decoration-slate-500/60 underline-offset-4 transition hover:text-slate-200"
                  >
                    No thank you, I&apos;ll wait for book updates.
                  </Link>
                </div>

                <p className="mt-5 text-xs leading-5 text-slate-400">
                  Secure checkout · Digital EPUB edition · Your launch-list
                  signup remains active either way.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/understanding-external-reflections"
              className="inline-flex items-center justify-center gap-2 text-sm text-slate-400 transition hover:text-amber-200"
            >
              Learn more about the book
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}