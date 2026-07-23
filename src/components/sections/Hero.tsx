import Image from "next/image";
import Link from "next/link";
import { hero, business, contact } from "@/content/de";
import LeadForm from "@/components/LeadForm";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-concrete-100">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-wood-500/25 via-wood-500/10 to-safety/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-safety/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-8 top-28 hidden h-64 w-52 overflow-hidden rounded-[2rem] shadow-2xl shadow-concrete-950/10 lg:block xl:right-20"
      >
        <Image
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="208px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-600/20 to-transparent" />
      </div>

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
