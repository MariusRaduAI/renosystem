"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export type PortfolioItem = {
  title: string;
  category: string | null;
  imageUrl: string;
  alt: string;
  isPlaceholder: boolean;
};

export default function PortfolioGrid({ items, placeholderNote }: { items: PortfolioItem[]; placeholderNote: string }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
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
      {items.map((item) => (
        <div key={item.title} className="portfolio-card group relative overflow-hidden rounded-sm bg-concrete-900">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={item.imageUrl}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {item.isPlaceholder && (
              <span className="absolute right-2 top-2 rounded-sm bg-concrete-950/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-concrete-300">
                {placeholderNote}
              </span>
            )}
          </div>
          <div className="p-4">
            {item.category && (
              <p className="text-xs font-semibold uppercase tracking-wide text-wood-500">{item.category}</p>
            )}
            <h3 className="mt-1 font-display text-base font-bold text-concrete-100">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
