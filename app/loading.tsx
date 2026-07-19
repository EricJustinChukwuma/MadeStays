export default function Loading() {
  const summaryCards = Array.from(
    { length: 6 },
    (_, index) => `summary-${index}`
  );

  const propertyCards = Array.from(
    { length: 6 },
    (_, index) => `property-${index}`
  );

  return (
    <main
      className="min-h-screen w-full bg-slate-50"
      aria-busy="true"
      aria-label="Loading property dashboard"
    >
      <span className="sr-only">
        Loading property dashboard
      </span>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome section skeleton */}
        <section className="animate-pulse">
          <div className="h-8 w-72 rounded-lg bg-slate-200" />

          <div className="mt-3 h-4 w-full max-w-xl rounded bg-slate-200" />

          <div className="mt-2 h-4 w-96 max-w-full rounded bg-slate-200" />
        </section>

        {/* Portfolio overview skeleton */}
        <section className="animate-pulse">
          <div className="mb-4">
            <div className="h-6 w-48 rounded bg-slate-200" />

            <div className="mt-2 h-4 w-72 max-w-full rounded bg-slate-200" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {summaryCards.map((card) => (
              <article
                key={card}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="h-4 w-24 rounded bg-slate-200" />

                <div className="mt-4 h-8 w-12 rounded bg-slate-200" />

                <div className="mt-4 h-3 w-28 rounded bg-slate-200" />
              </article>
            ))}
          </div>
        </section>

        {/* Filter bar skeleton */}
        <section className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="h-12 w-full rounded-xl bg-slate-200 md:max-w-md" />

            <div className="h-12 w-full rounded-xl bg-slate-200 md:w-48" />
          </div>
        </section>

        {/* Property grid skeleton */}
        <section className="animate-pulse">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="h-6 w-40 rounded bg-slate-200" />

              <div className="mt-2 h-4 w-80 max-w-full rounded bg-slate-200" />
            </div>

            <div className="h-4 w-20 rounded bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {propertyCards.map((card) => (
              <article
                key={card}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Image skeleton */}
                <div className="h-52 w-full bg-slate-200" />

                {/* Card content skeleton */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="h-5 w-3/4 rounded bg-slate-200" />

                      <div className="mt-3 h-4 w-1/2 rounded bg-slate-200" />
                    </div>

                    <div className="h-6 w-24 rounded-full bg-slate-200" />
                  </div>

                  <div className="mt-4 h-4 w-28 rounded bg-slate-200" />

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <div className="h-4 w-36 rounded bg-slate-200" />

                      <div className="h-4 w-10 rounded bg-slate-200" />
                    </div>

                    <div className="mt-2 h-2 w-full rounded-full bg-slate-200" />
                  </div>

                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <div className="h-3 w-24 rounded bg-slate-200" />

                    <div className="mt-2 h-4 w-28 rounded bg-slate-200" />
                  </div>

                  <div className="mt-5 h-11 w-full rounded-xl bg-slate-200" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}