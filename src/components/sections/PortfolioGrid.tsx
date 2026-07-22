"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export type PortfolioItem = {
  title: string;
  category: string | null;
  imageUrl: string;
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
      gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`portfolio-card ${i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
        >
          <div className="relative">
            <BeforeAfterSlider
              src={item.imageUrl}
              alt={item.alt}
              beforeLabel={beforeLabel}
              afterLabel={afterLabel}
            />
            {item.isPlaceholder && (
              <span className="absolute right-2 top-2 z-10 rounded-full bg-ink-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-300">
                {placeholderNote}
              </span>
            )}
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <div>
              {item.category && (
                <p className="text-xs font-semibold uppercase tracking-wide text-clay-500">{item.category}</p>
              )}
              <h3 className="mt-1 font-display text-base font-bold text-ink-100">{item.title}</h3>
            </div>
            <span className="hidden shrink-0 text-xs text-ink-300 sm:inline">{dragHint} →</span>
          </div>
        </div>
      ))}
    </div>
  );
}
