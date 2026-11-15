import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Gift, PackageCheck, Sparkles } from "lucide-react";
import PurchaseButton from "./PurchaseButton";

export const metadata: Metadata = {
  title: "Conversations With My Inner Being | The Three-Book Collection",
  description:
    "Explore Understanding External Reflections, Abundance Abounds, and Finding Greatest Joy by Gary Walker. Purchase individual hardcover books or the complete boxed collection, with a free paperback copy of Awakening.",
  alternates: {
    canonical: "https://awakenedperspectivepress.com/conversations-with-my-inner-being",
  },
  openGraph: {
    title: "Conversations With My Inner Being | Gary Walker",
    description:
      "Three books exploring one evolving experience of life: Perspective. Abundance. Joy.",
    url: "https://awakenedperspectivepress.com/conversations-with-my-inner-being",
    siteName: "Awakened Perspective Press",
    type: "website",
    images: [
      {
        url: "/conversations-with-my-inner-being-hero.png",
        alt: "Books by Gary Walker from Awakened Perspective Press",
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
      "An invitation to question familiar assumptions and explore the relationship between your inner world, your experiences, and the reflections you encounter in life.",
    image: "/understanding-external-reflections-mockup.png",
    product: "understanding-external-reflections-hardcover",
  },
  {
    number: "02",
    title: "Abundance Abounds",
    theme: "ABUNDANCE",
    description:
      "Move beyond the conventional understanding of abundance and explore a richer way to experience life through interpretation, possibility, and the value of being.",
    image: "/abundance-abounds-mockup.png",
    product: "abundance-abounds-hardcover",
  },
  {
    number: "03",
    title: "Finding Greatest Joy",
    theme: "JOY",
    description:
      "A dialogue-driven journey into the joy of living—exploring how clarity, purpose, meaning, and the experience itself can become part of the reward.",
    image: "/finding-greatest-joy-mockup.png",
    product: "finding-greatest-joy-hardcover",
  },
] as const;

function BookArtwork({
  title,
  image,
  number,
}: {
  title: string;
  image: string;
  number: string;
}) {
  return (
    <div className="flex h-[330px] items-center justify-center rounded-2xl bg-[radial-gradient(ellipse_at_50%_45%,rgba(242,178,74,.16),transparent_62%),linear-gradient(145deg,#102a43,#071b33)] p-6">
      <Image
        src={image}
        alt={`${title} hardcover book by Gary Walker`}
        width={420}
        height={560}
        className="h-full w-auto max-w-full object-contain drop-shadow-2xl"
      />
    </div>
  );
}

function BoxSetArtwork() {
  return (
    <div className="relative mx-auto w-full max-w-[700px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40">
      <Image
        src="/conversations-with-my-inner-being-hero.png"
        alt="Conversations With My Inner Being — the complete three-book collection by Gary Walker"
        width={1536}
        height={1024}
        priority
        className="h-auto w-full object-contain"
        sizes="(max-width: 1024px) 100vw, 700px"
      />
    </div>
  );
}

export default function ConversationsWithMyInnerBeingPage() {
<<<<<<< Updated upstream
=======
  const standardShippingConfigured = Boolean(
    process.env.STRIPE_SHIPPING_RATE_ID_STANDARD
  );

>>>>>>> Stashed changes
  const priceIds: Record<string, string | undefined> = {
    "understanding-external-reflections-hardcover":
      process.env.STRIPE_PRICE_ID_UER_HARDCOVER,
    "abundance-abounds-hardcover":
      process.env.STRIPE_PRICE_ID_ABUNDANCE_HARDCOVER,
    "finding-greatest-joy-hardcover":
      process.env.STRIPE_PRICE_ID_FINDING_JOY_HARDCOVER,
    "conversations-with-my-inner-being-box-set":
      process.env.STRIPE_PRICE_ID_CONVERSATIONS_BOX_SET,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#071b33] text-white">
      {/* Header */}
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
              priority
              className="h-12 w-[76px] shrink-0 object-contain"
            />
            <div className="leading-none">
              <p className="font-serif text-[1.35rem] font-bold tracking-[-0.02em]">
                Awakened
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">
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

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_10%,rgba(242,178,74,.20),transparent_36%),radial-gradient(ellipse_at_10%_70%,rgba(38,111,145,.18),transparent_38%),linear-gradient(180deg,#071b33_0%,#102a43_100%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1fr] lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.32em] text-amber-300 sm:text-sm">
              A three-book journey by Gary Walker
            </p>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
              Conversations
              <span className="block text-amber-300">
                With My Inner Being
              </span>
            </h1>

            <p className="mt-5 font-serif text-xl text-slate-100 sm:text-2xl">
              Perspective. Abundance. Joy.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Three books exploring one evolving experience of life. Follow a
              journey from seeing differently, to experiencing abundance, to
              discovering the joy within the experience of living.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#box-set"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-[#071b33] transition hover:bg-amber-200"
              >
                Explore the complete box set
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#individual-books"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-amber-200 hover:text-amber-200"
              >
                Shop individual books
              </a>
            </div>
          </div>

          <BoxSetArtwork />
        </div>
      </section>

      {/* Three perspectives */}
      <section className="border-y border-white/10 bg-[#0b223b] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-amber-300">
            One collection. Three perspectives.
          </p>

          <h2 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">
            An evolving conversation about the experience of life.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              [
                "01",
                "PERSPECTIVE",
                "Understanding External Reflections",
                "Question what you see and explore the relationship between inner and outer experience.",
              ],
              [
                "02",
                "ABUNDANCE",
                "Abundance Abounds",
                "Move beyond conventional measures and explore a richer way to live.",
              ],
              [
                "03",
                "JOY",
                "Finding Greatest Joy",
                "Discover the role of clarity, purpose, meaning, and the experience itself.",
              ],
            ].map(([number, theme, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[.04] p-6 text-left"
              >
                <p className="text-sm font-bold tracking-[.2em] text-amber-300">
                  {number} · {theme}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-semibold">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual books */}
      <section
        id="individual-books"
        className="bg-[#071b33] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.3em] text-amber-300">
              Choose your starting point
            </p>

            <h2 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
              Explore the books individually
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Each hardcover is available on its own, or bring the complete
              journey home in the boxed collection.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {books.map((book) => (
              <article
                key={book.number}
                className="flex flex-col rounded-[1.75rem] border border-white/10 bg-[#102a43] p-5 shadow-xl shadow-black/20 sm:p-6"
              >
                <BookArtwork
                  title={book.title}
                  image={book.image}
                  number={book.number}
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

                  <div className="mt-6 rounded-xl border border-white/10 bg-[#071b33]/70 p-4">
                    <p className="text-xs text-slate-400">
                      Hardcover edition
                    </p>
                    <p className="mt-1 text-2xl font-bold text-amber-300">
                      $26.99
                    </p>
                  </div>
<<<<<<< Updated upstream
                  <PurchaseButton product={book.product} configured={Boolean(priceIds[book.product])} label={`Purchase hardcover — $26.99`} />
                  <p className="mt-3 text-center text-xs text-slate-400">Free U.S. shipping included.</p>
=======

                  <PurchaseButton
                    product={book.product}
                    configured={Boolean(
                      priceIds[book.product] && standardShippingConfigured
                    )}
                    label="Purchase hardcover — $26.99"
                  />

                  <p className="mt-3 text-center text-xs text-slate-400">
                    Shipping calculated at checkout.
                  </p>
>>>>>>> Stashed changes
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Author story and Awakening */}
      <section className="relative overflow-hidden border-y border-amber-200/15 bg-[radial-gradient(ellipse_at_15%_50%,rgba(242,178,74,.10),transparent_38%),linear-gradient(145deg,#102a43,#071b33)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-amber-300">
                The story behind the books
              </p>

              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                A Journey That Began With a Different Perspective
              </h2>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
                <p>
                  My journey toward understanding life didn&apos;t begin with a
                  book deal, a philosophy, or a carefully constructed plan. It
                  began in a very different place.
                </p>

                <p>
                  I once found myself in prison, serving a seven-year sentence.
                  At that point in my life, I could hardly have imagined the
                  experiences, relationships, and perspectives that would
                  eventually shape the person I would become.
                </p>

                <p>
                  Somewhere along the way, I began to understand that the way
                  we see life influences the way we experience it. A different
                  perspective can create a different understanding, and a
                  different understanding can open the door to an entirely
                  different experience.
                </p>

                <p>
                  That realization became the foundation for my first book,
                  <em> Awakening: A Different Perspective Is a Better Understanding</em>.
                </p>

                <p>
                  Life continued to unfold. My experiences changed, my
                  understanding evolved, and I eventually found myself
                  building a life I once might not have imagined, including
                  marriage.
                </p>

                <p>
                  What began with a change in perspective gradually developed
                  into a deeper exploration of abundance, and ultimately, the
                  discovery of joy.
                </p>

                <p>
                  These three books represent that progression. They are not
                  simply books about life. They are reflections of a journey
                  through life, an ongoing conversation about what it means to
                  understand, experience, and enjoy being alive.
                </p>
              </div>
            </div>

            {/* Original book */}
            <div className="mx-auto w-full max-w-[390px]">
              <div className="rounded-[2rem] border border-amber-200/20 bg-[#071b33]/70 p-6 shadow-2xl shadow-black/30 sm:p-8">
                <div className="flex justify-center">
                  <Image
                    src="/awakening-paperback-mockup.png"
                    alt="Awakening: A Different Perspective Is a Better Understanding by Gary Walker"
                    width={700}
                    height={1050}
                    className="h-auto max-h-[460px] w-auto max-w-full object-contain drop-shadow-2xl"
                    sizes="(max-width: 640px) 80vw, 350px"
                  />
                </div>

                <div className="mt-7 text-center">
                  <p className="text-xs font-bold uppercase tracking-[.25em] text-amber-300">
                    Where the journey began
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-semibold">
                    Awakening
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    A Different Perspective Is a Better Understanding
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-bold text-emerald-200">
                      <Gift className="h-4 w-4" />
                      Complimentary paperback with the box set
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete box set */}
      <section
        id="box-set"
        className="border-y border-amber-200/15 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,178,74,.14),transparent_48%),#0b223b] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-amber-200">
              <Sparkles className="h-4 w-4" />
              The complete collection
            </div>

            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Bring the entire journey home.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Own all three hardcover books together in the{" "}
              <em>Conversations With My Inner Being</em> boxed set—a collection
              that moves through Perspective, Abundance, and Joy.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <PackageCheck className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                <p className="text-slate-200">
                  Three hardcover books in one coordinated collection.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Gift className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                <p className="text-slate-200">
                  A complimentary paperback copy of <em>Awakening</em>{" "}
                  included with every box set.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                <p className="text-slate-200">
                  Free shipping within the United States.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-200/20 bg-[#071b33]/80 p-7 shadow-2xl shadow-black/30 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-amber-300">
              Complete hardcover box set
            </p>

            <div className="mt-5 flex items-end gap-3">
              <p className="font-serif text-5xl font-semibold text-amber-300">
                $69.99
              </p>
              <p className="pb-1 text-sm text-slate-400 line-through">
                $79.99
              </p>
              <span className="mb-1 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
                Launch price
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Introductory pricing · Free U.S. shipping
            </p>

            <div className="my-7 border-t border-white/10" />

            <div className="flex items-start justify-between gap-4 text-sm">
              <span className="text-slate-300">Three hardcover books</span>
              <span className="font-semibold">$80.97 value</span>
            </div>

            <div className="mt-3 flex items-start justify-between gap-4 text-sm">
              <span className="text-slate-300">
                Paperback copy of <em>Awakening</em>
              </span>
              <span className="font-semibold text-emerald-200">FREE</span>
            </div>

            <div className="mt-3 flex items-start justify-between gap-4 text-sm">
              <span className="text-slate-300">U.S. shipping</span>
              <span className="font-semibold text-emerald-200">FREE</span>
            </div>

            <div className="my-7 border-t border-white/10" />

            <PurchaseButton
              product="conversations-with-my-inner-being-box-set"
              configured={Boolean(
                priceIds["conversations-with-my-inner-being-box-set"]
              )}
              label="Get the complete box set — $69.99"
            />

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Secure checkout powered by Stripe. The complimentary paperback
              of <em>Awakening</em> is included in the box set order.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Three books exploring one evolving experience of life.
          </h2>

          <p className="mt-5 text-lg text-amber-200">
            Perspective. Abundance. Joy.
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            By Gary Walker · Awakened Perspective Press
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Awakened Perspective Press. All rights
          reserved.
        </p>

        <Link
          href="/"
          className="mt-2 inline-block transition hover:text-amber-200"
        >
          Awakened Perspective Press
        </Link>
      </footer>
    </main>
  );
}