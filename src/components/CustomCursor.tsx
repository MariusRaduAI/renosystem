"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

// Bewusst ohne mix-blend-mode: das führte in Safari/macOS bei manchen Nutzern
// dazu, dass der Cursor unsichtbar wurde (bekanntes Rendering-Problem von
// mix-blend-mode auf fixed/transform-animierten Elementen). Stattdessen ein
// eigenständig kontrastierendes Design (Akzentfarbe + Schatten), das auf
// jedem Hintergrund sichtbar bleibt, und eine reine CSS-Transition statt GSAP
// für die Bewegung — unabhängig von jedem Animations-Ticker.
export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover || prefersReducedMotion()) return;

    document.body.classList.add("custom-cursor-active");

    const el = wrapperRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] transition-transform duration-150 ease-out"
    >
      <div className="relative h-7 w-7 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_2px_rgba(14,13,12,0.6)]">
        <span className="absolute inset-0 rounded-full border-[1.5px] border-wood-500" />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wood-500" />
      </div>
    </div>
  );
}
