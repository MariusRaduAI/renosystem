import { trustBar } from "@/content/de";

export default function TrustBar() {
  const items = [...trustBar, ...trustBar];

  return (
    <section className="relative overflow-hidden border-y border-concrete-950/8 bg-concrete-100">
      <div className="h-1.5 w-full stripe-safety opacity-90" aria-hidden="true" />
      <div className="group flex overflow-hidden py-6">
        <div className="flex shrink-0 animate-marquee-slow items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <div key={`${item.label}-${i}`} className="flex shrink-0 items-center gap-3 whitespace-nowrap">
              <span className="font-display text-sm font-bold uppercase tracking-wide text-concrete-950">
                {item.label}
              </span>
              <span className="text-xs text-concrete-600">{item.detail}</span>
              <span className="ml-9 h-1 w-1 rounded-full bg-wood-500" aria-hidden="true" />
            </div>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee-slow items-center gap-12 pr-12 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <div key={`dup-${item.label}-${i}`} className="flex shrink-0 items-center gap-3 whitespace-nowrap">
              <span className="font-display text-sm font-bold uppercase tracking-wide text-concrete-950">
                {item.label}
              </span>
              <span className="text-xs text-concrete-600">{item.detail}</span>
              <span className="ml-9 h-1 w-1 rounded-full bg-wood-500" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
      <div className="h-1.5 w-full stripe-safety opacity-90" aria-hidden="true" />
    </section>
  );
}
