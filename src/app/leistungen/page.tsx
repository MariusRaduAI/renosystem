import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCta from "@/components/PageCta";
import { serviceGroups } from "@/content/de";
import { serviceDetails } from "@/content/services";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle Leistungen von RENOSYSTEM ALL-IN-ONE im Überblick: Sanierung & Umbau, Ausführung & Montage, Pflege & Reinigung sowie Beratung & Steuerung — aus einer Hand, mit Festpreis.",
};

export default function LeistungenPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Leistungen"
          headline="14 Leistungen. Vier Bereiche. Ein Ansprechpartner."
          intro="Jede Leistung ist auch einzeln buchbar — der eigentliche Vorteil zeigt sich, wenn Sie mehrere davon aus einer Hand kombinieren, statt sie einzeln zu vergeben."
        />

        <section className="bg-ink-100 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
            {serviceGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <div className="flex flex-col gap-3 border-b border-ink-950/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl font-bold text-clay-500">{group.number}</span>
                    <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                      {group.title}
                    </h2>
                  </div>
                  <p className="max-w-md text-sm text-ink-600">{group.intro}</p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceDetails
                    .filter((s) => s.groupId === group.id)
                    .map((service) => (
                      <Link
                        key={service.slug}
                        href={`/leistungen/${service.slug}`}
                        data-magnetic
                        className="group flex flex-col justify-between rounded-2xl bg-white/60 p-6 shadow-sm ring-1 ring-ink-600/10 transition-colors hover:ring-clay-500/40"
                      >
                        <div>
                          <h3 className="font-display text-lg font-bold text-ink-950">{service.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-ink-600">
                            {service.shortDescription}
                          </p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-600">
                          Details ansehen
                          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <PageCta />
      </main>
      <Footer />
    </>
  );
}
