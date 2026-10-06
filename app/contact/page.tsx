"use client";

import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Mail } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      bookTitle: formData.get("bookTitle"),
      stage: formData.get("stage"),
      genre: formData.get("genre"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Contact form submission error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#fbfaf7] text-stone-900">
        <header className="border-b border-stone-200 bg-[#fbfaf7]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <a href="/" className="flex items-center gap-3">
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
            </a>

            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-stone-950"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </div>
        </header>

        <section className="flex min-h-[calc(100vh-89px)] items-center justify-center px-6 py-20">
          <div className="max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800">
              <Mail className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              Message received
            </p>

            <h1 className="mt-5 font-serif text-5xl font-bold leading-tight sm:text-6xl">
              Thank you for reaching out.
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-stone-600">
              We received your information and will review it personally.
              Awakened Perspective Press will be in touch soon.
            </p>

            <a
              href="/"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-stone-900 px-7 py-4 font-bold text-white transition hover:bg-stone-700"
            >
              Return Home
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-900">
      <header className="border-b border-stone-200 bg-[#fbfaf7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
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
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-stone-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-700">
              Start a conversation
            </p>

            <h1 className="mt-5 font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Tell us about
              <span className="block italic text-amber-800">
                your book.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
              You don&apos;t have to have everything figured out. Tell us where
              you are in the process, what you&apos;re creating, and what you
              hope your book can become.
            </p>

            <div className="mt-10 rounded-3xl bg-[#f1ede4] p-7">
              <BookOpen className="h-7 w-7 text-amber-800" />

              <h2 className="mt-5 font-serif text-2xl font-bold">
                You don&apos;t have to have it all figured out.
              </h2>

              <p className="mt-4 leading-7 text-stone-600">
                Whether you have a finished manuscript, a collection of ideas,
                or simply a story you know needs to be told, start there. We can
                figure out the next steps together.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-[#fbfaf7] p-7 shadow-sm sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-stone-800"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-stone-800"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-stone-800"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bookTitle"
                    className="text-sm font-bold text-stone-800"
                  >
                    Book Title
                  </label>
                  <input
                    id="bookTitle"
                    name="bookTitle"
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                    placeholder="Working title, if you have one"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="stage"
                    className="text-sm font-bold text-stone-800"
                  >
                    Where are you in the process?
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    defaultValue=""
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Just an idea">Just an idea</option>
                    <option value="Currently writing">
                      Currently writing
                    </option>
                    <option value="Manuscript nearly finished">
                      Manuscript nearly finished
                    </option>
                    <option value="Completed manuscript">
                      Completed manuscript
                    </option>
                    <option value="Already published">
                      Already published
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="genre"
                    className="text-sm font-bold text-stone-800"
                  >
                    Genre
                  </label>
                  <input
                    id="genre"
                    name="genre"
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                    placeholder="Memoir, business, self-help..."
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-stone-800"
                >
                  Tell us about your book *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  className="mt-2 w-full resize-none rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  placeholder="Tell us about your story, your book, where you are in the process, or what you'd like help with."
                />
              </div>

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-6 text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="group inline-flex w-full items-center justify-center rounded-full bg-stone-900 px-7 py-4 font-bold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Your Message"}
                {!sending && (
                  <ArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
                )}
              </button>

              <p className="text-center text-xs leading-5 text-stone-500">
                Your information is used only to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Awakened Perspective Press.</p>
          <p>Your Story. Your Voice. Your Book.</p>
        </div>
      </footer>
    </main>
  );
}