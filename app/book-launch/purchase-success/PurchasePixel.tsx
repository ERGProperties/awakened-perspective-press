"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type PurchasePixelProps = {
  sessionId: string;
  value: number;
  currency: string;
};

export default function PurchasePixel({
  sessionId,
  value,
  currency,
}: PurchasePixelProps) {
  useEffect(() => {
    if (!sessionId || value <= 0) return;

    const storageKey = `meta-purchase-${sessionId}`;
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const firePurchase = () => {
      if (sessionStorage.getItem(storageKey) === "sent") return;

      if (typeof window.fbq === "function") {
        window.fbq(
          "trackSingle",
          "1057775080418962",
          "Purchase",
          { value, currency: currency.toUpperCase() }
        );

        sessionStorage.setItem(storageKey, "sent");
        return;
      }

      attempts += 1;

      if (attempts < 50) {
        timer = setTimeout(firePurchase, 100);
      }
    };

    firePurchase();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [sessionId, value, currency]);

  return null;
}