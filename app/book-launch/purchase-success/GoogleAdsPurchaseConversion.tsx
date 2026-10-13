"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

type GoogleAdsPurchaseConversionProps = {
  transactionId: string;
  value: number;
  currency: string;
};

export default function GoogleAdsPurchaseConversion({
  transactionId,
  value,
  currency,
}: GoogleAdsPurchaseConversionProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current || typeof window.gtag !== "function") {
      return;
    }

    hasTracked.current = true;

    window.gtag("event", "conversion", {
      send_to: "AW-18497917004/VB9lCLOYgJsdEMygv_RE",
      value,
      currency,
      transaction_id: transactionId,
    });
  }, [transactionId, value, currency]);

  return null;
}