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

export default function GoogleAdsLeadConversion() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current || typeof window.gtag !== "function") {
      return;
    }

    hasTracked.current = true;

    window.gtag("event", "conversion", {
      send_to: "AW-18497917004/1Qf4CJWziJsdEMygv_RE",
    });
  }, []);

  return null;
}