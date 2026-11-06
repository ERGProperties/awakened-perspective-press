"use client";

import { useState } from "react";

type Format = "ebook" | "paperback" | "hardcover";

type ProductKey =
  | "abundance-ebook"
  | "abundance-paperback"
  | "abundance-hardcover"
  | "reflections-ebook"
  | "reflections-paperback"
  | "reflections-hardcover"
  | "bundle-ebook"
  | "bundle-paperback"
  | "bundle-hardcover";

const formats: { value: Format; label: string }[] = [
  { value: "ebook", label: "eBook" },
  { value: "paperback", label: "Paperback" },
  { value: "hardcover", label: "Hardcover" },
];

const offers: {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  keys: Record<Format, ProductKey>;
  prices: Record<Format, string>;
}[] = [
  {
    title: "Understanding External Reflections",
    subtitle: "A Dialogue with My Inner Being",
    description:
      "Explore a different understanding of yourself, your experiences, and the reflections you encounter throughout life. An invitation to question familiar assumptions and look within.",
    image: "/understanding-external-reflections-mockup.png",
    keys: {
      ebook: "reflections-ebook",
      paperback: "reflections-paperback",
      hardcover: "reflections-hardcover",
    },
    prices: {
      ebook: "$7.99",
      paperback: "$17.99",
      hardcover: "$26.99",
    },
  },
  {
    title: "Abundance Abounds",
    subtitle: "More Than Money — A Richer Way to Live",
    description:
      "Explore abundance beyond possessions or achievements—through interpretation, possibility, the value of being, and the experience of living.",
    image: "/abundance-abounds-mockup.png",
    keys: {
      ebook: "abundance-ebook",
      paperback: "abundance-paperback",
      hardcover: "abundance-hardcover",
    },
    prices: {
      ebook: "$7.99",
      paperback: "$17.99",
      hardcover: "$26.99",
    },
  },
  {
    title: "Both Books",
    subtitle: "Two Books. Two Perspectives. One Experience.",
    description:
      "Explore both books together: a deeper look at inner understanding and a different way to experience abundance and everyday life.",
    image: "/book-pair-hero.png",
    keys: {
      ebook: "bundle-ebook",
      paperback: "bundle-paperback",
      hardcover: "bundle-hardcover",
    },
    prices: {
      ebook: "$13.99",
      paperback: "$32.99",
      hardcover: "$49.99",
    },
  },
];

function BookOffer({
  offer,
}: {
  offer: (typeof offers)[number];
}) {
  const [format, setFormat] = useState<Format>("ebook");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function beginCheckout() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productKey: offer.keys[format],
        }),
      });

      const data = (await response.json()) as {
        url?: string;
        error?: string;
      };

      if (!response.ok || !data.url) {
        throw new Error(
          data.error || "Unable to start checkout. Please try again."
        );
      }

      window.location.assign(data.url);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Unable to start checkout. Please try again."
      );

      setLoading(false);
    }
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#102a43] shadow-xl shadow-black/20">
      <div className="flex h-[340px] shrink-0 items-center justify-center bg-[radial-gradient(ellipse_at_50%_45%,rgba(242,178,74,.16),transparent_60%),linear-gradient(145deg,#102a43,#071b33)] p-8">
        <img
          src={offer.image}
          alt={`${offer.title} book mockup`}
          className={`h-[280px] w-[270px] rounded-lg object-contain drop-shadow-2xl ${
            offer.title === "Understanding External Reflections"
              ? "scale-[1.2]"
              : ""
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
          By Gary Walker
        </p>

        <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight">
          {offer.title}
        </h3>

        <p className="mt-2 text-sm italic leading-6 text-amber-100/90">
          {offer.subtitle}
        </p>

        <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-300">
          {offer.description}
        </p>

        <div className="mt-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Choose your format
          </p>

          <div
            className="mt-3 grid grid-cols-3 gap-2"
            role="group"
            aria-label={`Format for ${offer.title}`}
          >
            {formats.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={format === option.value}
                onClick={() => setFormat(option.value)}
                className={`rounded-xl border px-2 py-3 text-xs font-semibold transition sm:text-sm ${
                  format === option.value
                    ? "border-amber-300 bg-amber-300 text-[#071b33]"
                    : "border-white/15 bg-white/[0.03] text-slate-200 hover:border-amber-200/60"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-[#071b33]/70 p-4">
          <p className="text-xs text-slate-400">
            Your selected edition
          </p>

          <p className="mt-1 text-2xl font-bold text-amber-300">
            {offer.prices[format]}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            {format === "ebook"
              ? "Digital edition. Your current eBook will be personally delivered by the publisher after purchase."
              : "Printed edition. Your shipping address will be collected securely at checkout."}
          </p>
        </div>

        <button
          type="button"
          onClick={beginCheckout}
          disabled={loading}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-6 py-4 text-sm font-bold text-[#071b33] transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60"
        >
          {loading
            ? "Opening secure checkout…"
            : "Take the Insane Offer While It Lasts"}
        </button>

        {error && (
          <p
            role="alert"
            className="mt-3 text-center text-sm text-rose-300"
          >
            {error}
          </p>
        )}
      </div>
    </article>
  );
}

export default function OfferCards() {
  return (
    <div className="grid gap-7 lg:grid-cols-3">
      {offers.map((offer) => (
        <BookOffer key={offer.title} offer={offer} />
      ))}
    </div>
  );
}