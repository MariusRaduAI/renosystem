import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import { business, contact } from "@/content/de";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Rufen Sie uns direkt an oder schreiben Sie uns — RENOSYSTEM ALL-IN-ONE, Ihr Ansprechpartner für Sanierung in Bad Rappenau und 60 km Umkreis.",
};

export default function KontaktPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow={contact.eyebrow} headline={contact.headline} intro={contact.intro} />

        <section className="bg-concrete-100 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-wood-500 to-safety p-8 text-center sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-concrete-100/80">
                Der schnellste Weg
              </p>
              <a
                href={business.phoneHref}
                className="mt-4 block font-display text-4xl font-black tracking-tight text-concrete-100 transition-opacity hover:opacity-90 sm:text-6xl"
              >
                {business.phoneDisplay}
              </a>
              <p className="mt-4 text-base text-concrete-100/85">
                Der Inhaber persönlich am Telefon — keine Warteschleife, kein Callcenter.
              </p>
              <a
                href={business.phoneHref}
                className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-concrete-100 px-8 text-base font-semibold text-concrete-950 transition-colors hover:bg-white"
              >
                📞 Jetzt anrufen
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-concrete-950/8 bg-white p-6 transition-colors hover:border-safety/40"
              >
                <span className="text-2xl" aria-hidden="true">
                  💬
                </span>
                <p className="mt-3 font-display text-base font-bold text-concrete-950">WhatsApp</p>
                <p className="mt-1 text-sm text-concrete-600">{business.whatsappDisplay}</p>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="rounded-2xl border border-concrete-950/8 bg-white p-6 transition-colors hover:border-wood-500/40"
              >
                <span className="text-2xl" aria-hidden="true">
                  ✉️
                </span>
                <p className="mt-3 font-display text-base font-bold text-concrete-950">E-Mail</p>
                <p className="mt-1 text-sm text-concrete-600">{business.email}</p>
              </a>

              <div className="rounded-2xl border border-concrete-950/8 bg-white p-6">
                <span className="text-2xl" aria-hidden="true">
                  📍
                </span>
                <p className="mt-3 font-display text-base font-bold text-concrete-950">Einsatzgebiet</p>
                <p className="mt-1 text-sm text-concrete-600">
                  {business.street}, {business.zip} {business.city}
                  <br />
                  {business.region}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="formular" className="bg-concrete-100 pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
                Lieber schriftlich?
              </p>
              <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-concrete-950 sm:text-4xl">
                Schreiben Sie uns Ihr Anliegen.
              </h2>
              <p className="mt-4 text-balance text-base leading-relaxed text-concrete-600">
                {contact.formIntro}
              </p>
            </div>

            <div className="mt-10">
              <LeadForm />
            </div>
            <p className="mt-4 text-center text-xs text-concrete-600">{contact.regionNote}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
