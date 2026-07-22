import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCta from "@/components/PageCta";
import { process, processSection } from "@/content/de";
import { serviceDetails, getServiceBySlug } from "@/content/services";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = service.relatedSlugs
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Leistungen"
          headline={service.name}
          intro={service.heroIntro}
          breadcrumbs={[{ label: "Leistungen", href: "/leistungen" }, { label: service.name }]}
        />

        <section className="bg-ink-100 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_22rem] lg:gap-16 lg:px-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                Ihre Vorteile im Detail
              </h2>
              <ul className="mt-6 space-y-4">
                {service.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 border-b border-ink-950/10 pb-4">
                    <span className="mt-1 text-clay-600" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-base leading-relaxed text-ink-950">{point}</span>
                  </li>
                ))}
              </ul>

              {service.faq.length > 0 && (
                <div className="mt-14">
                  <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                    Fragen zu {service.name}
                  </h2>
                  <div className="mt-6 space-y-8">
                    {service.faq.map((item) => (
                      <div key={item.question}>
                        <h3 className="font-display text-base font-bold text-ink-950">
                          {item.question}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-ink-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-8">
              <div className="rounded-[1.75rem] bg-ink-950 p-6 noise-texture">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-500">
                  Ideal für
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{service.idealFor}</p>
              </div>

              <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-ink-600/10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
                  {processSection.eyebrow}
                </p>
                <ol className="mt-4 space-y-3">
                  {process.map((step) => (
                    <li key={step.number} className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-bold text-clay-500">{step.number}</span>
                      <span className="text-sm font-medium text-ink-950">{step.title}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {related.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
                    Verwandte Leistungen
                  </p>
                  <ul className="mt-4 space-y-2">
                    {related.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          href={`/leistungen/${rel.slug}`}
                          className="text-sm font-medium text-ink-950 underline decoration-ink-600/30 underline-offset-4 hover:decoration-clay-500"
                        >
                          {rel.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>

        <PageCta
          headline={`Bereit für Ihre ${service.name}?`}
          intro="Erzählen Sie uns kurz von Ihrem Vorhaben — der Rest läuft in einem klaren, verbindlichen Ablauf."
        />
      </main>
      <Footer />
    </>
  );
}
