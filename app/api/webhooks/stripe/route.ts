import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import Stripe from "stripe";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { createDownloadToken } from "@/lib/download-token";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

const publisherEmail = "gary@awakenedperspectivepress.com";
const metaPixelId = "1057775080418962";

function hashEmail(email: string): string {
  return createHash("sha256")
    .update(email.trim().toLowerCase())
    .digest("hex");
}

async function sendMetaPurchaseEvent({
  email,
  sessionId,
  eventTime,
}: {
  email: string;
  sessionId: string;
  eventTime: number;
}): Promise<void> {
  const accessToken = process.env.META_CONVERSIONS_API_TOKEN;

  if (!accessToken) {
    console.error("Meta Conversions API token is not configured.");
    return;
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v26.0/${metaPixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              event_name: "Purchase",
              event_time: eventTime,
              event_id: `purchase_${sessionId}`,
              action_source: "website",
              event_source_url:
                "https://www.awakenedperspectivepress.com/book-launch/purchase-success",
              user_data: {
                em: [hashEmail(email)],
              },
              custom_data: {
                currency: "USD",
                value: 7.99,
                content_name:
                  "Understanding External Reflections: An Unorthodox Conversation",
                content_type: "product",
                content_ids: [
                  "understanding-external-reflections-ebook",
                ],
              },
            },
          ],
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const details = await response.text();

      console.error(
        "Meta Purchase event failed:",
        response.status,
        details
      );

      return;
    }

    const result = await response.json();

    console.info(
      "Meta Purchase event accepted:",
      result.events_received
    );
  } catch (error) {
    // Tracking failures must not interrupt a paid order.
    console.error("Meta Conversions API request failed:", error);
  }
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
    console.error("Stripe signature verification failed:", error);

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

    if (
      session.payment_status !== "paid" ||
      session.mode !== "payment" ||
      session.metadata?.product !==
        "understanding-external-reflections-ebook"
    ) {
      return NextResponse.json({ received: true });
    }

    const email = session.customer_details?.email;
    const priceId = process.env.STRIPE_PRICE_ID;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (
      !email ||
      !priceId ||
      !siteUrl ||
      session.amount_total === null
    ) {
      throw new Error("Missing required checkout details.");
    }

    const lineItems = await stripe.checkout.sessions.listLineItems(
      session.id,
      { limit: 10 }
    );

    const correctItem = lineItems.data.some(
      (item) =>
        item.price?.id === priceId &&
        item.quantity === 1 &&
        item.amount_total === 799
    );

    if (
      !correctItem ||
      session.amount_total !== 799 ||
      session.currency !== "usd"
    ) {
      return NextResponse.json(
        { error: "Purchase verification failed." },
        { status: 400 }
      );
    }

    const { token, tokenHash } = createDownloadToken(session.id);

    const paymentIntentId =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : null;

    const purchase = await prisma.purchase.upsert({
      where: { stripeSessionId: session.id },
      create: {
        stripeSessionId: session.id,
        stripePaymentIntentId: paymentIntentId,
        email,
        amountPaid: session.amount_total,
        currency: session.currency,
        paymentStatus: "paid",
        downloadTokenHash: tokenHash,
        downloadExpiresAt: new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ),
      },
      update: {
        stripePaymentIntentId: paymentIntentId,
        email,
        amountPaid: session.amount_total,
        currency: session.currency,
        paymentStatus: "paid",
      },
    });

    // Send the verified purchase to Meta's Conversions API.
    // The stable event ID helps identify this specific order.
    await sendMetaPurchaseEvent({
      email,
      sessionId: session.id,
      eventTime: event.created,
    });

    // Send the publisher order notification.
    const orderNotice = await resend.emails.send(
      {
        from: "Awakened Perspective Press <hello@awakenedperspectivepress.com>",
        to: [publisherEmail],
        replyTo: email,
        subject: "New eBook Order — Understanding External Reflections",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#071b33;line-height:1.6">
            <h1>New eBook Order</h1>
            <p>A successful payment has been received.</p>
            <p><strong>Book:</strong> Understanding External Reflections: An Unorthodox Conversation</p>
            <p><strong>Amount paid:</strong> $7.99 USD</p>
            <p><strong>Customer email:</strong> ${email}</p>
            <p><strong>Stripe Checkout Session:</strong> ${session.id}</p>
            <p><strong>Payment status:</strong> Paid</p>
            <p>The customer download delivery workflow has been processed separately.</p>
            <p>Awakened Perspective Press</p>
          </div>
        `,
        text: [
          "New eBook Order",
          "",
          "Book: Understanding External Reflections: An Unorthodox Conversation",
          "Amount paid: $7.99 USD",
          `Customer email: ${email}`,
          `Stripe Checkout Session: ${session.id}`,
          "Payment status: Paid",
        ].join("\n"),
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

    console.info(
      "Publisher order notification processed for session:",
      session.id
    );

    // Do not resend the customer delivery email if already sent.
    if (purchase.emailSentAt) {
      return NextResponse.json({ received: true });
    }

    if (
      !purchase.downloadTokenHash ||
      !purchase.downloadExpiresAt
    ) {
      throw new Error(
        "Purchase download authorization is incomplete."
      );
    }

    const downloadUrl =
      `${siteUrl}/api/ebook-download?token=${encodeURIComponent(token)}`;

    const result = await resend.emails.send({
      from: "Awakened Perspective Press <hello@awakenedperspectivepress.com>",
      to: [email],
      subject: "Your Understanding External Reflections eBook",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#071b33;line-height:1.6">
          <h1>Your eBook is ready</h1>
          <p>Thank you for purchasing <strong>Understanding External Reflections: An Unorthodox Conversation</strong>.</p>
          <p>Use the secure link below to download the EPUB. This link expires in seven days.</p>
          <p style="margin:28px 0">
            <a href="${downloadUrl}" style="background:#f2b24a;color:#071b33;padding:14px 22px;text-decoration:none;border-radius:8px;font-weight:bold">
              Download Your eBook
            </a>
          </p>
          <p>If you have trouble downloading your book, reply to this email for assistance.</p>
          <p>Awakened Perspective Press</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend delivery email failed:", result.error);

      throw new Error(
        "Unable to send the eBook delivery email."
      );
    }

    await prisma.purchase.update({
      where: { stripeSessionId: session.id },
      data: { emailSentAt: new Date() },
    });

    console.info(
      "eBook delivery email sent for session:",
      session.id
    );

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook processing failed:", error);

    return NextResponse.json(
      { error: "Webhook processing failed." },
      { status: 500 }
    );
  }
}