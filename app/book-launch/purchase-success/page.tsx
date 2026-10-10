import Link from "next/link";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function PurchaseSuccessPage({
  searchParams,
}: PageProps) {
  const { session_id: sessionId } = await searchParams;

  let paid = false;
  let email: string | null = null;

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const session = await stripe.checkout.sessions.retrieve(sessionId);

      paid =
        session.payment_status === "paid" &&
        session.mode === "payment" &&
        session.metadata?.product ===
          "understanding-external-reflections-ebook";

      if (paid) {
        email = session.customer_details?.email ?? null;
      }
    } catch (error) {
      console.error("Unable to verify purchase success page:", error);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-6 py-16 text-white">
      <section className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900 p-8 text-center shadow-2xl sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
          Awakened Perspective Press
        </p>

        {paid ? (
          <>
            <h1 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">
              Your next chapter starts now.
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              Thank you for purchasing{" "}
              <em>Understanding External Reflections: An Unorthodox Conversation</em>.
            </p>

            <p className="mt-4 leading-7 text-stone-300">
              Your purchase has been confirmed.
              {email
                ? ` A download email will be sent to ${email} once delivery is ready.`
                : " Your delivery email will be sent once delivery is ready."}
            </p>

            <p className="mt-6 text-sm leading-6 text-stone-400">
              If you do not receive your email, please contact us for assistance.
            </p>
          </>
        ) : (
          <>
            <h1 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">
              We couldn&apos;t verify your purchase yet.
            </h1>

            <p className="mt-6 leading-7 text-stone-300">
              Your payment may still be processing. Please check your email for
              confirmation before trying again.
            </p>
          </>
        )}

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex rounded-full bg-amber-300 px-7 py-3 font-bold text-stone-950 transition hover:bg-amber-200"
          >
            Return to Awakened Perspective Press
          </Link>
        </div>
      </section>
    </main>
  );
}