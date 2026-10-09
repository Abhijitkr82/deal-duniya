import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-orange-500"
        >
          ← Back to Home
        </Link>

        <article className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Legal
          </p>

          <h1 className="mt-3 text-4xl font-black text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: October 2026
          </p>

          <div className="mt-10 space-y-8 text-slate-600">

            <section>
              <h2 className="text-xl font-black text-slate-900">
                Information We Collect
              </h2>

              <p className="mt-3 leading-7">
                DealDuniya may collect information that visitors voluntarily
                provide, such as information submitted through contact forms
                or emails.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900">
                How We Use Information
              </h2>

              <p className="mt-3 leading-7">
                Information may be used to respond to inquiries, improve
                website functionality, understand visitor interactions and
                provide a better user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900">
                Cookies and Analytics
              </h2>

              <p className="mt-3 leading-7">
                DealDuniya may use cookies, analytics tools or similar
                technologies in the future to understand website traffic and
                improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900">
                Third-Party Websites
              </h2>

              <p className="mt-3 leading-7">
                Our website may contain links to third-party websites.
                DealDuniya is not responsible for the privacy practices or
                content of those external websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-slate-900">
                Changes to This Policy
              </h2>

              <p className="mt-3 leading-7">
                This Privacy Policy may be updated from time to time as the
                website and its features develop.
              </p>
            </section>

          </div>
        </article>

      </div>
    </main>
  );
}