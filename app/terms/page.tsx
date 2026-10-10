import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Awakened Perspective Press",
  description:
    "Review the terms governing purchases and use of Awakened Perspective Press products and services.",
  alternates: {
    canonical: "https://awakenedperspectivepress.com/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#071b33] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-5 py-6 sm:px-8">
          <Link href="/" className="font-serif text-2xl font-bold">
            Awakened Perspective Press
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
          Terms and conditions
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-5 text-sm text-slate-400">
          Effective date: October 10, 2026
        </p>

        <div className="mt-10 space-y-8 leading-8 text-slate-300">
          <section>
            <h2 className="font-serif text-2xl text-white">
              1. Agreement
            </h2>
            <p className="mt-3">
              These Terms of Service govern your use of the Awakened
              Perspective Press website and the products and services
              offered through it. By using our website or placing an
              order, you agree to these terms. If you do not agree,
              please do not use the relevant services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              2. Products and Services
            </h2>
            <p className="mt-3">
              Awakened Perspective Press provides books and may offer
              publishing guidance, book preparation, ISBN assistance,
              marketing support, and related services. The specific
              deliverables, pricing, and conditions for each offering
              will be described on the applicable product page,
              checkout page, or written agreement.
            </p>
            <p className="mt-3">
              Product descriptions and availability may change. We
              will make reasonable efforts to describe our offerings
              accurately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              3. Digital eBook Purchases and Delivery
            </h2>
            <p className="mt-3">
              When you purchase a digital eBook, you authorize the
              payment shown at checkout. After payment is successfully
              confirmed, we intend to provide access to the purchased
              file through the delivery method stated at checkout,
              which may include a download page and an email delivery
              link.
            </p>
            <p className="mt-3">
              You are responsible for providing a valid email address
              and using a compatible device and application to open
              the supplied file. If you do not receive your purchase,
              contact us for assistance.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              4. Pricing and Payment
            </h2>
            <p className="mt-3">
              Prices and applicable charges are displayed at checkout.
              Payments are processed by a third-party payment provider.
              Your order may be subject to applicable taxes, which
              will be shown or handled as required by law. We do not
              store complete payment card details on our own servers.
            </p>
            <p className="mt-3">
              An order is not considered successfully paid until the
              payment provider confirms the transaction.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              5. Refunds and Cancellations
            </h2>
            <p className="mt-3">
              If you experience a duplicate charge, an incorrect
              transaction, or a delivery problem, please contact us
              so we can investigate and address the issue.
            </p>
            <p className="mt-3">
              Refund eligibility depends on the product purchased,
              the circumstances, and applicable law. Nothing in these
              terms limits any consumer rights that cannot lawfully
              be excluded. Any additional refund conditions presented
              on the applicable checkout or product page also apply.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              6. Permitted Use and Intellectual Property
            </h2>
            <p className="mt-3">
              Unless otherwise stated in a separate written agreement,
              books, text, artwork, branding, and other materials we
              provide are protected by applicable intellectual
              property laws. A digital purchase grants you a personal,
              non-exclusive, non-transferable license to access and
              read the purchased eBook.
            </p>
            <p className="mt-3">
              You may not redistribute, resell, publicly share, or
              commercially exploit purchased digital files without
              permission, except where permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              7. Publishing Services
            </h2>
            <p className="mt-3">
              Any publishing, ISBN, marketing, or promotional services
              are subject to the specific scope and terms agreed upon
              for that service. No particular sales volume, revenue,
              publicity, distribution, or publishing outcome is
              guaranteed unless expressly stated in a signed written
              agreement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              8. Website Availability
            </h2>
            <p className="mt-3">
              We may update, suspend, or discontinue parts of the
              website or our offerings. We make reasonable efforts
              to maintain availability but cannot guarantee
              uninterrupted or error-free operation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the extent permitted by applicable law, Awakened
              Perspective Press will not be liable for indirect,
              incidental, special, or consequential losses arising
              from use of the website or products. Nothing in these
              terms excludes or limits liability that cannot
              lawfully be excluded or limited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              10. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these terms from time to time. Updated
              terms will be posted on this page with a revised
              effective date. Changes will not override rights that
              applicable law requires us to preserve.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              11. Contact
            </h2>
            <p className="mt-3">
              For questions about an order, a product, or these terms,
              please visit our{" "}
              <Link
                href="/contact"
                className="text-amber-300 underline underline-offset-4"
              >
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-amber-300">
            Home
          </Link>
          {" · "}
          <Link href="/privacy" className="hover:text-amber-300">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/contact" className="hover:text-amber-300">
            Contact
          </Link>
        </div>
      </article>
    </main>
  );
}