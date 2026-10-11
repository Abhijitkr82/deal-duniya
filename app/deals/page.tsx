"use client";

import Link from "next/link";
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

export default function DealsPage() {
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

  const deals = products.filter(
    (product) =>
      product.badge === "Hot Deal" ||
      product.badge === "Best Value" ||
      product.badge === "Popular" ||
      product.badge === "Trending"
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500"
        >
          ← Back to Home
        </Link>

        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            DealDuniya Deals
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Today&apos;s Best Deals
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Discover useful products with attractive deals and compare
            prices from different online stores.
          </p>
        </div>

        <div className="mb-10 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-400">
              Limited Time Picks
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Useful products. Better prices.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              We are collecting useful everyday products so you can
              discover interesting deals in one place.
            </p>
          </div>
        </div>

        {loading && (
          <p className="py-10 text-center text-slate-600">
            Loading deals...
          </p>
        )}

        {error && (
          <p className="rounded-2xl bg-white p-8 text-center text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && deals.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deals.map((product) => (
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

                  <h2 className="mt-2 font-bold text-slate-900">
                    {product.name}
                  </h2>

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

        {!loading && !error && deals.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <div className="text-6xl">🏷️</div>

            <h2 className="mt-5 text-2xl font-black text-slate-900">
              No deals available yet
            </h2>

            <p className="mt-3 text-slate-600">
              We&apos;re adding more useful products. Check back soon!
            </p>

            <Link
              href="/products"
              className="mt-6 inline-block rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
            >
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
