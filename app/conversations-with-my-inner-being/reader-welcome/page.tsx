import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Free eBook Is on Its Way | Awakened Perspective Press",
  description: "Check your inbox for your complimentary copy of Understanding External Reflections.",
  robots: { index: false, follow: false },
};

export default async function ReaderWelcomePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const deliveryIssue = error === "delivery" || error === "unavailable";
  const invalidSignup = error === "invalid";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071b33] px-5 py-16 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-amber-300/25 bg-white/[.04] p-8 text-center shadow-2xl sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-300/10">
          <BookOpen className="h-8 w-8 text-amber-300" />
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[.28em] text-amber-300">
          Welcome to the conversation
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          {invalidSignup
            ? "Please check your details."
            : deliveryIssue
              ? "Your request needs another try."
              : "Your free eBook is on its way."}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          {invalidSignup
            ? "Please return to the signup form and enter your name, a valid email address, and your email consent."
            : deliveryIssue
              ? "We couldn't confirm the delivery email just now. You can still download the book below, and you may submit the form again if you would also like to receive the email follow-up."
              : <>Check your inbox for <em>Understanding External Reflections</em>. The email includes your download link and a welcome message from Gary.</>}
        </p>

        <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4 text-left">
          <Mail className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
          <p className="text-sm leading-6 text-slate-300">
            If you don't see the email in a few minutes, check your Spam or
            Promotions folder. You can also use the backup download below.
          </p>
        </div>

        <a
          href="/downloads/understanding-external-reflections-6x9.pdf"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-[#071b33] transition hover:bg-amber-200 sm:w-auto"
        >
          Download the eBook now
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-8">
          <Link
            href="/conversations-with-my-inner-being"
            className="text-sm text-slate-400 underline underline-offset-4 transition hover:text-amber-200"
          >
            Return to the trilogy
          </Link>
        </div>
      </div>
    </main>
  );
}