import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Download,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import PurchaseButton from "./PurchaseButton";

export const metadata: Metadata = {
  title: "Conversations With My Inner Being | Gary Walker",
  description:
    "Three books. One journey. Explore perspective, abundance, and joy through Conversations With My Inner Being by Gary Walker. Start with a free eBook.",
  alternates: {
    canonical:
      "https://awakenedperspectivepress.com/conversations-with-my-inner-being",
  },
  openGraph: {
    title: "Conversations With My Inner Being | Gary Walker",
    description:
      "A different perspective. A different experience. A different way of living.",
    url: "https://awakenedperspectivepress.com/conversations-with-my-inner-being",
    siteName: "Awakened Perspective Press",
    type: "website",
    images: [
      {
        url: "/conversations-with-my-inner-being-hero.png",
        alt: "Conversations With My Inner Being by Gary Walker",
      },
    ],
  },
};

const books = [
  {
    number: "01",
    title: "Understanding External Reflections",
    theme: "PERSPECTIVE",
    description:
      "What if the experiences we encounter in life could help us understand ourselves more deeply? Begin exploring the relationship between our inner world and our external experiences.",
    image: "/understanding-external-reflections-mockup.png",
    product: "understanding-external-reflections-paperback",
    freeEbook: true,
  },
  {
    number: "02",
    title: "Abundance Abounds",
    theme: "ABUNDANCE",
    description:
      "Move beyond understanding and begin experiencing abundance. Explore a different relationship with life, possibility, appreciation, and the experience of being.",
    image: "/abundance-abounds-mockup.png",
    product: "abundance-abounds-paperback",
    freeEbook: false,
  },
  {
    number: "03",
    title: "Finding Greatest Joy",
    theme: "JOY",
    description:
      "A dialogue-driven journey into the joy of living. Discover how clarity, purpose, meaning, freedom, and the experience itself can become part of the reward.",
    image: "/finding-greatest-joy-mockup.png",
    product: "finding-greatest-joy-paperback",
    freeEbook: false,
  },
] as const;

function BookArtwork({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="flex h-[330px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(242,178,74,.18),transparent_62%),linear-gradient(145deg,#102a43,#071b33)] p-6">
      <Image
        src={image}
        alt={`${title} by Gary Walker`}
        width={420}
        height={560}
        className="h-full w-auto max-w-full object-contain drop-shadow-2xl"
      />
    </div>
  );
}

