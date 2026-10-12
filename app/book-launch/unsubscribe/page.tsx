type PageProps = {
  searchParams: Promise<{
    email?: string;
    token?: string;
  }>;
};

export default async function UnsubscribePage({
  searchParams,
}: PageProps) {
  const { email = "", token = "" } = await searchParams;

  const validEmail =
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validToken = /^[a-f0-9]{64}$/i.test(token);

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-6 py-20 text-[#243447]">
      <div className="mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm tracking-[0.2em] text-[#9b7b35]">
          AWAKENED PERSPECTIVE PRESS
        </p>

        <h1 className="mb-4 text-3xl font-semibold">
          Email preferences
        </h1>

        {validEmail && validToken ? (
          <>
            <p className="mb-6 leading-7">
              Would you like to unsubscribe from the book launch
              email sequence for <strong>{email}</strong>?
            </p>

            <form action="/api/book-launch/unsubscribe" method="POST">
              <input
                type="hidden"
                name="email"
                value={email}
              />
              <input
                type="hidden"
                name="token"
                value={token}
              />

              <button
                type="submit"
                className="rounded-md bg-[#102a43] px-6 py-3 font-medium text-white hover:bg-[#183b59]"
              >
                Confirm unsubscribe
              </button>
            </form>
          </>
        ) : (
          <p className="leading-7">
            This unsubscribe link is invalid or incomplete. Please
            use the link in one of your book launch emails.
          </p>
        )}
      </div>
    </main>
  );
}