import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type AdminPageProps = {
  searchParams: Promise<{ q?: string }>;
};

function formatDate(date: Date | null) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(date);
}

export default async function AdminDashboard({
  searchParams,
}: AdminPageProps) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const { q = "" } = await searchParams;
  const search = q.trim().slice(0, 100);

  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setUTCHours(0, 0, 0, 0);

  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setUTCDate(sevenDaysAgo.getUTCDate() - 7);

  const readerFilter = search
    ? {
        OR: [
          { name: { contains: search, mode: "insensitive" as const } },
          { email: { contains: search, mode: "insensitive" as const } },
        ],
      }
    : {};

  const [
    totalReaders,
    newToday,
    newThisWeek,
    latestReader,
    readers,
    sourceCounts,
  ] = await Promise.all([
    prisma.reader.count(),
    prisma.reader.count({
      where: { createdAt: { gte: todayStart } },
    }),
    prisma.reader.count({
      where: { createdAt: { gte: sevenDaysAgo } },
    }),
    prisma.reader.findFirst({
      orderBy: { createdAt: "desc" },
      select: { name: true, email: true, createdAt: true },
    }),
    prisma.reader.findMany({
      where: readerFilter,
      orderBy: { createdAt: "desc" },
      take: 100,
      select: {
        id: true,
        name: true,
        email: true,
        consent: true,
        source: true,
        createdAt: true,
      },
    }),
    prisma.reader.groupBy({
      by: ["source"],
      _count: { _all: true },
      orderBy: { _count: { source: "desc" } },
    }),
  ]);

  return (
    <main className="min-h-screen bg-[#0b1020] px-4 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Awakened Perspective Press
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Book Launch Dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Signed in as {session.email}
            </p>
          </div>

          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-amber-400 hover:text-amber-300"
            >
              Sign Out
            </button>
          </form>
        </header>

        <section
          aria-label="Reader signup statistics"
          className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: "Total Readers", value: totalReaders },
            { label: "New Today (UTC)", value: newToday },
            { label: "Last 7 Days", value: newThisWeek },
            {
              label: "Signup Sources",
              value: sourceCounts.length,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-4xl font-semibold tabular-nums text-amber-300">
                {stat.value.toLocaleString("en-US")}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Latest Signup</h2>

          {latestReader ? (
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">{latestReader.name}</p>
                <p className="text-sm text-slate-400">
                  {latestReader.email}
                </p>
              </div>
              <p className="text-sm text-slate-400">
                {formatDate(latestReader.createdAt)} UTC
              </p>
            </div>
          ) : (
            <p className="mt-4 text-sm text-slate-400">
              No reader signups yet.
            </p>
          )}
        </section>

        <section className="mb-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Signup Sources</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {sourceCounts.length > 0 ? (
              sourceCounts.map((source) => (
                <div
                  key={source.source}
                  className="rounded-xl border border-white/10 px-4 py-3"
                >
                  <p className="text-sm text-slate-400">
                    {source.source}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-amber-300">
                    {source._count._all}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-400">
                No signup sources to display.
              </p>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold">Reader Directory</h2>
              <p className="mt-1 text-sm text-slate-400">
                Showing up to 100 most recent matching readers.
              </p>
            </div>

            <form action="/admin" method="get" className="flex gap-2">
              <input
                type="search"
                name="q"
                defaultValue={search}
                maxLength={100}
                placeholder="Search name or email"
                aria-label="Search readers by name or email"
                className="min-w-0 rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-sm outline-none focus:border-amber-400 sm:w-64"
              />
              <button
                type="submit"
                className="rounded-lg bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Search
              </button>
              {search && (
                <a
                  href="/admin"
                  className="rounded-lg border border-white/15 px-3 py-3 text-sm transition hover:border-amber-400"
                >
                  Clear
                </a>
              )}
            </form>
          </div>

          {readers.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-400">
              No readers matched your search.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="px-3 py-4 font-medium">Reader</th>
                    <th className="px-3 py-4 font-medium">Email</th>
                    <th className="px-3 py-4 font-medium">Source</th>
                    <th className="px-3 py-4 font-medium">Consent</th>
                    <th className="px-3 py-4 font-medium">Signup Date (UTC)</th>
                  </tr>
                </thead>
                <tbody>
                  {readers.map((reader) => (
                    <tr
                      key={reader.id}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="px-3 py-4 font-medium">
                        {reader.name}
                      </td>
                      <td className="px-3 py-4 text-slate-300">
                        {reader.email}
                      </td>
                      <td className="px-3 py-4 text-slate-300">
                        {reader.source}
                      </td>
                      <td className="px-3 py-4">
                        <span
                          className={
                            reader.consent
                              ? "text-emerald-300"
                              : "text-amber-300"
                          }
                        >
                          {reader.consent ? "Granted" : "Not granted"}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-slate-400">
                        {formatDate(reader.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <footer className="mt-8 text-center text-xs text-slate-500">
          Private administrator area · Reader information should be handled
          responsibly.
        </footer>
      </div>
    </main>
  );
}