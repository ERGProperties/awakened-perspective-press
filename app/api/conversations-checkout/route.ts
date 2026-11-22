
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PRODUCTS: Record<
  string,
  {
    priceEnv: string;
    label: string;
    amount?: number;
    boxSet?: boolean;
  }
> = {
  // PAPERBACK EDITIONS
  "understanding-external-reflections-paperback": {
    priceEnv: "STRIPE_PRICE_ID_UER_PAPERBACK",
    label: "Understanding External Reflections — Paperback",
  },
  "abundance-abounds-paperback": {
    priceEnv: "STRIPE_PRICE_ID_ABUNDANCE_PAPERBACK",
    label: "Abundance Abounds — Paperback",
  },
  "finding-greatest-joy-paperback": {
    priceEnv: "STRIPE_PRICE_ID_FINDING_JOY_PAPERBACK",
    label: "Finding Greatest Joy — Paperback",
  },

  // HARDCOVER EDITIONS
  "understanding-external-reflections-hardcover": {
    priceEnv: "STRIPE_PRICE_ID_UER_HARDCOVER",
    label: "Understanding External Reflections — Hardcover",
    amount: 2699,
  },
  "abundance-abounds-hardcover": {
    priceEnv: "STRIPE_PRICE_ID_ABUNDANCE_HARDCOVER",
    label: "Abundance Abounds — Hardcover",
    amount: 2699,
  },
  "finding-greatest-joy-hardcover": {
    priceEnv: "STRIPE_PRICE_ID_FINDING_JOY_HARDCOVER",
    label: "Finding Greatest Joy — Hardcover",
    amount: 2699,
  },

  // THREE-BOOK BOX SET
  "conversations-with-my-inner-being-box-set": {
    priceEnv: "STRIPE_PRICE_ID_CONVERSATIONS_BOX_SET",
    label:
      "Conversations With My Inner Being — Three-Book Hardcover Box Set",
    amount: 6999,
    boxSet: true,
  },
};

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!secretKey || !siteUrl) {
      return NextResponse.json(
        { error: "Checkout configuration is incomplete." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const productKey =
      typeof body.product === "string" ? body.product : "";

    const product = PRODUCTS[productKey];

    if (!product) {
      return NextResponse.json(
        { error: "Unknown product." },
        { status: 400 }
      );
    }

    const priceId = process.env[product.priceEnv];

    if (!priceId) {
      console.error(
        `Missing Stripe environment variable: ${product.priceEnv}`
      );

      return NextResponse.json(
        { error: "This edition is not available for purchase yet." },
        { status: 503 }
      );
    }

    const stripe = new Stripe(secretKey);
    const configuredPrice = await stripe.prices.retrieve(priceId);

    // Verify the Stripe Price is active, in USD, and a one-time payment.
    // Existing hardcover and box-set prices retain their amount checks.
    if (
      !configuredPrice.active ||
      configuredPrice.currency !== "usd" ||
      configuredPrice.unit_amount === null ||
      configuredPrice.type !== "one_time" ||
      (product.amount !== undefined &&
        configuredPrice.unit_amount !== product.amount)
    ) {
      console.error(
        "Stripe Price configuration does not match storefront:",
        productKey
      );

      return NextResponse.json(
        {
          error:
            "This edition is temporarily unavailable. Please contact us.",
        },
        { status: 503 }
      );
    }

    const baseUrl = siteUrl.replace(/\/$/, "");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      billing_address_collection: "auto",

      shipping_address_collection: {
        allowed_countries: ["US"],
      },

      // Free U.S. shipping on all paperback orders.
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free U.S. shipping",
          },
        },
      ],

      customer_creation: "always",
      allow_promotion_codes: false,

      success_url:
        `${baseUrl}/conversations-with-my-inner-being/thank-you` +
        `?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url:
        `${baseUrl}/conversations-with-my-inner-being#the-journey`,

      metadata: {
        product: productKey,
        product_name: product.label,
        order_type: "physical_book",
        includes_free_awakening_paperback: product.boxSet
          ? "true"
          : "false",
      },

      payment_intent_data: {
        metadata: {
          product: productKey,
          product_name: product.label,
          order_type: "physical_book",
          includes_free_awakening_paperback: product.boxSet
            ? "true"
            : "false",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(
      "Conversations collection checkout failed:",
      error
    );

    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 }
    );
  }
}