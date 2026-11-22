import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Share Your Perspective | Conversations With My Inner Being",
  description:
    "Share what resonated with you, a question that came to mind, or an experience inspired by Conversations With My Inner Being.",
  alternates: {
    canonical:
      "https://awakenedperspectivepress.com/conversations-with-my-inner-being/share-your-perspective",
  },
};

const emailSubject = encodeURIComponent(
  "My Perspective on Conversations With My Inner Being",
);
const emailBody = encodeURIComponent(
  "Hello Gary,\n\nI would like to share a thought about Conversations With My Inner Being.\n\nThe idea or passage that resonated with me was:\n\n\nMy question or reflection is:\n\n\nThank you,\n",
);

export default function ShareYourPerspectivePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071b33] px-5 py-16 text-white">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[#102a43] p-8 shadow-2xl sm:p-12">
        <Link
          href="/conversations-with-my-inner-being"
          className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-amber-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to the trilogy
        </Link>

        <div className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-300/10">
          <MessageCircle className="h-8 w-8 text-amber-300" />
        </div>

        <p className="mt-7 text-center text-xs font-bold uppercase tracking-[.28em] text-amber-300">
          The conversation continues
        </p>

        <h1 className="mt-4 text-center font-serif text-4xl font-semibold sm:text-5xl">
          Share Your Perspective
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300">
          A book can introduce an idea, but the conversation grows through the
          questions, experiences, and perspectives each reader brings to it.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { title: "What resonated?", text: "Was there an idea or passage that made you see something differently?" },
            { title: "What did you question?", text: "Did something challenge an assumption or inspire a new question?" },
            { title: "What did you discover?", text: "Did the book connect with something in your own experience?" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
              <h2 className="font-serif text-xl font-semibold text-amber-200">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-9 text-center leading-8 text-slate-300">
          I would genuinely like to hear what the journey brings up for you.
          Send your thoughts directly, and let's continue the conversation.
        </p>

        <div className="mt-8 text-center">
          <a
            href={`mailto:hello@awakenedperspectivepress.com?subject=${emailSubject}&body=${emailBody}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-8 py-4 font-bold text-[#071b33] transition hover:bg-amber-200"
          >
            Email Your Perspective
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-slate-400">
            Your email app will open with a few prompts to help you get started.
          </p>
        </div>
      </div>
    </main>
  );
}