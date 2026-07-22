import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  eyebrow,
  headline,
  intro,
  breadcrumbs,
}: {
  eyebrow: string;
  headline: string;
  intro?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-32 noise-texture sm:pb-20 sm:pt-36">
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-ink-300">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-ink-100">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ink-100">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-clay-500">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-300">{intro}</p>
        )}
      </div>
    </section>
  );
}
