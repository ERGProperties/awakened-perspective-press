import Link from "next/link";
import Stripe from "stripe";

import PurchasePixel from "./PurchasePixel";
import GoogleAdsPurchaseConversion from "./GoogleAdsPurchaseConversion";
import TikTokPurchaseEvent from "./TikTokPurchaseEvent";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

const productNames: Record<
  string,
  {
    name: string;
    format: string;
    digital: boolean;
  }
> = {
  "abundance-ebook": {
    name: "Abundance Abounds",
    format: "eBook",
    digital: true,
  },
  "abundance-paperback": {
    name: "Abundance Abounds",
    format: "Paperback",
    digital: false,
  },
  "abundance-hardcover": {
    name: "Abundance Abounds",
    format: "Hardcover",
    digital: false,
  },
  "reflections-ebook": {
    name: "Understanding External Reflections",
    format: "eBook",
    digital: true,
  },
  "reflections-paperback": {
    name: "Understanding External Reflections",
    format: "Paperback",
    digital: false,
  },
  "reflections-hardcover": {
    name: "Understanding External Reflections",
    format: "Hardcover",
    digital: false,
  },
  "bundle-ebook": {
    name: "Both Books Bundle",
    format: "eBook Bundle",
    digital: true,
  },
  "bundle-paperback": {
    name: "Both Books Bundle",
    format: "Paperback Bundle",
    digital: false,
  },
  "bundle-hardcover": {
    name: "Both Books Bundle",
    format: "Hardcover Bundle",
    digital: false,
  },
};

export default async function PurchaseSuccessPage({
  searchParams,
}: PageProps) {
  const { session_id: sessionId } = await searchParams;

  let paid = false;
  let productName = "";
  let format = "";
  let digital = false;
  let purchaseValue = 0;
  let purchaseCurrency = "USD";

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(
        process.env.STRIPE_SECRET_KEY
      );

      const session =
        await stripe.checkout.sessions.retrieve(sessionId);

      const key = session.metadata?.product ?? "";
      const product = productNames[key];

      paid =
        session.payment_status === "paid" &&
        session.mode === "payment" &&
        Boolean(product);

      if (paid && product) {
        productName = product.name;
        format = product.format;
        digital = product.digital;

        purchaseValue =
          (session.amount_total ?? 0) / 100;

        purchaseCurrency =
          (session.currency ?? "usd").toUpperCase();
      }
    } catch (error) {
      console.error(
        "Unable to verify purchase success page:",
        error
      );
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-6 py-16 text-white">
      {paid && sessionId && purchaseValue > 0 && (
        <>
          <PurchasePixel
            sessionId={sessionId}
            value={purchaseValue}
            currency={purchaseCurrency}
          />

          <GoogleAdsPurchaseConversion
            transactionId={sessionId}
            value={purchaseValue}
            currency={purchaseCurrency}
          />

          <TikTokPurchaseEvent
            sessionId={sessionId}
            value={purchaseValue}
            currency={purchaseCurrency}
          />
        </>
      )}

      <section className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900 p-8 text-center shadow-2xl sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
          Awakened Perspective Press
        </p>

        {paid ? (
          <>
            <h1 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">
              Your order is confirmed.
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              Thank you for purchasing{" "}
              <em>{productName}</em> — {format}.
            </p>

            <p className="mt-4 leading-7 text-stone-300">
              Your payment has been received. We appreciate
              your order and the opportunity to share these
              perspectives with you.
            </p>

            <p className="mt-4 leading-7 text-stone-300">
              {digital
                ? "Your current eBook edition will be personally prepared and sent to you by the publisher in a separate email."
                : "Your printed edition order is confirmed. Your shipping details were collected securely during checkout."}
            </p>

            <p className="mt-6 text-sm leading-6 text-stone-400">
              A confirmation email will be sent to the email
              address provided at checkout.
            </p>
          </>
        ) : (
          <>
            <h1 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">
              We couldn&apos;t verify your purchase yet.
            </h1>

            <p className="mt-6 leading-7 text-stone-300">
              Your payment may still be processing. Please
              check your email for confirmation before trying
              again. If you have already paid, contact
              Awakened Perspective Press for assistance.
            </p>
          </>
        )}

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/20 px-7 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Return to Awakened Perspective Press
          </Link>
        </div>
      </section>
    </main>
  );
}