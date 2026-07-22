import Link from "next/link";
import { business, contact } from "@/content/de";

export default function PageCta({
  headline,
  intro,
}: {
  headline?: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink-950 py-20 noise-texture sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl">
          {headline ?? contact.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-ink-300">
          {intro ?? contact.intro}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#kontakt"
            data-magnetic
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-clay-500 px-7 text-base font-semibold text-ink-100 transition-colors hover:bg-gold hover:text-ink-950"
          >
            Kostenloses Erstgespräch
          </Link>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-ink-100/25 px-7 text-base font-semibold text-ink-100 transition-colors hover:border-ink-100/60"
          >
            💬 Direkt per WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
