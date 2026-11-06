"use client";

import { useState } from "react";

type Format = "ebook" | "softcover" | "hardcover";

const formats: { value: Format; label: string }[] = [
  { value: "ebook", label: "eBook" },
  { value: "softcover", label: "Softcover" },
  { value: "hardcover", label: "Hardcover" },
];

function BookOffer({
  title,
  subtitle,
  description,
  image,
  price,
  availableFormats,
}: {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  price?: string;
  availableFormats: Format[];
}) {
  const [format, setFormat] = useState<Format>("ebook");
  const isAvailable = availableFormats.includes(format);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#102a43] shadow-xl shadow-black/20">
      <div className="flex min-h-[290px] items-center justify-center bg-[radial-gradient(ellipse_at_50%_45%,rgba(242,178,74,.16),transparent_60%),linear-gradient(145deg,#102a43,#071b33)] p-8">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="max-h-[260px] w-full max-w-[270px] rounded-lg object-contain drop-shadow-2xl" />
        ) : (
          <div className="flex aspect-[3/4] w-[190px] flex-col justify-between border border-amber-200/40 bg-gradient-to-br from-[#173e55] via-[#102a43] to-[#071b33] p-5 text-center shadow-2xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-amber-200">A book by Gary Walker</p>
            <div>
              <p className="font-serif text-3xl font-semibold leading-tight text-white">Abundance</p>
              <p className="mt-1 font-serif text-3xl italic text-amber-200">Abounds</p>
              <div className="mx-auto mt-5 h-px w-12 bg-amber-300/70" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-300">Awakened Perspective Press</p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">By Gary Walker</p>
        <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-sm italic leading-6 text-amber-100/90">{subtitle}</p>
        <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-300">{description}</p>

        <div className="mt-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Choose your format</p>
          <div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-label={`Format for ${title}`}>
            {formats.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={format === option.value}
                onClick={() => setFormat(option.value)}
                className={`rounded-xl border px-2 py-3 text-xs font-semibold transition sm:text-sm ${format === option.value ? "border-amber-300 bg-amber-300 text-[#071b33]" : "border-white/15 bg-white/[0.03] text-slate-200 hover:border-amber-200/60"}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-[#071b33]/70 p-4">
          {isAvailable ? (
            <>
              <p className="text-xs text-slate-400">Current listed price</p>
              <p className="mt-1 text-2xl font-bold text-amber-300">{price}</p>
              <p className="mt-1 text-xs text-slate-400">Digital EPUB edition</p>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-slate-200">{format === "ebook" ? "Digital edition pricing is being finalized." : `${format === "softcover" ? "Softcover" : "Hardcover"} edition details are being finalized.`}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">We'll publish the price and ordering details before purchases open.</p>
            </>
          )}
        </div>

        <button
          type="button"
          disabled
          className="mt-5 inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 px-6 py-4 text-sm font-bold text-amber-100/70"
          aria-describedby={`${title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}-availability`}
        >
          Purchasing opens soon
        </button>
        <p id={`${title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}-availability`} className="mt-3 text-center text-xs leading-5 text-slate-400">
          Checkout will open once edition pricing and the complete 3X guarantee terms are finalized.
        </p>
      </div>
    </article>
  );
}

export default function OfferCards() {
  return (
    <div className="grid gap-7 lg:grid-cols-2">
      <BookOffer
        title="Understanding External Reflections"
        subtitle="A Dialogue with My Inner Being"
        description="Explore a different understanding of yourself, your experiences, and the reflections you encounter throughout life. An invitation to question familiar assumptions and look within."
        image="/understanding-external-reflections-hero.png"
        price="$7.99"
        availableFormats={["ebook"]}
      />
      <BookOffer
        title="Abundance Abounds"
        subtitle="Moving beyond understanding to experiencing life differently."
        description="Explore abundance beyond possessions or achievements—through interpretation, possibility, the value of being, and the experience of living."
        availableFormats={[]}
      />
    </div>
  );
}
