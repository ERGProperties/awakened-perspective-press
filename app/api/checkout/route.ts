import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const priceId = process.env.STRIPE_PRICE_ID;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!priceId || !siteUrl || !process.env.STRIPE_SECRET_KEY) {
      console.error("Stripe checkout environment variables are missing.");

      return NextResponse.json(
        { error: "Checkout is temporarily unavailable." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      billing_address_collection: "auto",
      customer_creation: "always",
      allow_promotion_codes: false,
      success_url: `${siteUrl}/book-launch/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/book-launch/thank-you`,
      metadata: {
        product: "understanding-external-reflections-ebook",
      },
      payment_intent_data: {
        metadata: {
          product: "understanding-external-reflections-ebook",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);

    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 }
    );
  }
}