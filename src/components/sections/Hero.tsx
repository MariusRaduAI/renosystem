import Image from "next/image";
import Link from "next/link";
import { hero, business, contact } from "@/content/de";
import LeadForm from "@/components/LeadForm";
import { PhoneIcon, ChatIcon } from "@/components/icons/Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-concrete-100">
      <Image
        src="/portfolio/innenausbau-treppe-offener-wohnbereich/after.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_40%]"
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
          <h1 className="max-w-xl text-balance break-words font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-concrete-950 sm:text-6xl lg:text-[3.6rem] animate-fade-up">
            {hero.headline}
          </h1>
          <p
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-concrete-600 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {hero.subline}
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
              <ChatIcon className="h-4 w-4" /> {contact.whatsappCta}
            </a>
            <a
              href={business.phoneHref}
              data-magnetic
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-wood-500 px-6 text-sm font-semibold text-concrete-100 shadow-sm shadow-wood-500/20 transition-colors hover:bg-wood-600"
            >
              <PhoneIcon className="h-4 w-4" /> {business.phoneDisplay}
            </a>
            <Link
              href="/#projekte"
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
          <p className="mt-4 text-center text-xs font-semibold text-concrete-950 lg:text-left">
            {hero.trustSignal}
          </p>
          <p className="mt-1.5 text-center text-xs text-concrete-600 lg:text-left">{contact.regionNote}</p>
        </div>
      </div>
    </section>
  );
}
