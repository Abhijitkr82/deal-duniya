import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500"
        >
          ← Back to Home
        </Link>

        <section className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Get in Touch
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Have a question, suggestion, product recommendation or
            partnership inquiry? We would love to hear from you.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="text-3xl">📧</div>

              <h2 className="mt-4 font-black text-slate-900">
                Email
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                For general questions and suggestions.
              </p>

              <a
                href="mailto:hello@dealduniya.in"
                className="mt-4 inline-block font-bold text-orange-500 hover:text-orange-600"
              >
                hello@dealduniya.in
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="text-3xl">🤝</div>

              <h2 className="mt-4 font-black text-slate-900">
                Partnerships
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Interested in working with DealDuniya?
              </p>

              <a
                href="mailto:partnerships@dealduniya.in"
                className="mt-4 inline-block font-bold text-orange-500 hover:text-orange-600"
              >
                partnerships@dealduniya.in
              </a>
            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-orange-50 p-6">
            <h2 className="font-black text-slate-900">
              Product Suggestions
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Know a useful everyday product that should be featured on
              DealDuniya? Send us the details and we may consider adding it
              to our product collection.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}