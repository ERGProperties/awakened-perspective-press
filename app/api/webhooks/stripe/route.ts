import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

const publisherEmail = "gary@awakenedperspectivepress.com";

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

type ShippingAddress = {
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
};

type ShippingDetails = {
  name?: string | null;
  address?: ShippingAddress | null;
} | null;

type SessionWithShipping = Stripe.Checkout.Session & {
  collected_information?: {
    shipping_details?: ShippingDetails;
  } | null;
  shipping_details?: ShippingDetails;
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Webhook configuration is incomplete." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      await request.text(),
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error(
      "Stripe signature verification failed:",
      error
    );

    return NextResponse.json(
      { error: "Invalid webhook signature." },
      { status: 400 }
    );
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  try {
    const session = event.data.object as Stripe.Checkout.Session;
    const sessionWithShipping =
      session as SessionWithShipping;

    if (
      session.payment_status !== "paid" ||
      session.mode !== "payment"
    ) {
      return NextResponse.json({ received: true });
    }

    const key = session.metadata?.product;

    const product =
      key && Object.prototype.hasOwnProperty.call(products, key)
        ? products[key as keyof typeof products]
        : undefined;

    const email = session.customer_details?.email;

    if (
      !product ||
      !email ||
      session.amount_total !== product.amount ||
      session.currency !== "usd"
    ) {
      console.error(
        "Order metadata or amount did not validate.",
        session.id
      );

      return NextResponse.json(
        { error: "Purchase verification failed." },
        { status: 400 }
      );
    }

    const lineItems =
      await stripe.checkout.sessions.listLineItems(
        session.id,
        { limit: 10 }
      );

    const validLineItems =
      lineItems.data.length === 1 &&
      lineItems.data[0].price?.id === product.priceId &&
      lineItems.data[0].quantity === 1 &&
      lineItems.data[0].amount_total === product.amount;

    if (!validLineItems) {
      console.error(
        "Stripe line items did not validate.",
        session.id
      );

      return NextResponse.json(
        { error: "Purchase verification failed." },
        { status: 400 }
      );
    }

    // Support both newer and older Stripe shipping field structures.
    const shippingDetails =
      sessionWithShipping.collected_information
        ?.shipping_details ??
      sessionWithShipping.shipping_details ??
      null;

    const shipping =
      shippingDetails?.address ??
      session.customer_details?.address ??
      null;

    const shippingName =
      shippingDetails?.name ??
      session.customer_details?.name ??
      "Not provided";

    const shippingAddress = shipping
      ? [
          shipping.line1,
          shipping.line2,
          shipping.city,
          shipping.state,
          shipping.postal_code,
          shipping.country,
        ]
          .filter(Boolean)
          .join(", ")
      : "No shipping address returned by Stripe";

    const fulfillmentMessage = product.physical
      ? "Printed order. Please forward the shipping details to the printer."
      : "Digital order. Personally prepare and send the current eBook edition.";

    const orderText = [
      "NEW 3X GUARANTEE ORDER",
      "",
      `Product: ${product.name}`,
      `Format: ${product.format}`,
      `Amount paid: $${(product.amount / 100).toFixed(2)} USD`,
      `Customer: ${shippingName}`,
      `Customer email: ${email}`,
      "",
      product.physical
        ? `Shipping address: ${shippingAddress}`
        : "Shipping address: Not applicable",
      "",
      `Fulfillment: ${fulfillmentMessage}`,
      "",
      `Stripe Checkout Session: ${session.id}`,
      "Payment status: Paid",
    ].join("\n");

    const orderNotice = await resend.emails.send(
      {
        from: "Awakened Perspective Press <hello@awakenedperspectivepress.com>",
        to: [publisherEmail],
        replyTo: email,
        subject: `New Order — ${product.name} (${product.format})`,
        text: orderText,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#071b33;line-height:1.6">
            <h1>New 3X Guarantee Order</h1>

            <p><strong>Product:</strong> ${escapeHtml(product.name)}</p>
            <p><strong>Format:</strong> ${escapeHtml(product.format)}</p>
            <p><strong>Amount paid:</strong> $${(product.amount / 100).toFixed(2)} USD</p>
            <p><strong>Customer:</strong> ${escapeHtml(shippingName)}</p>
            <p><strong>Customer email:</strong> ${escapeHtml(email)}</p>

            ${
              product.physical
                ? `
                  <h2>Shipping information</h2>
                  <p>${escapeHtml(shippingAddress)}</p>
                `
                : `
                  <p><strong>Fulfillment:</strong> Personally prepare and send the current eBook edition.</p>
                `
            }

            <p><strong>Stripe session:</strong> ${escapeHtml(session.id)}</p>
            <p><strong>Payment status:</strong> Paid</p>
          </div>
        `,
      },
      {
        idempotencyKey: `publisher-order-${session.id}`,
      }
    );

    if (orderNotice.error) {
      console.error(
        "Publisher order notification failed:",
        orderNotice.error
      );

      throw new Error(
        "Unable to send publisher order notification."
      );
    }

    const customerMessage = product.physical
      ? "Your printed edition order is confirmed. Your shipping details have been received, and your order is being prepared."
      : "Your current eBook edition will be personally prepared and sent to you by the publisher in a separate email.";

    const customerNotice = await resend.emails.send(
      {
        from: "Awakened Perspective Press <hello@awakenedperspectivepress.com>",
        to: [email],
        subject: "Your Awakened Perspective Press Order Is Confirmed",
        text: [
          `Thank you for purchasing ${product.name} — ${product.format}.`,
          "",
          "Your payment has been received and your order is confirmed.",
          "",
          customerMessage,
          "",
          "Thank you,",
          "Awakened Perspective Press",
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#071b33;line-height:1.6">
            <h1>Thank you for your order</h1>

            <p>Your purchase of
              <strong>${escapeHtml(product.name)} — ${escapeHtml(product.format)}</strong>
              is confirmed.
            </p>

            <p>Your payment has been received.</p>

            <p>${escapeHtml(customerMessage)}</p>

            <p>Thank you,<br />Awakened Perspective Press</p>
          </div>
        `,
      },
      {
        idempotencyKey: `customer-order-confirmation-${session.id}`,
      }
    );

    if (customerNotice.error) {
      console.error(
        "Customer confirmation failed:",
        customerNotice.error
      );

      throw new Error(
        "Unable to send customer confirmation."
      );
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(
      "Stripe webhook processing failed:",
      error
    );

    return NextResponse.json(
      { error: "Webhook processing failed." },
      { status: 500 }
    );
  }
}