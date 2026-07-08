import { testimonials } from "@/content/de";

export default function Testimonials() {
  return (
    <section className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
            {testimonials.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-concrete-600">{testimonials.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.placeholders.map((item, i) => (
            <div
              key={i}
              className="flex h-48 flex-col items-center justify-center rounded-sm border border-dashed border-concrete-600/30 bg-white/40 p-6 text-center"
            >
              <span className="text-2xl text-concrete-300" aria-hidden="true">
                “ ”
              </span>
              <p className="mt-3 text-sm font-medium text-concrete-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
