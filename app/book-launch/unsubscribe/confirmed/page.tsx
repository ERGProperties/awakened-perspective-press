export default function UnsubscribeConfirmedPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] px-6 py-20 text-[#243447]">
      <div className="mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm tracking-[0.2em] text-[#9b7b35]">
          AWAKENED PERSPECTIVE PRESS
        </p>

        <h1 className="mb-4 text-3xl font-semibold">
          You&apos;re unsubscribed
        </h1>

        <p className="leading-7">
          You&apos;ve been removed from the book launch email sequence.
          You won&apos;t receive further messages from this sequence.
        </p>

        <p className="mt-6 leading-7">
          Thank you for your interest in{" "}
          <em>Understanding External Reflections</em>.
        </p>

        <a
          href="/"
          className="mt-6 inline-block text-[#9b7b35] underline"
        >
          Return to Awakened Perspective Press
        </a>
      </div>
    </main>
  );
}