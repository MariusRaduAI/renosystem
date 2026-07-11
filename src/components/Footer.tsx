import Link from "next/link";
import Logo from "./Logo";
import { footer, business, serviceGroups } from "@/content/de";

export default function Footer() {
  const leadServices = serviceGroups.flatMap((group) => group.services).slice(0, 6);

  return (
    <footer className="bg-concrete-950 pt-16 noise-texture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-concrete-100/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <a
            href="#kontakt"
            data-magnetic
            className="group block"
            aria-label="Zum Kontaktformular"
          >
            <span className="font-display block text-[13vw] font-black uppercase leading-[0.85] tracking-tighter text-outline transition-colors group-hover:[-webkit-text-stroke-color:var(--color-wood-500)] sm:text-8xl lg:text-9xl">
              Bauen wir.
            </span>
          </a>
          <a
            href="#kontakt"
            data-magnetic
            className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-sm bg-wood-500 px-7 text-base font-semibold text-concrete-950 transition-colors hover:bg-safety hover:text-concrete-100"
          >
            Jetzt Erstgespräch anfragen →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-sm text-concrete-300">{footer.description}</p>
            {/* TODO: Social-Media-Links (Instagram/Facebook) ergänzen, sobald verfügbar */}
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-concrete-100">
              {footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {leadServices.map((service) => (
                <li key={service.name}>
                  <a href="#leistungen" className="text-sm text-concrete-300 hover:text-concrete-100">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-concrete-100">
              {footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-concrete-300">
              <li>
                <a href={business.phoneHref} className="hover:text-concrete-100">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-concrete-100">
                  {business.email}
                </a>
              </li>
              <li>
                {business.street}, {business.zip} {business.city}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-concrete-100">
              {footer.legalTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-concrete-300 hover:text-concrete-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-concrete-100/10 py-6 text-xs text-concrete-300 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{business.legalForm} · {business.owner}</p>
        </div>
      </div>
    </footer>
  );
}
