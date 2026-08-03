import Link from "next/link";
import Logo from "./Logo";
import { footer, business } from "@/content/de";
import { serviceDetails } from "@/content/services";

export default function Footer() {
  const leadServices = serviceDetails.slice(0, 6);

  return (
    <footer className="bg-concrete-100 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-concrete-950/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <Link
            href="/#kontakt"
            data-magnetic
            className="group block"
            aria-label="Zum Kontaktformular"
          >
            <span className="font-display block text-[13vw] font-black uppercase leading-[0.85] tracking-tighter text-transparent transition-colors [-webkit-text-stroke:1.5px_var(--color-concrete-950)] group-hover:[-webkit-text-stroke-color:var(--color-wood-500)] sm:text-8xl lg:text-9xl">
              Wir bauen für Sie.
            </span>
          </Link>
          <Link
            href="/#kontakt"
            data-magnetic
            className="inline-flex min-h-[52px] w-fit shrink-0 self-start items-center justify-center gap-2 rounded-full bg-wood-500 px-7 text-base font-semibold text-concrete-100 transition-colors hover:bg-safety"
          >
            Jetzt Erstgespräch anfragen →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-concrete-600">{footer.description}</p>
            {/* TODO: Social-Media-Links (Instagram/Facebook) ergänzen, sobald verfügbar */}
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-concrete-950">
              {footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {leadServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="text-sm text-concrete-600 hover:text-concrete-950"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/leistungen" className="text-sm font-semibold text-wood-600 hover:text-safety">
                  Alle Leistungen →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-concrete-950">
              {footer.companyTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {footer.companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-concrete-600 hover:text-concrete-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-concrete-950">
              {footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-concrete-600">
              <li>
                <a href={business.phoneHref} className="hover:text-concrete-950">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-concrete-950">
                  {business.email}
                </a>
              </li>
              <li>
                {business.street}, {business.zip} {business.city}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-concrete-950">
              {footer.legalTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-concrete-600 hover:text-concrete-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-concrete-950/10 py-6 text-xs text-concrete-600 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{business.legalForm} · {business.owner}</p>
        </div>
      </div>
    </footer>
  );
}
