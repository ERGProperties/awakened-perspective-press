"use client";

import { useState } from "react";
import { Download } from "lucide-react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  async function startCheckout() {
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      window.location.assign(data.url);
    } catch (error) {
      console.error("Checkout could not start:", error);
      setLoading(false);
      alert("Checkout is temporarily unavailable. Please try again.");
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
      {loading ? "Opening secure checkout..." : "Get the Instant eBook — $7.99"}
    </button>
  );
}