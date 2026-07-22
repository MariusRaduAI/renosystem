import Link from "next/link";
import Logo from "./Logo";
import { footer, business } from "@/content/de";
import { serviceDetails } from "@/content/services";

export default function Footer() {
  const leadServices = serviceDetails.slice(0, 6);

  return (
    <footer className="bg-ink-950 pt-16 noise-texture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-ink-100/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <Link
            href="/#kontakt"
            data-magnetic
            className="group block"
            aria-label="Zum Kontaktformular"
          >
            <span className="font-display block text-[13vw] font-black uppercase leading-[0.85] tracking-tighter text-outline transition-colors group-hover:[-webkit-text-stroke-color:var(--color-clay-500)] sm:text-8xl lg:text-9xl">
              Bauen wir.
            </span>
          </Link>
          <Link
            href="/#kontakt"
            data-magnetic
            className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-clay-500 px-7 text-base font-semibold text-ink-100 transition-colors hover:bg-gold hover:text-ink-950"
          >
            Jetzt Erstgespräch anfragen →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-sm text-ink-300">{footer.description}</p>
            {/* TODO: Social-Media-Links (Instagram/Facebook) ergänzen, sobald verfügbar */}
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink-100">
              {footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {leadServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="text-sm text-ink-300 hover:text-ink-100"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/leistungen" className="text-sm font-semibold text-clay-500 hover:text-clay-600">
                  Alle Leistungen →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink-100">
              {footer.companyTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {footer.companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-300 hover:text-ink-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink-100">
              {footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-300">
              <li>
                <a href={business.phoneHref} className="hover:text-ink-100">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-ink-100">
                  {business.email}
                </a>
              </li>
              <li>
                {business.street}, {business.zip} {business.city}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink-100">
              {footer.legalTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-300 hover:text-ink-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink-100/10 py-6 text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{business.legalForm} · {business.owner}</p>
        </div>
      </div>
    </footer>
  );
}
