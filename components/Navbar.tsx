"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
            Deal<span className="text-orange-500">Duniya</span>
          </div>

          <p className="hidden text-[10px] font-medium text-slate-500 sm:block">
            Smart products. Better deals.
          </p>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mx-auto flex max-w-xl flex-1 items-center"
        >
          <div className="relative w-full">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              🔍
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search useful products..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-400 text-slate-900 focus:ring-2 focus:ring-orange-100"
            />
          </div>
        </form>

        {/* Navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            Products
          </Link>

          <Link
            href="/#categories"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            Categories
          </Link>

          <Link
            href="/deals"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            Deals
          </Link>

          <Link
            href="/festivals"
            className="text-sm font-semibold text-slate-700 transition hover:text-orange-500"
          >
            Festivals
          </Link>
        </nav>
      </div>
    </header>
  );
}