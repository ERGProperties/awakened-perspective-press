"use client";

import { useState } from "react";
import { Download } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: {
      track?: (
        event: string,
        properties?: Record<string, unknown>
      ) => void;
    };
  }
}

const META_PIXEL_ID = "1057775080418962";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  async function startCheckout() {
    if (loading) return;

    setLoading(true);

    try {
      // Give both tracking scripts a brief opportunity to load.
      let attempts = 0;

      while (
        (
          typeof window.ttq?.track !== "function" ||
          typeof window.fbq !== "function"
        ) &&
        attempts < 10
      ) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        attempts += 1;
      }

      const product = {
        content_name: "Understanding External Reflections eBook",
        content_ids: ["understanding-external-reflections-ebook"],
        content_type: "product",
        contents: [
          {
            content_id: "understanding-external-reflections-ebook",
            content_type: "product",
            content_name: "Understanding External Reflections eBook",
            quantity: 1,
          },
        ],
        value: 7.99,
        currency: "USD",
      };

      // Meta: track checkout initiation for the book-specific Pixel.
      if (typeof window.fbq === "function") {
        window.fbq(
          "trackSingle",
          META_PIXEL_ID,
          "InitiateCheckout",
          product
        );
      } else {
        console.warn(
          "Meta Pixel is not available. Continuing to checkout."
        );
      }

      // TikTok: preserve existing checkout tracking.
      if (typeof window.ttq?.track === "function") {
        window.ttq.track("InitiateCheckout", {
          contents: product.contents,
          value: product.value,
          currency: product.currency,
        });
      } else {
        console.warn(
          "TikTok Pixel is not available. Continuing to checkout."
        );
      }

      // Existing Stripe checkout flow.
      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(
          data.error || "Unable to start checkout."
        );
      }

      window.location.assign(data.url);
    } catch (error) {
      console.error("Checkout could not start:", error);
      setLoading(false);
      alert(
        "Checkout is temporarily unavailable. Please try again."
      );
    }
  }

  return (
    <button
      type="button"
      onClick={startCheckout}
      disabled={loading}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 font-bold text-[#071b33] transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
    >
      <Download className="h-5 w-5" />
      {loading
        ? "Opening secure checkout..."
        : "Get the Instant eBook — $7.99"}
    </button>
  );
}