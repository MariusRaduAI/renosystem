import Link from "next/link";
import { hero, business, contact } from "@/content/de";
import LeadForm from "@/components/LeadForm";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-concrete-950 noise-texture">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-40">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-wood-500 animate-fade-up">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-safety" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="max-w-xl text-balance font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-concrete-100 sm:text-6xl lg:text-[3.6rem] animate-fade-up">
            {hero.headline}
          </h1>
          <p
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-concrete-300 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {hero.subline}
          </p>

          <p
            className="mt-7 flex items-center gap-2 text-sm text-concrete-300 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-wood-500" aria-hidden="true" />
            {hero.trustSignal}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border border-concrete-100/25 px-6 text-sm font-semibold text-concrete-100 transition-colors hover:border-concrete-100/60"
            >
              💬 {contact.whatsappCta}
            </a>
            <a
              href={business.phoneHref}
              data-magnetic
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border border-concrete-100/25 px-6 text-sm font-semibold text-concrete-100 transition-colors hover:border-concrete-100/60"
            >
              📞 {business.phoneDisplay}
            </a>
            <Link
              href="/leistungen"
              className="text-sm font-semibold text-wood-500 underline-offset-4 hover:underline"
            >
              {hero.ctaSecondary} →
            </Link>
          </div>
        </div>

        <div id="kontakt" className="scroll-mt-24 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-wood-500">
            {contact.eyebrow}
          </p>
          <LeadForm />
          <p className="mt-4 text-center text-xs text-concrete-300 lg:text-left">{contact.regionNote}</p>
        </div>
      </div>
    </section>
  );
}
