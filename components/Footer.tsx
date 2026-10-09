import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-black"
            >
              Deal<span className="text-orange-500">Duniya</span>
            </Link>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              Smart products. Better deals. Discover useful everyday
              products and compare available deals from different online
              stores.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-black">
              Explore
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <Link
                href="/"
                className="block transition hover:text-orange-400"
              >
                Home
              </Link>

              <Link
                href="/deals"
                className="block transition hover:text-orange-400"
              >
                Deals
              </Link>

              <Link
                href="/festivals"
                className="block transition hover:text-orange-400"
              >
                Festivals
              </Link>

              <Link
                href="/#categories"
                className="block transition hover:text-orange-400"
              >
                Categories
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-black">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <Link
                href="/about"
                className="block transition hover:text-orange-400"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block transition hover:text-orange-400"
              >
                Contact Us
              </Link>

              <Link
                href="/privacy-policy"
                className="block transition hover:text-orange-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/affiliate-disclosure"
                className="block transition hover:text-orange-400"
              >
                Affiliate Disclosure
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 DealDuniya. All rights reserved.
          </p>

          <p>
            Built for smarter shopping.
          </p>
        </div>

      </div>
    </footer>
  );
}