"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export type PortfolioItem = {
  title: string;
  category: string | null;
  beforeImageUrl: string;
  afterImageUrl: string;
  alt: string;
  isPlaceholder: boolean;
};

export default function PortfolioGrid({
  items,
  placeholderNote,
  beforeLabel,
  afterLabel,
  dragHint,
}: {
  items: PortfolioItem[];
  placeholderNote: string;
  beforeLabel: string;
  afterLabel: string;
  dragHint: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="portfolio-card group rounded-3xl border border-concrete-950/8 bg-white p-3 shadow-sm shadow-concrete-950/5 transition-shadow hover:shadow-lg hover:shadow-concrete-950/10 sm:p-4"
        >
          <div className="relative">
            <BeforeAfterSlider
              beforeSrc={item.beforeImageUrl}
              afterSrc={item.afterImageUrl}
              alt={item.alt}
              beforeLabel={beforeLabel}
              afterLabel={afterLabel}
            />
            {item.isPlaceholder && (
              <span className="absolute right-2 top-2 z-10 rounded-full bg-concrete-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-concrete-300">
                {placeholderNote}
              </span>
            )}
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-3 px-1">
            <div>
              {item.category && (
                <p className="text-xs font-semibold uppercase tracking-wide text-wood-500">{item.category}</p>
              )}
              <h3 className="mt-1 font-display text-lg font-bold text-concrete-950">{item.title}</h3>
            </div>
            <span className="hidden shrink-0 text-xs text-concrete-600 sm:inline">{dragHint} ↔</span>
          </div>
        </div>
      ))}
    </div>
  );
}
