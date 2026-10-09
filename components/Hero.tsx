export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        {/* Hero Content */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
            <span>🔥</span>
            Festive Deals 2026
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Find products that{" "}
            <span className="text-orange-500">
              actually make life easier.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover useful products, compare deals and find smart buys for
            your home, work, kitchen and everyday life.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#deals"
              className="rounded-xl bg-orange-500 px-6 py-3.5 text-center font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Explore Deals →
            </a>

            <a
              href="#categories"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-center font-bold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50"
            >
              Browse Categories
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>✓ Curated products</span>
            <span>✓ Useful comparisons</span>
            <span>✓ Multiple stores</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 shadow-2xl sm:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/30 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">
                  Today&apos;s picks
                </span>

                <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  HOT
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5">
                  <div className="text-5xl">🍳</div>

                  <p className="mt-4 font-bold">Kitchen</p>

                  <p className="mt-1 text-sm text-slate-500">
                    Smart essentials
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-500 p-5 text-white">
                  <div className="text-5xl">🪔</div>

                  <p className="mt-4 font-bold">Diwali</p>

                  <p className="mt-1 text-sm text-orange-100">
                    Festive picks
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-800 p-5 text-white">
                  <div className="text-5xl">💻</div>

                  <p className="mt-4 font-bold">Work</p>

                  <p className="mt-1 text-sm text-slate-400">
                    Desk essentials
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <div className="text-5xl">🏠</div>

                  <p className="mt-4 font-bold">Home</p>

                  <p className="mt-1 text-sm text-slate-500">
                    Useful products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}