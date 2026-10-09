"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductImage from "@/components/ProductImage";

type Merchant = {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  affiliateUrl: string;
};

type Product = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  price: string;
  rating: number;
  badge: string;
  icon?: string;
  image: string;
  description: string;
  features: string[];
  merchants: Merchant[];
};

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:5000/api/products/${encodeURIComponent(slug)}`
        );

        if (response.status === 404) {
          setProduct(null);
          return;
        }

        if (!response.ok) {
          throw new Error("Unable to fetch product.");
        }

        const data = await response.json();

        if (!data.success || !data.product) {
          throw new Error("Invalid response from backend.");
        }

        setProduct(data.product);
      } catch (err) {
        console.error("Product details error:", err);
        setError("Product load nahi ho paaya. Backend server check karo.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <p className="text-slate-600">Loading product details...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4">
        <p className="text-center text-red-600">{error}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-orange-500"
        >
          Try Again
        </button>
        <Link href="/products" className="text-sm font-bold text-orange-600">
          ← Back to Products
        </Link>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4">
        <h1 className="text-2xl font-black text-slate-900">
          Product not found
        </h1>
        <Link
          href="/products"
          className="font-bold text-orange-600 hover:text-orange-700"
        >
          ← Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-8 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
            <span className="absolute left-5 top-5 z-10 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
              {product.badge}
            </span>

            <ProductImage
              src={product.image}
              alt={product.name}
              fallback={product.icon || "🛍️"}
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-black text-slate-900">
                {product.price}
              </span>
              <span className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-semibold text-yellow-700">
                ⭐ {product.rating}
              </span>
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-black text-slate-900">
                Key Features
              </h2>

              <ul className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-0.5 font-bold text-orange-500">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-black text-slate-900">
                Check Price On
              </h2>

              <div className="mt-4 space-y-3">
                {product.merchants.length > 0 ? (
                  product.merchants.map((merchant) => (
                    <div
                      key={merchant.name}
                      className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-orange-200 hover:shadow-sm"
                    >
                      <div>
                        <p className="font-bold text-slate-900">
                          {merchant.name}
                        </p>

                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold text-slate-700">
                            {merchant.price}
                          </p>

                          {merchant.originalPrice && (
                            <p className="text-xs text-slate-400 line-through">
                              {merchant.originalPrice}
                            </p>
                          )}

                          {merchant.discount && (
                            <span className="text-xs font-bold text-green-600">
                              {merchant.discount}
                            </span>
                          )}
                        </div>
                      </div>

                      {merchant.affiliateUrl ? (
                        <a
                          href={merchant.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="shrink-0 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-500"
                        >
                          Check Deal →
                        </a>
                      ) : (
                        <span className="shrink-0 rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-400">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="rounded-xl bg-slate-100 p-4 text-sm text-slate-500">
                    Deals will be available soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-black text-slate-900">
            About this product
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            DealDuniya helps you discover useful everyday products and compare
            available deals from different online stores. Prices and
            availability may vary between merchants.
          </p>
        </div>
      </div>
    </main>
  );
}