export default function ConversationsWithMyInnerBeingPage() {

  return (
    <main className="min-h-screen overflow-hidden bg-[#071b33] text-white">
      {/* HEADER */}
      <header className="relative z-10 border-b border-white/10 bg-[#071b33]/95">
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
              className="h-12 w-[76px] shrink-0 object-contain"
            />
            <div className="leading-none">
              <p className="font-serif text-xl font-bold">
                Awakened
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[.28em] text-amber-300">
                Perspective Press
              </p>
            </div>
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-300 transition hover:text-amber-200"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/conversations-with-my-inner-being-hero.png"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b33] via-[#071b33]/90 to-[#071b33]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b33] via-transparent to-[#071b33]/30" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.32em] text-amber-300 sm:text-sm">
              A journey by Gary Walker
            </p>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
              Conversations
              <span className="block text-amber-300">
                With My Inner Being
              </span>
            </h1>

            <p className="mt-6 font-serif text-2xl text-white sm:text-3xl">
              Perspective. Abundance. Joy.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Three books. One journey. An invitation to experience life
              differently.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              Explore a different relationship with your experiences,
              discover the abundance already present in life, and find
              greater joy in the experience of being alive.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#free-ebook"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-[#071b33] transition hover:bg-amber-200"
              >
                <Download className="h-5 w-5" />
                Get the free eBook
              </a>

              <a
                href="#the-journey"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:border-amber-200 hover:text-amber-200"
              >
                Explore the journey
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Discover the ideas before deciding where the journey takes you.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[650px]">
            <Image
              src="/conversations-with-my-inner-being-hero.png"
              alt="The Conversations With My Inner Being book collection"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full rounded-2xl object-contain drop-shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="border-y border-white/10 bg-[#0b223b] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-amber-300">
            A different way of experiencing life
          </p>

          <h2 className="mt-5 font-serif text-3xl font-semibold sm:text-5xl">
            What if life could be experienced differently?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            What if we didn't have to struggle against every experience,
            constantly search for something missing, or wait for the
            perfect circumstances before allowing ourselves to enjoy life?
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            What if a shift in perspective could change the way we
            understand, experience, and participate in the world around us?
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "LOVE",
                description:
                  "Appreciate yourself, others, and the experience of being alive.",
              },
              {
                icon: Sparkles,
                title: "INVESTIGATE",
                description:
                  "Remain curious. Explore different perspectives and possibilities.",
              },
              {
                icon: ArrowRight,
                title: "VENTURE",
                description:
                  "Take inspired steps into new experiences and opportunities.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[.04] p-7 text-center"
                >
                  <Icon className="mx-auto h-8 w-8 text-amber-300" />
                  <h3 className="mt-4 font-serif text-xl font-bold text-amber-200">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/[.06] p-7">
            <h3 className="font-serif text-3xl font-bold text-amber-300">
              ENJOY
            </h3>
            <p className="mt-3 text-slate-200">
              Experience the journey. Appreciate what is already here.
              Discover the reward in living.
            </p>
          </div>

          <p className="mt-8 font-serif text-2xl font-semibold tracking-wide text-amber-200">
            LOVE. INVESTIGATE. VENTURE. ENJOY.
          </p>
        </div>
      </section>

      {/* THE THREE BOOKS */}
      <section
        id="the-journey"
        className="bg-[#071b33] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.3em] text-amber-300">
              The three-book journey
            </p>

            <h2 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
              One evolving conversation.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Each book explores another dimension of the experience
              of living. Read them in order or begin with the subject
              that speaks to you. All three paperback editions are available
              with free U.S. shipping.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {books.map((book) => (
              <article
                key={book.number}
                className="flex flex-col rounded-[1.75rem] border border-white/10 bg-[#102a43] p-5 shadow-xl shadow-black/20 sm:p-6"
              >
                <BookArtwork
                  title={book.title}
                  image={book.image}
                />

                <div className="flex flex-1 flex-col pt-6">
                  <p className="text-xs font-bold uppercase tracking-[.24em] text-amber-300">
                    Book {book.number} · {book.theme}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">
                    {book.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                    {book.description}
                  </p>

                  {book.freeEbook && (
                    <a
                      href="#free-ebook"
                      className="mt-6 block rounded-xl border border-emerald-300/40 bg-emerald-300/[.08] p-4 transition hover:border-emerald-200 hover:bg-emerald-300/[.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#102a43]"
                      aria-label="Get the free eBook: go to the name and email signup form"
                    >
                      <span className="block font-bold text-emerald-200">
                        Start here — FREE eBook <ArrowRight className="ml-1 inline h-4 w-4" />
                      </span>
                      <span className="mt-1 block text-xs leading-6 text-slate-300">
                        Click to receive the first book digitally at no cost.
                      </span>
                    </a>
                  )}

                  <PurchaseButton
  product={book.product}
  configured={true}
  label="Order paperback"
/>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    Free U.S. shipping included.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FREE EBOOK */}
      <section
        id="free-ebook"
        className="scroll-mt-8 relative overflow-hidden border-y border-amber-200/20 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,178,74,.18),transparent_55%),linear-gradient(145deg,#102a43,#071b33)] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="mx-auto w-full max-w-[360px]">
            <Image
              src="/understanding-external-reflections-mockup.png"
              alt="Understanding External Reflections by Gary Walker"
              width={600}
              height={800}
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-emerald-200">
              <GiftIcon />
              A gift to begin your journey
            </div>

            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Begin with a different perspective.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Discover{" "}
              <em>Understanding External Reflections</em>, the first book
              in the Conversations With My Inner Being trilogy.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              This is an opportunity to explore the ideas, reflect on
              your own experiences, and discover whether this perspective
              resonates with you.
            </p>

            <div className="mt-8 rounded-2xl border border-amber-200/20 bg-[#071b33]/70 p-6">
              <p className="text-3xl font-bold text-emerald-300">
                FREE
              </p>

              <h3 className="mt-2 font-serif text-2xl font-semibold">
                Get the introductory eBook
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Request your complimentary digital copy by email.
                We'll send you the download information.
              </p>

              <form action="/api/trilogy-signup" method="POST" className="mt-6 space-y-4">
                <div>
                  <label htmlFor="reader-name" className="mb-2 block text-sm font-semibold text-slate-200">
                    First name
                  </label>
                  <input
                    id="reader-name"
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    required
                    maxLength={100}
                    placeholder="Your first name"
                    className="w-full rounded-xl border border-white/15 bg-white/[.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300"
                  />
                </div>

                <div>
                  <label htmlFor="reader-email" className="mb-2 block text-sm font-semibold text-slate-200">
                    Email address
                  </label>
                  <input
                    id="reader-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/15 bg-white/[.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs leading-6 text-slate-300">
                  <input
                    type="checkbox"
                    name="consent"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-amber-300"
                  />
                  <span>
                    Email me the free eBook and occasional reflections and updates
                    about the trilogy. I understand I can unsubscribe at any time.
                  </span>
                </label>

                <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="reader-website">Leave this field blank</label>
                  <input
                    id="reader-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-4 font-bold text-[#071b33] transition hover:bg-amber-200"
                >
                  Email Me My Free eBook
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-3 text-center text-xs text-slate-400">
                No purchase necessary. Your download arrives by email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-[#0b223b] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <MessageCircle className="mx-auto h-10 w-10 text-amber-300" />

          <p className="mt-6 text-xs font-bold uppercase tracking-[.3em] text-amber-300">
            The conversation continues
          </p>

          <h2 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
            It's not just about reading a book.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            It's about exploring ideas, questioning familiar assumptions,
            sharing experiences, and discovering different ways of
            understanding life.
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
            We'd love to hear what resonates with you. Your perspective,
            questions, and experiences are part of the conversation.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/conversations-with-my-inner-being/share-your-perspective"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-[#071b33] transition hover:bg-amber-200"
            >
              Share Your Perspective
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="border-t border-white/10 bg-[#071b33] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[220px_1fr]">
          <div className="mx-auto w-full max-w-[220px]">
            <Image
              src="/gary-walker-author.png"
              alt="Gary Walker, author of Conversations With My Inner Being"
              width={1022}
              height={1200}
              className="h-auto w-full rounded-2xl border border-amber-300/30 object-contain shadow-xl"
              priority={false}
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-amber-300">
              About the author
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Gary Walker
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Gary Walker is the author of the Conversations With My
              Inner Being trilogy:{" "}
              <em>Understanding External Reflections</em>,{" "}
              <em>Abundance Abounds</em>, and{" "}
              <em>Finding Greatest Joy</em>.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Through personal exploration, experience, and honest
              dialogue, Gary shares a different perspective on how we
              understand life, experience abundance, and discover joy
              in the journey itself.
            </p>

            <p className="mt-5 font-serif text-xl font-semibold text-amber-200">
              Love. Investigate. Venture. Enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="border-t border-amber-200/20 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,178,74,.13),transparent_55%),#0b223b] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-5xl">
            What if your greatest joy is found in the experience itself?
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Begin exploring. Discover a different perspective.
            Enjoy the journey.
          </p>

          <a
            href="#free-ebook"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-8 py-4 font-bold text-[#071b33] transition hover:bg-amber-200"
          >
            Start with the free eBook
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Awakened Perspective Press.
          All rights reserved.
        </p>

        <p className="mt-2">
          Conversations With My Inner Being by Gary Walker
        </p>

        <Link
          href="/"
          className="mt-3 inline-block transition hover:text-amber-200"
        >
          Awakened Perspective Press
        </Link>
      </footer>
    </main>
  );
}

function GiftIcon() {
  return <BookOpen className="h-4 w-4" />;
}