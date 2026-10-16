"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ttq?: {
      track: (
        event: string,
        properties?: Record<string, unknown>
      ) => void;
    };
  }
}

type TikTokPurchaseEventProps = {
  sessionId: string;
  value: number;
  currency: string;
};

export default function TikTokPurchaseEvent({
  sessionId,
  value,
  currency,
}: TikTokPurchaseEventProps) {
  useEffect(() => {
    if (!sessionId || value <= 0) return;

    const storageKey = `tiktok-purchase-${sessionId}`;
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const firePurchase = () => {
      if (cancelled) return;

      try {
        if (sessionStorage.getItem(storageKey) === "sent") {
          return;
        }
      } catch {
        // Continue if session storage is unavailable.
      }

      if (typeof window.ttq?.track === "function") {
        window.ttq.track("Purchase", {
          contents: [
            {
              content_id: "understanding-external-reflections-ebook",
              content_type: "product",
              content_name: "Understanding External Reflections eBook",
              quantity: 1,
            },
          ],
          value,
          currency: currency.toUpperCase(),
        });

        try {
          sessionStorage.setItem(storageKey, "sent");
        } catch {
          // Tracking has fired even if session storage is unavailable.
        }

        return;
      }

      attempts += 1;

      if (attempts < 50) {
        timer = setTimeout(firePurchase, 200);
      } else {
        console.error("TikTok Pixel did not become available for Purchase tracking.");
      }
    };

    firePurchase();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [sessionId, value, currency]);

  return null;
}