import Link from "next/link";
import { CheckCircle2, PackageCheck } from "lucide-react";

export const metadata = {
  title: "Thank You for Your Order | Awakened Perspective Press",
  robots: { index: false, follow: false },
};

export default function CollectionThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071b33] px-5 py-16 text-white">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#102a43] p-8 text-center shadow-2xl sm:p-12">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-300" />
        <p className="mt-7 text-xs font-bold uppercase tracking-[.3em] text-amber-300">Order confirmation</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold">Thank you for your order.</h1>
        <p className="mt-5 leading-8 text-slate-300">
          Your payment has been submitted to Stripe. A receipt and order details will be sent to the email address used at checkout.
        </p>
        <div className="mt-8 rounded-2xl border border-amber-200/20 bg-[#071b33] p-5 text-left">
          <div className="flex items-start gap-3">
            <PackageCheck className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
            <p className="text-sm leading-7 text-slate-300">
              If you purchased the complete Conversations With My Inner Being box set, your complimentary paperback copy of <em>Awakening</em> is included with that order.
            </p>
          </div>
        </div>
        <Link href="/conversations-with-my-inner-being" className="mt-9 inline-flex rounded-full bg-amber-300 px-7 py-4 font-bold text-[#071b33] transition hover:bg-amber-200">
          Return to the collection
        </Link>
      </div>
    </main>
  );
}
