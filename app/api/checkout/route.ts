import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const products = {
  "abundance-ebook": {
    priceId: "price_1UYkIxBFa98ld2VUPKxrJimI",
    name: "Abundance Abounds",
    format: "eBook",
    amount: 799,
    physical: false,
  },
  "abundance-paperback": {
    priceId: "price_1UYkKiBFa98ld2VUG3Y1tzTe",
    name: "Abundance Abounds",
    format: "Paperback",
    amount: 1799,
    physical: true,
  },
  "abundance-hardcover": {
    priceId: "price_1UYkLgBFa98ld2VUKBHJf2c2",
    name: "Abundance Abounds",
    format: "Hardcover",
    amount: 2699,
    physical: true,
  },
  "reflections-ebook": {
    priceId: "price_1UOv0zBFa98ld2VUE4cYbfLP",
    name: "Understanding External Reflections",
    format: "eBook",
    amount: 799,
    physical: false,
  },
  "reflections-paperback": {
    priceId: "price_1UYkMfBFa98ld2VUUTQTo1tN",
    name: "Understanding External Reflections",
    format: "Paperback",
    amount: 1799,
    physical: true,
  },
  "reflections-hardcover": {
    priceId: "price_1UYkNQBFa98ld2VUw0wDkXqJ",
    name: "Understanding External Reflections",
    format: "Hardcover",
    amount: 2699,
    physical: true,
  },
  "bundle-ebook": {
    priceId: "price_1UYkPQBFa98ld2VUgbusDx3W",
    name: "Both Books Bundle",
    format: "eBook Bundle",
    amount: 1399,
    physical: false,
  },
  "bundle-paperback": {
    priceId: "price_1UYkQLBFa98ld2VUhxE8Hd2L",
    name: "Both Books Bundle",
    format: "Paperback Bundle",
    amount: 3299,
    physical: true,
  },
  "bundle-hardcover": {
    priceId: "price_1UYkRLBFa98ld2VUSwQ32iX5",
    name: "Both Books Bundle",
    format: "Hardcover Bundle",
    amount: 4999,
    physical: true,
  },
} as const;

type ProductKey = keyof typeof products;

function isProductKey(value: unknown): value is ProductKey {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(products, value)
  );
}

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Checkout is temporarily unavailable." },
        { status: 503 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!siteUrl) {
      console.error("NEXT_PUBLIC_SITE_URL is not configured.");

      return NextResponse.json(
        { error: "Checkout is temporarily unavailable." },
        { status: 503 }
      );
    }

    const body: unknown = await request.json();

    const productKey =
      typeof body === "object" &&
      body !== null &&
      "productKey" in body
        ? body.productKey
        : undefined;

    if (!isProductKey(productKey)) {
      return NextResponse.json(
        { error: "Please select a valid book and format." },
        { status: 400 }
      );
    }

    const product = products[productKey];

    const metadata = {
      product: productKey,
      product_name: product.name,
      product_format: product.format,
      physical: product.physical ? "true" : "false",
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],

      billing_address_collection: "auto",

      ...(product.physical
        ? {
            shipping_address_collection: {
              allowed_countries: ["US"],
            },
          }
        : {}),

      customer_creation: "always",
      allow_promotion_codes: false,

      success_url: `${siteUrl}/book-launch/purchase-success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${siteUrl}/3x-guarantee#choose-your-book`,

      metadata,

      payment_intent_data: {
        metadata,
      },
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(
      "Stripe checkout session creation failed:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to start checkout. Please try again.",
      },
      { status: 500 }
    );
  }
}