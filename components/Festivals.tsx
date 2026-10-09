const festivals = [
  {
    title: "Diwali Deals",
    icon: "🪔",
    description:
      "Festive lights, home decor, kitchen essentials and useful gifts.",
  },
  {
    title: "Chhath Puja",
    icon: "🌅",
    description:
      "Useful products for puja preparation, home and festive shopping.",
  },
  {
    title: "Big Billion Days",
    icon: "🛍️",
    description:
      "Discover popular products and smart deals across categories.",
  },
];

export default function Festivals() {
  return (
    <section
      id="festivals"
      className="border-y border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Shop by occasion
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Festival Shopping
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {festivals.map((festival) => (
            <a
              key={festival.title}
              href="#deals"
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-lg"
            >
              <div className="text-5xl">{festival.icon}</div>

              <h3 className="mt-5 text-xl font-black">
                {festival.title}
              </h3>

              <p className="mt-2 leading-6 text-slate-600">
                {festival.description}
              </p>

              <div className="mt-5 font-bold text-orange-500">
                Explore collection →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}