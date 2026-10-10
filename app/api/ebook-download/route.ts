import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "@/lib/prisma";
import { hashDownloadToken } from "@/lib/download-token";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: Request) {
  try {
    const token = new URL(request.url).searchParams.get("token");

    if (!token || !/^[a-f0-9]{64}$/i.test(token)) {
      return new NextResponse("Invalid or expired download link.", {
        status: 404,
      });
    }

    const purchase = await prisma.purchase.findUnique({
      where: {
        downloadTokenHash: hashDownloadToken(token),
      },
    });

    if (
      !purchase ||
      purchase.paymentStatus !== "paid" ||
      !purchase.downloadExpiresAt ||
      purchase.downloadExpiresAt <= new Date()
    ) {
      return new NextResponse("Invalid or expired download link.", {
        status: 404,
      });
    }

    const publicId = process.env.CLOUDINARY_EBOOK_PUBLIC_ID;

    if (!publicId) {
      console.error("Cloudinary EPUB public ID is not configured.");

      return new NextResponse("Download temporarily unavailable.", {
        status: 503,
      });
    }

    const downloadUrl = cloudinary.utils.private_download_url(
      publicId,
      "epub",
      {
        resource_type: "raw",
        type: "upload",
        expires_at: Math.floor(Date.now() / 1000) + 60,
        attachment: true,
      }
    );

    const upstream = await fetch(downloadUrl, {
      cache: "no-store",
      redirect: "follow",
    });

    if (!upstream.ok || !upstream.body) {
      console.error(
        "Cloudinary EPUB retrieval failed:",
        upstream.status
      );

      return new NextResponse("Download temporarily unavailable.", {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
        },
      });
    }

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "Content-Type": "application/epub+zip",
        "Content-Disposition":
          'attachment; filename="Understanding-External-Reflections.epub"',
        "Cache-Control": "private, no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Secure EPUB delivery failed:", error);

    return new NextResponse("Download temporarily unavailable.", {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
}