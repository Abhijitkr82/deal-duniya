import Link from "next/link";

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500"
        >
          ← Back to Home
        </Link>

        <article className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Transparency
          </p>

          <h1 className="mt-3 text-4xl font-black text-slate-900">
            Affiliate Disclosure
          </h1>

          <div className="mt-10 space-y-8 text-slate-600">

            <section>
              <h2 className="text-xl font-black text-slate-900">
                How DealDuniya Works
              </h2>

              <p className="mt-3 leading-7">
                DealDuniya is a product discovery and deal comparison
                website. Some links on this website may be affiliate links.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900">
                Affiliate Links
              </h2>

              <p className="mt-3 leading-7">
                When you click an affiliate link and make a qualifying
                purchase or complete another qualifying action on the
                merchant's website, DealDuniya may receive a commission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900">
                No Extra Cost to You
              </h2>

              <p className="mt-3 leading-7">
                In general, using an affiliate link does not increase the
                price you pay for the product. The merchant determines the
                final price, shipping charges and other applicable fees.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900">
                Price and Availability
              </h2>

              <p className="mt-3 leading-7">
                Product prices, discounts, availability and other information
                may change. Always verify the final details on the merchant's
                website before purchasing.
              </p>
            </section>

            <section className="rounded-2xl bg-orange-50 p-6">
              <h2 className="font-black text-slate-900">
                Our Goal
              </h2>

              <p className="mt-2 leading-7">
                Our goal is to help users discover useful products and make
                informed shopping decisions. Affiliate relationships do not
                guarantee that a product will be suitable for every user.
              </p>
            </section>

          </div>
        </article>

      </div>
    </main>
  );
}