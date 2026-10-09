export default function WhyDealDuniya() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-400">
            Why DealDuniya?
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            We help you discover before you buy.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Instead of searching through thousands of products, discover
            useful products, comparisons and shopping ideas in one place.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-5">
            <div className="text-3xl">🔎</div>

            <h3 className="mt-4 font-bold">Discover</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Find useful products for everyday problems.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-5">
            <div className="text-3xl">⚖️</div>

            <h3 className="mt-4 font-bold">Compare</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Compare products and merchants before buying.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-5">
            <div className="text-3xl">💰</div>

            <h3 className="mt-4 font-bold">Save</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Find better deals from available online stores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}