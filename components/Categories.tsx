import Link from "next/link";

const categories = [
  {
    name: "Home",
    slug: "home",
    icon: "🏠",
    count: "120+ products",
  },
  {
    name: "Kitchen",
    slug: "kitchen",
    icon: "🍳",
    count: "85+ products",
  },
  {
    name: "Work & Desk",
    slug: "work-and-desk",
    icon: "💻",
    count: "70+ products",
  },
  {
    name: "Gadgets",
    slug: "gadgets",
    icon: "📱",
    count: "100+ products",
  },
  {
    name: "Travel",
    slug: "travel",
    icon: "✈️",
    count: "55+ products",
  },
  {
    name: "Daily Essentials",
    slug: "daily-essentials",
    icon: "🛒",
    count: "150+ products",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Section Heading */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Popular Categories
          </h2>
        </div>

        <a
          href="#categories"
          className="hidden text-sm font-bold text-orange-500 sm:block"
        >
          View all →
        </a>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition group-hover:bg-orange-50">
              {category.icon}
            </div>

            <h3 className="mt-4 font-bold">{category.name}</h3>

            <p className="mt-1 text-xs text-slate-500">
              {category.count}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}