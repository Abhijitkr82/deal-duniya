import Link from "next/link";

const festivals = [
  {
    name: "Diwali",
    slug: "diwali",
    icon: "🪔",
    title: "Diwali Deals",
    description:
      "Useful home, kitchen, lighting and gifting products for the festive season.",
    items: [
      "Home Decoration",
      "Kitchen Essentials",
      "Gifting Ideas",
      "Useful Gadgets",
    ],
  },
  {
    name: "Chhath Puja",
    slug: "chhath-puja",
    icon: "🌞",
    title: "Chhath Puja Picks",
    description:
      "Explore useful products and everyday essentials for Chhath Puja preparations.",
    items: [
      "Puja Essentials",
      "Kitchen Products",
      "Storage & Organization",
      "Daily Essentials",
    ],
  },
  {
    name: "Big Billion Days",
    slug: "big-billion-days",
    icon: "🛍️",
    title: "Big Billion Days",
    description:
      "Discover interesting deals across gadgets, home, kitchen and everyday products.",
    items: [
      "Gadgets",
      "Home Products",
      "Kitchen Deals",
      "Work & Desk",
    ],
  },
];

export default function FestivalsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Seasonal Shopping
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Festival Deals & Picks
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Explore useful products, festive picks and seasonal shopping
            ideas for India's biggest celebrations.
          </p>
        </div>

        {/* Festival Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {festivals.map((festival) => (
            <article
              key={festival.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Festival Header */}
              <div className="bg-slate-950 p-7 text-white">
                <div className="text-6xl">
                  {festival.icon}
                </div>

                <p className="mt-5 text-sm font-bold uppercase tracking-wider text-orange-400">
                  {festival.name}
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {festival.title}
                </h2>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="leading-7 text-slate-600">
                  {festival.description}
                </p>

                <div className="mt-6">
                  <p className="text-sm font-black text-slate-900">
                    Popular Picks
                  </p>

                  <ul className="mt-4 space-y-3">
                    {festival.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <span className="font-bold text-orange-500">
                          ✓
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/festivals/${festival.slug}`}
                  className="mt-7 block w-full rounded-xl bg-slate-950 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-500"
                >
                  Explore Picks →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 rounded-3xl bg-orange-500 p-8 text-white sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-100">
              DealDuniya Festival Guide
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Make your festive shopping smarter.
            </h2>

            <p className="mt-4 leading-7 text-orange-50">
              Find useful products, compare available deals and discover
              practical shopping ideas before you buy.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}