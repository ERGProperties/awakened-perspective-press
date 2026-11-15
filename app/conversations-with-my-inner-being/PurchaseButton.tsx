"use client";

import { useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

export default function PurchaseButton({
  product,
  configured,
  label,
}: {
  product: string;
  configured: boolean;
  label: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function checkout() {
    if (!configured || loading) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/conversations-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Checkout is temporarily unavailable.");
      }

      window.location.assign(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout.");
      setLoading(false);
    }
  }

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={checkout}
        disabled={!configured || loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-4 text-sm font-bold text-[#071b33] transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:border disabled:border-white/10 disabled:bg-white/10 disabled:text-slate-400"
      >
        {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {loading ? "Opening secure checkout..." : configured ? label : "Purchasing opens soon"}
      </button>
      {error && <p role="alert" className="mt-3 text-center text-xs text-red-300">{error}</p>}
      {!configured && <p className="mt-3 text-center text-xs leading-5 text-slate-400">Ordering will open as soon as the Stripe product and shipping settings are connected.</p>}
    </div>
  );
}
