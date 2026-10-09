export default function DealBanner() {
  return (
    <section id="deals" className="px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-orange-500 px-6 py-10 text-white shadow-xl sm:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-100">
              Limited Time
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Big deals are waiting 🔥
            </h2>

            <p className="mt-3 max-w-xl text-orange-50">
              Discover useful products, compare prices and grab the best deals
              before they&apos;re gone.
            </p>
          </div>

          <a
            href="#products"
            className="shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-orange-600 shadow-lg transition hover:bg-orange-50"
          >
            Explore Deals →
          </a>

        </div>
      </div>
    </section>
  );
}