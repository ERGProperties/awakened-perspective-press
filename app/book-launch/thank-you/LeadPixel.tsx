"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function LeadPixel() {
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq(
        "trackSingle",
        "1057775080418962",
        "Lead"
      );
    }
  }, []);

  return null;
}