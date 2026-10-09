import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500"
        >
          ← Back to Home
        </Link>

        <section className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            About DealDuniya
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
            Smart products. Better deals.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DealDuniya is a product discovery and deal comparison website
            focused on useful everyday products. Our goal is to make online
            shopping easier by helping people discover practical products
            and compare available deals from different online stores.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-3xl">🔎</div>
              <h2 className="mt-4 font-black text-slate-900">
                Discover
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Find useful products for everyday life.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-3xl">⚖️</div>
              <h2 className="mt-4 font-black text-slate-900">
                Compare
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Compare available prices and merchant options.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="text-3xl">🛍️</div>
              <h2 className="mt-4 font-black text-slate-900">
                Shop Smarter
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Make better-informed shopping decisions.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-black text-slate-900">
              What we do
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We curate useful products across categories such as home,
              kitchen, gadgets, work & desk, travel and daily essentials.
              Product information, prices and availability may change over
              time, so we recommend checking the merchant's website before
              making a purchase.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}