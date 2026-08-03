import Image from "next/image";
import Link from "next/link";
import { hero, business, contact } from "@/content/de";
import LeadForm from "@/components/LeadForm";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-concrete-100">
      <Image
        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-concrete-100 via-concrete-100/92 to-concrete-100/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-concrete-100 via-transparent to-concrete-100/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-40">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-wood-600 animate-fade-up">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-safety" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="max-w-xl text-balance font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-concrete-950 sm:text-6xl lg:text-[3.6rem] animate-fade-up">
            {hero.headline}
          </h1>
          <p
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-concrete-600 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {hero.subline}
          </p>

          <p
            className="mt-7 flex items-center gap-2 text-sm text-concrete-600 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-wood-500" aria-hidden="true" />
            {hero.trustSignal}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-safety px-6 text-sm font-semibold text-concrete-100 shadow-sm shadow-safety/20 transition-colors hover:bg-wood-600"
            >
              💬 {contact.whatsappCta}
            </a>
            <a
              href={business.phoneHref}
              data-magnetic
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-wood-500 px-6 text-sm font-semibold text-concrete-100 shadow-sm shadow-wood-500/20 transition-colors hover:bg-wood-600"
            >
              📞 {business.phoneDisplay}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-concrete-950/15 px-6 text-sm font-semibold text-concrete-950 transition-colors hover:border-wood-500 hover:text-wood-600"
            >
              ✉️ E-Mail schreiben
            </a>
            <Link
              href="/leistungen"
              className="inline-flex min-h-[48px] items-center gap-1.5 px-2 text-sm font-semibold text-wood-600 hover:text-safety"
            >
              {hero.ctaSecondary} →
            </Link>
          </div>
        </div>

        <div id="kontakt" className="scroll-mt-24 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
            {contact.eyebrow}
          </p>
          <LeadForm />
          <p className="mt-4 text-center text-xs text-concrete-600 lg:text-left">{contact.regionNote}</p>
        </div>
      </div>
    </section>
  );
}
