"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ProductImage from "@/components/ProductImage";

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
    originalPrice?: string;
    discount?: string;
    affiliateUrl: string;
  }[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/products"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch products from backend.");
        }

        const data = await response.json();

        if (!data.success || !Array.isArray(data.products)) {
          throw new Error("Invalid response received from backend.");
        }

        setProducts(data.products);
      } catch (err) {
        console.error("Product fetch error:", err);

        setError(
          "Products load nahi ho paaye. Backend server check karke dobara try karo."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(products.map((product) => product.category))),
    ],
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchTerm = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "price-low") {
      result = [...result].sort(
        (a, b) =>
          Number(a.price.replace(/[₹,]/g, "")) -
          Number(b.price.replace(/[₹,]/g, ""))
      );
    }

    if (sortBy === "price-high") {
      result = [...result].sort(
        (a, b) =>
          Number(b.price.replace(/[₹,]/g, "")) -
          Number(a.price.replace(/[₹,]/g, ""))
      );
    }

    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, search, category, sortBy]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Explore Products
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Useful Products for Everyday Life
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Discover practical products for your home, kitchen, work,
            travel and everyday needs.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-slate-900">
            All Products
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {loading ? "Loading products..." : `${filteredProducts.length} products found`}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Search */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Search Products
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-400"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Sort By
              </label>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-400"
              >
                <option value="default">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(search || category !== "All" || sortBy !== "default") && (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-slate-500">
                Active filters:
              </span>

              {search && (
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                  Search: {search}
                </span>
              )}

              {category !== "All" && (
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                  {category}
                </span>
              )}

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setSortBy("default");
                }}
                className="text-xs font-bold text-slate-500 underline transition hover:text-orange-500"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Loading and Error States */}
        {loading ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center text-slate-600">
            Loading products...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-white px-6 py-12 text-center">
            <p className="text-red-600">{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
            >
              Try Again
            </button>
          </div>
        ) : filteredProducts.length > 0 ? (
          /* Product Grid */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Link
                key={product._id}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="relative flex h-52 items-center justify-center bg-slate-100">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    fallback="🛍️"
                  />

                  <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold text-orange-600 shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-orange-500">
                    {product.category}
                  </p>

                  <h3 className="mt-2 line-clamp-2 text-lg font-bold text-slate-900 group-hover:text-orange-500">
                    {product.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-black text-slate-900">
                      {product.price}
                    </span>

                    <span className="flex items-center gap-1 text-sm font-semibold text-slate-700">
                      ⭐ {product.rating}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition group-hover:bg-orange-500">
                    View Product →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* No Products Found */
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="text-5xl">🔎</div>

            <h3 className="mt-4 text-xl font-black text-slate-900">
              No products found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSortBy("default");
              }}
              className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}