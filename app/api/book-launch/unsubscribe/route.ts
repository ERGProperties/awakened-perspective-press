import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyUnsubscribeToken } from "@/lib/book-launch-sequence";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = new URL(request.url).origin;

  try {
    const formData = await request.formData();
    const email = String(formData.get("email") ?? "")
      .trim()
      .toLowerCase();
    const token = String(formData.get("token") ?? "");

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !verifyUnsubscribeToken(email, token)
    ) {
      return new NextResponse("Invalid unsubscribe link.", {
        status: 400,
      });
    }

    await prisma.reader.updateMany({
      where: { email },
      data: {
        unsubscribedAt: new Date(),
        nextEmailAt: null,
      },
    });

    return NextResponse.redirect(
      new URL("/book-launch/unsubscribe/confirmed", origin),
      303
    );
  } catch (error) {
    console.error("Unsubscribe request failed:", error);

    return new NextResponse(
      "We couldn't process your request right now. Please try again later.",
      { status: 500 }
    );
  }
}