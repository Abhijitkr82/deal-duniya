"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  price: string;
  rating: number;
  badge: string;
  image?: string;
  description: string;
};

const festivalMap: Record<
  string,
  {
    name: string;
    icon: string;
    description: string;
    categories: string[];
  }
> = {
  diwali: {
    name: "Diwali",
    icon: "🪔",
    description:
      "Discover useful products for Diwali decoration, kitchen, gifting and everyday festive needs.",
    categories: ["Home", "Kitchen", "Gadgets", "Daily Essentials"],
  },

  "chhath-puja": {
    name: "Chhath Puja",
    icon: "🌞",
    description:
      "Explore practical products and everyday essentials that can be useful during Chhath Puja preparations.",
    categories: ["Kitchen", "Home", "Daily Essentials"],
  },

  "big-billion-days": {
    name: "Big Billion Days",
    icon: "🛍️",
    description:
      "Explore useful products across gadgets, home, kitchen, travel and work setup.",
    categories: ["Gadgets", "Home", "Kitchen", "Work & Desk", "Travel"],
  },
};

export default function FestivalPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const festival = festivalMap[slug];

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products || []);
      } catch {
        setError(
          "Products load nahi ho paaye. Please check whether the backend server is running."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (!festival) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-20 text-center">
        <h1 className="text-3xl font-black text-slate-900">
          Festival not found
        </h1>
        <Link
          href="/festivals"
          className="mt-6 inline-block font-bold text-orange-500"
        >
          ← Back to Festivals
        </Link>
      </main>
    );
  }

  const festivalProducts = products.filter((product) =>
    festival.categories.includes(product.category)
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/festivals"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500"
        >
          ← Back to Festivals
        </Link>

        <section className="overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
          <div className="max-w-3xl">
            <div className="text-6xl">{festival.icon}</div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-orange-400">
              DealDuniya Festival Guide
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              {festival.name} Deals &amp; Picks
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              {festival.description}
            </p>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Recommended Products
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Useful Picks for {festival.name}
            </h2>
          </div>

          {loading && (
            <p className="py-10 text-center text-slate-600">
              Loading products...
            </p>
          )}

          {error && (
            <p className="rounded-2xl bg-white p-8 text-center text-red-600">
              {error}
            </p>
          )}

          {!loading &&
            !error &&
            festivalProducts.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {festivalProducts.map((product) => (
                  <article
                    key={product._id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative flex h-52 items-center justify-center bg-slate-100 text-7xl transition group-hover:bg-orange-50">
                      <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                        {product.badge}
                      </span>

                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain p-4"
                        />
                      ) : (
                        <span>🛍️</span>
                      )}
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-semibold text-orange-500">
                        {product.category}
                      </p>

                      <h3 className="mt-2 font-bold text-slate-900">
                        {product.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-lg font-black text-slate-900">
                          {product.price}
                        </span>

                        <span className="text-sm text-slate-500">
                          ⭐ {product.rating}
                        </span>
                      </div>

                      <Link
                        href={`/products/${product.slug}`}
                        className="mt-4 block w-full rounded-xl bg-slate-950 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-500"
                      >
                        Check Deal →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

          {!loading &&
            !error &&
            festivalProducts.length === 0 && (
              <div className="rounded-3xl bg-white p-10 text-center">
                <p className="text-slate-600">
                  Festival products will be available soon.
                </p>
              </div>
            )}
        </section>

        <section className="mt-12 rounded-3xl bg-orange-500 p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-100">
            Smart Shopping
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Compare before you buy.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-orange-50">
            DealDuniya helps you discover useful products and compare
            available deals from different online stores.
          </p>

          <Link
            href="/deals"
            className="mt-6 inline-block rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Explore All Deals →
          </Link>
        </section>
      </div>
    </main>
  );
}
