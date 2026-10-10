import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { createDownloadToken } from "@/lib/download-token";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

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

    if (!email || !priceId || !siteUrl || session.amount_total === null) {
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

    const existing = await prisma.purchase.findUnique({
      where: { stripeSessionId: session.id },
    });

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
        downloadExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
      update: {
        stripePaymentIntentId: paymentIntentId,
        email,
        amountPaid: session.amount_total,
        currency: session.currency,
        paymentStatus: "paid",
        // Keep an existing token and expiry stable across webhook retries.
      },
    });

    if (purchase.emailSentAt) {
      return NextResponse.json({ received: true });
    }

    // For older purchase rows created before token support, don't send
    // a link unless the stored token matches the deterministic token.
    if (!purchase.downloadTokenHash || !purchase.downloadExpiresAt) {
      throw new Error("Purchase download authorization is incomplete.");
    }

    const downloadUrl =
      `${siteUrl}/api/ebook-download?token=${token}`;

    const result = await resend.emails.send({
      from: "Awakened Perspective Press <hello@awakenedperspectivepress.com>",
      to: [email],
      subject: "Your Understanding External Reflections eBook",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#071b33;line-height:1.6">
          <h1>Your eBook is ready</h1>
          <p>Thank you for purchasing <strong>Understanding External Reflections: An Unorthodox Conversation</strong>.</p>
          <p>Use the secure link below to download your EPUB. This link expires in seven days.</p>
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
      throw new Error("Unable to send the eBook delivery email.");
    }

    await prisma.purchase.update({
      where: { stripeSessionId: session.id },
      data: { emailSentAt: new Date() },
    });

    console.info("eBook delivery email sent for session:", session.id);
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook processing failed:", error);
    return NextResponse.json(
      { error: "Webhook processing failed." },
      { status: 500 }
    );
  }
}