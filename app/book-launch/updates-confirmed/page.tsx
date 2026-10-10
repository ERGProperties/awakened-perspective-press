import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "You're on the Launch List | Understanding External Reflections",
  robots: { index: false, follow: true },
};

export default function UpdatesConfirmedPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#071b33] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-5 sm:px-8">
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

      <section className="flex flex-1 items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10">
            <CheckCircle2 className="h-8 w-8 text-amber-300" />
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
            You&apos;re on the list
          </p>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Thank you for being part of the beginning.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Your request for launch updates has been received. We&apos;ll share
            publication news and ordering information for{" "}
            <em>Understanding External Reflections</em> as details are confirmed.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            Your signup does not place an order or charge you.
          </p>

          <Link
            href="/understanding-external-reflections"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-amber-300/60 hover:text-amber-200"
          >
            Return to the Book
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}