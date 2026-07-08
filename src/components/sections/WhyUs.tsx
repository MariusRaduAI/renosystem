import { whyUs } from "@/content/de";

export default function WhyUs() {
  return (
    <section id="warum-wir" className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
              {whyUs.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
              {whyUs.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-concrete-600">{whyUs.body}</p>

            <ul className="mt-8 space-y-3">
              {whyUs.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-concrete-950">
                  <span className="mt-1 text-wood-600" aria-hidden="true">
                    ✓
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {whyUs.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className="blueprint-corners flex items-center gap-6 rounded-sm bg-concrete-950 p-6 noise-texture"
              >
                <span className="font-display text-3xl font-extrabold text-wood-500">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-concrete-100">{tier.name}</h3>
                  <p className="mt-1 text-sm text-concrete-300">{tier.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
