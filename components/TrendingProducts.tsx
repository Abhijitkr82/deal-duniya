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
  image: string;
  description: string;
  features: string[];
  merchants: {
    name: string;
    price: string;
    affiliateUrl: string;
  }[];
};

export default function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`
        );


        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        if (data.success && Array.isArray(data.products)) {
          setProducts(data.products.slice(0, 4));
        }
      } catch (error) {
        console.error("Trending products fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Trending Now
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Useful Products
          </h2>
        </div>

        <Link
          href="/products"
          className="hidden text-sm font-bold text-orange-500 sm:block"
        >
          View all →
        </Link>
      </div>

      {loading ? (
        <p className="py-10 text-center text-slate-600">
          Loading trending products...
        </p>
      ) : products.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product._id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-52 items-center justify-center bg-slate-100 text-7xl transition group-hover:bg-orange-50">
                🛍️
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold text-orange-500">
                  {product.category}
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-black">
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
      ) : (
        <p className="py-10 text-center text-slate-600">
          Trending products abhi load nahi ho paaye.
          Products page par check karo.
        </p>
      )}
    </section>
  );
}