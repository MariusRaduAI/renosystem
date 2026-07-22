import Image from "next/image";
import Link from "next/link";
import { hero, business, contact } from "@/content/de";
import LeadForm from "@/components/LeadForm";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950">
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="blob-shape absolute -right-20 top-24 hidden h-[30rem] w-[26rem] overflow-hidden opacity-90 lg:block xl:-right-8"
      >
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="26rem"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-clay-500/15 mix-blend-multiply" />
      </div>
      <div
        aria-hidden="true"
        className="absolute -left-16 top-1/3 h-40 w-40 rounded-full bg-gold/20 blur-3xl lg:h-56 lg:w-56"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 pb-20 pt-40 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-48">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-100/15 bg-ink-100/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-clay-500 animate-fade-up">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="max-w-2xl text-balance font-display text-[2.75rem] font-black leading-[1.02] tracking-tight text-ink-100 sm:text-6xl lg:text-[4.2rem] animate-fade-up">
            {hero.headline}
          </h1>
          <p
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-300 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {hero.subline}
          </p>

          <p
            className="mt-7 flex items-center gap-2 text-sm text-ink-300 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-500" aria-hidden="true" />
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
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-ink-100/20 px-6 text-sm font-semibold text-ink-100 transition-colors hover:border-ink-100/50 hover:bg-ink-100/5"
            >
              💬 {contact.whatsappCta}
            </a>
            <a
              href={business.phoneHref}
              data-magnetic
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-ink-100/20 px-6 text-sm font-semibold text-ink-100 transition-colors hover:border-ink-100/50 hover:bg-ink-100/5"
            >
              📞 {business.phoneDisplay}
            </a>
            <Link
              href="/leistungen"
              className="inline-flex min-h-[48px] items-center gap-1.5 px-2 text-sm font-semibold text-clay-500 hover:text-gold"
            >
              {hero.ctaSecondary} →
            </Link>
          </div>
        </div>

        <div id="kontakt" className="scroll-mt-28 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-clay-500">
            {contact.eyebrow}
          </p>
          <LeadForm />
          <p className="mt-4 text-center text-xs text-ink-300 lg:text-left">{contact.regionNote}</p>
        </div>
      </div>
    </section>
  );
}
