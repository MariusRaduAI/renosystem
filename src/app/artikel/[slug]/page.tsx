import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCta from "@/components/PageCta";
import { articles, getArticleBySlug } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.relatedSlugs
    .map((relSlug) => getArticleBySlug(relSlug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow={`${article.category} · ${article.publishedDate} · ${article.readTime}`}
          headline={article.title}
          breadcrumbs={[{ label: "Artikel", href: "/artikel" }, { label: article.title }]}
        />

        <article className="bg-concrete-100 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
            {article.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display text-2xl font-bold text-concrete-950 sm:text-3xl">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((paragraph, j) => (
                  <p
                    key={j}
                    className={`text-balance text-base leading-relaxed text-concrete-600 sm:text-lg ${
                      section.heading ? "mt-4" : ""
                    } ${j > 0 ? "mt-4" : ""}`}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-3">
                    {section.list.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 text-wood-600" aria-hidden="true">
                          ✓
                        </span>
                        <span className="text-base leading-relaxed text-concrete-950">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {related.length > 0 && (
              <div className="border-t border-concrete-950/10 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
                  Weiterlesen
                </p>
                <ul className="mt-4 space-y-2">
                  {related.map((rel) => (
                    <li key={rel.slug}>
                      <Link
                        href={`/artikel/${rel.slug}`}
                        className="text-base font-medium text-concrete-950 underline decoration-concrete-600/30 underline-offset-4 hover:decoration-wood-500"
                      >
                        {rel.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>

        <PageCta />
      </main>
      <Footer />
    </>
  );
}
