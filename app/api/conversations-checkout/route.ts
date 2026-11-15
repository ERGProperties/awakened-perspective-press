import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const PRODUCTS: Record<string, { priceEnv: string; label: string; boxSet?: boolean }> = {
  "understanding-external-reflections-hardcover": {
    priceEnv: "STRIPE_PRICE_ID_UER_HARDCOVER",
    label: "Understanding External Reflections — Hardcover",
  },
  "abundance-abounds-hardcover": {
    priceEnv: "STRIPE_PRICE_ID_ABUNDANCE_HARDCOVER",
    label: "Abundance Abounds — Hardcover",
  },
  "finding-greatest-joy-hardcover": {
    priceEnv: "STRIPE_PRICE_ID_FINDING_JOY_HARDCOVER",
    label: "Finding Greatest Joy — Hardcover",
  },
  "conversations-with-my-inner-being-box-set": {
    priceEnv: "STRIPE_PRICE_ID_CONVERSATIONS_BOX_SET",
    label: "Conversations With My Inner Being — Three-Book Hardcover Box Set",
    boxSet: true,
  },
};

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXT_PUBLIC_SITE_URL) {
      return NextResponse.json({ error: "Checkout configuration is incomplete." }, { status: 503 });
    }

    const body = await request.json();
    const productKey = typeof body.product === "string" ? body.product : "";
    const product = PRODUCTS[productKey];

    if (!product) {
      return NextResponse.json({ error: "Unknown product." }, { status: 400 });
    }

    const priceId = process.env[product.priceEnv];
    if (!priceId) {
      return NextResponse.json({ error: "This edition is not available for purchase yet." }, { status: 503 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
    const shippingRate = process.env.STRIPE_SHIPPING_RATE_ID_STANDARD;

    if (!product.boxSet && !shippingRate) {
      return NextResponse.json({ error: "Standard shipping is not configured yet." }, { status: 503 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["US"] },
      shipping_options: product.boxSet
        ? [{
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: 0, currency: "usd" },
              display_name: "Free U.S. shipping",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 5 },
                maximum: { unit: "business_day", value: 10 },
              },
            },
          }]
        : [{ shipping_rate: shippingRate! }],
      customer_creation: "always",
      allow_promotion_codes: false,
      success_url: `${siteUrl}/conversations-with-my-inner-being/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/conversations-with-my-inner-being#individual-books`,
      metadata: {
        product: productKey,
        product_name: product.label,
        includes_free_awakening_paperback: product.boxSet ? "true" : "false",
      },
      payment_intent_data: {
        metadata: {
          product: productKey,
          includes_free_awakening_paperback: product.boxSet ? "true" : "false",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Conversations collection checkout failed:", error);
    return NextResponse.json({ error: "Unable to start checkout. Please try again." }, { status: 500 });
  }
}
