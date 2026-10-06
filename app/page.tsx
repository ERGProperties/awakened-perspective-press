const services = [
  {
    title: "Publishing Guidance",
    text: "Understand your options and choose a publishing path that fits your goals, your book, and your vision.",
  },
  {
    title: "Professional Book Production",
    text: "From manuscript preparation to cover and interior design, we help turn your work into a professional book.",
  },
  {
    title: "Publishing & Distribution",
    text: "Get practical guidance on platforms, distribution, and the steps required to make your book available to readers.",
  },
  {
    title: "Author Growth",
    text: "Your book is only the beginning. We can help you think through your author platform, visibility, and next steps.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#17243a]">
      <header className="border-b border-[#17243a]/10 bg-[#f8f5ef]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c69a45]/60 bg-[#17243a] text-[#e5c57a]">
              <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
                <path d="M7 13.5c7.5-2.5 13.5-.8 17 3v20c-3.5-3.8-9.5-5.5-17-3V13.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M41 13.5c-7.5-2.5-13.5-.8-17 3v20c3.5-3.8 9.5-5.5 17-3V13.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M24 16.5c1.5-5.5 5-9 9.5-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-serif text-xl font-bold tracking-[0.08em]">AWAKENED</div>
              <div className="text-[0.65rem] font-medium tracking-[0.24em] text-[#9a722c]">PERSPECTIVE PRESS</div>
            </div>
          </a>
          <a
            href="mailto:gary@awakenedperspectivepress.com?subject=I%27d%20like%20to%20talk%20about%20my%20book"
            className="rounded-full bg-[#17243a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#263753]"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#e5c57a]/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-28">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#9a722c]">
              Your Story. Your Voice. Your Book.
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              You wrote the story.
              <span className="block text-[#9a722c]">Now let&apos;s bring it to life.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#17243a]/75 sm:text-xl">
              Awakened Perspective Press helps authors navigate the journey from
              manuscript to professionally published book—without losing control
              of the story that made them want to write it in the first place.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:gary@awakenedperspectivepress.com?subject=I%27d%20like%20to%20talk%20about%20my%20book"
                className="rounded-full bg-[#17243a] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-[#17243a]/10 transition hover:-translate-y-0.5 hover:bg-[#263753]"
              >
                Tell Us About Your Book
              </a>
              <a
                href="#approach"
                className="rounded-full border border-[#17243a]/20 px-7 py-4 text-center font-semibold transition hover:border-[#9a722c] hover:bg-white/50"
              >
                How We Work
              </a>
            </div>
            <p className="mt-5 text-sm text-[#17243a]/55">
              No obligation. No pressure. Just a conversation about your book.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#c69a45]/25" />
            <div className="relative rounded-[1.75rem] bg-[#17243a] p-8 text-white shadow-2xl shadow-[#17243a]/20 sm:p-10">
              <div className="mb-12 flex justify-center">
                <svg viewBox="0 0 180 120" className="h-auto w-full max-w-[250px]" fill="none" aria-hidden="true">
                  <path d="M20 68c27-12 51-10 70 5v34c-19-15-43-17-70-5V68Z" fill="#f8f5ef" stroke="#e5c57a" strokeWidth="2"/>
                  <path d="M160 68c-27-12-51-10-70 5v34c19-15 43-17 70-5V68Z" fill="#f8f5ef" stroke="#e5c57a" strokeWidth="2"/>
                  <path d="M90 73C79 47 65 28 43 17" stroke="#e5c57a" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M90 73c11-26 25-45 47-56" stroke="#e5c57a" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="90" cy="72" r="7" fill="#e5c57a"/>
                  <path d="M90 62V20" stroke="#e5c57a" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-center font-serif text-3xl leading-tight">
                A different kind of publishing experience.
              </p>
              <p className="mt-5 text-center leading-7 text-white/70">
                Professional guidance. Your voice. Your ownership. A partner who
                cares about what happens after the manuscript is finished.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-[#17243a]/10 bg-white/55">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a722c]">Our approach</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Publishing shouldn&apos;t feel like handing your story to a stranger.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#17243a]/70">
              We believe authors should understand their options, remain involved
              in the decisions that matter, and have someone they can actually
              talk to when they don&apos;t know what comes next.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#17243a]/10 bg-[#17243a]/10 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="bg-[#f8f5ef] p-8 sm:p-10">
                <div className="mb-5 h-1 w-12 bg-[#c69a45]" />
                <h3 className="font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#17243a]/65">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a722c]">Start with a conversation</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              You don&apos;t have to know what you need yet.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#17243a]/70">
              Maybe your manuscript is finished. Maybe you&apos;re still writing.
              Maybe you published years ago and want to figure out what comes
              next. Wherever you are, start by telling us about your book.
            </p>
            <a
              href="mailto:gary@awakenedperspectivepress.com?subject=I%27d%20like%20to%20talk%20about%20my%20book"
              className="mt-7 inline-flex rounded-full bg-[#9a722c] px-7 py-4 font-semibold text-white transition hover:bg-[#7f5d24]"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#17243a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10 lg:py-24">
          <p className="font-serif text-3xl sm:text-4xl">Your story deserves to be heard.</p>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
            Tell us where you are in your journey. We&apos;ll talk about where you
            want to go.
          </p>
          <a
            href="mailto:gary@awakenedperspectivepress.com?subject=I%27d%20like%20to%20talk%20about%20my%20book"
            className="mt-8 inline-flex rounded-full bg-[#e5c57a] px-8 py-4 font-semibold text-[#17243a] transition hover:bg-[#f0d898]"
          >
            Let&apos;s Talk About Your Book
          </a>
        </div>
      </section>

      <footer className="bg-[#101a2b] px-6 py-8 text-white/55 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Awakened Perspective Press</p>
          <p>Your Story. Your Voice. Your Book.</p>
        </div>
      </footer>
    </main>
  );
}
