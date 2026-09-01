"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  beforeLabel,
  afterLabel,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      data-cursor-label="Ziehen"
      className="group relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-2xl bg-concrete-900"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <Image
        src={afterSrc}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute bottom-3 right-3 z-10 rounded-full bg-concrete-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-concrete-100">
        {afterLabel}
      </span>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={beforeSrc}
          alt=""
          fill
          sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <span className="absolute bottom-3 left-3 z-10 rounded-full bg-concrete-100/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-concrete-950">
          {beforeLabel}
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-concrete-100/90"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-wood-500 text-sm font-bold text-concrete-100 shadow-lg">
          ↔
        </div>
      </div>
    </div>
  );
}
