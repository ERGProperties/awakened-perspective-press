import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Awakened Perspective Press",
  description:
    "Learn how Awakened Perspective Press collects, uses, and protects personal information.",
  alternates: {
    canonical: "https://awakenedperspectivepress.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
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
          Your information matters
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-5 text-sm text-slate-400">
          Effective date: October 10, 2026
        </p>

        <div className="mt-10 space-y-8 leading-8 text-slate-300">
          <section>
            <h2 className="font-serif text-2xl text-white">
              1. Introduction
            </h2>
            <p className="mt-3">
              Awakened Perspective Press ("we," "us," or "our") respects
              your privacy. This policy explains how we collect, use,
              disclose, and protect personal information when you visit
              our website, contact us, join our book launch list, or
              purchase our products and services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              Depending on how you interact with us, we may collect your
              name, email address, contact information, communications
              you send us, book launch preferences, purchase records,
              and information you voluntarily provide through our forms.
            </p>
            <p className="mt-3">
              Payment information is processed by our payment service
              provider. We do not intend to collect or store complete
              payment card numbers or card security codes on our own
              servers.
            </p>
            <p className="mt-3">
              Our website and service providers may also process
              technical information, such as your IP address, browser
              type, device information, pages visited, and interactions
              with the website, subject to applicable settings and law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              3. How We Use Information
            </h2>
            <p className="mt-3">
              We may use personal information to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Respond to questions and customer support requests.</li>
              <li>Manage book launch registrations and communications.</li>
              <li>Process purchases and deliver digital products.</li>
              <li>Send transaction confirmations and purchase-related messages.</li>
              <li>Operate, maintain, and improve our website and services.</li>
              <li>Prevent fraud, protect security, and meet legal obligations.</li>
              <li>Send promotional communications where permitted by law and applicable consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              4. How Information Is Shared
            </h2>
            <p className="mt-3">
              We may share relevant information with service providers
              that help us operate our website, process payments, send
              emails, provide hosting, measure advertising performance,
              or deliver purchased products. These providers may process
              information according to their own terms and privacy
              policies.
            </p>
            <p className="mt-3">
              We may also disclose information when required by law,
              to protect our rights or users, or in connection with a
              business transfer. We do not sell personal information
              in exchange for money.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              5. Cookies and Advertising Technologies
            </h2>
            <p className="mt-3">
              Our website may use cookies, analytics tools, and
              advertising technologies to understand website activity
              and measure marketing performance. These technologies
              may collect information about your interactions with our
              website, subject to your browser settings, applicable
              consent requirements, and the settings of the services
              we use.
            </p>
            <p className="mt-3">
              You can manage cookies through your browser settings.
              Blocking certain cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              6. Data Security and Retention
            </h2>
            <p className="mt-3">
              We use reasonable measures designed to protect personal
              information. No method of electronic transmission or
              storage is completely secure, and we cannot guarantee
              absolute security. We retain information for as long as
              reasonably necessary for the purposes described in this
              policy, including legal, accounting, and security needs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              7. Your Choices and Rights
            </h2>
            <p className="mt-3">
              Depending on your location and applicable law, you may
              have rights to request access to, correction of, or
              deletion of personal information, or to object to or
              restrict certain processing. You may also unsubscribe
              from promotional emails using the instructions provided
              in those messages. Transactional communications may still
              be necessary to complete a purchase or provide a service.
            </p>
            <p className="mt-3">
              To make a privacy-related request, contact us using the
              information on our contact page.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our website and services are not directed toward children
              under 13, and we do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. Changes will
              be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white">
              10. Contact Us
            </h2>
            <p className="mt-3">
              For questions about this Privacy Policy or your personal
              information, please visit our{" "}
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
          <Link href="/terms" className="hover:text-amber-300">
            Terms of Service
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