import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCta from "@/components/PageCta";
import { ratgeberIntro, articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Ratgeber",
  description:
    "Ehrliche Einordnung zu Kosten, Ablauf und Planung Ihrer Sanierung — der Ratgeber von RENOSYSTEM ALL-IN-ONE.",
};

export default function RatgeberPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow={ratgeberIntro.eyebrow} headline={ratgeberIntro.headline} intro={ratgeberIntro.intro} />

        <section className="bg-ink-100 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/ratgeber/${article.slug}`}
                  data-magnetic
                  className="group flex flex-col justify-between rounded-2xl bg-white/60 p-6 shadow-sm ring-1 ring-ink-600/10 transition-colors hover:ring-clay-500/40"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-clay-600">
                      {article.category}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-bold text-ink-950">{article.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">{article.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-xs text-ink-600">
                    <span>{article.publishedDate}</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-clay-600">
                      Lesen
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta />
      </main>
      <Footer />
    </>
  );
}
