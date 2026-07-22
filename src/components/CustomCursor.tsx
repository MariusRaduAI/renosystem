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
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover || prefersReducedMotion()) return;

    document.body.classList.add("custom-cursor-active");

    const el = wrapperRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!el || !ring || !label) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);

    // data-magnetic elements: cursor grows + shows a label, and the element
    // itself gets pulled slightly toward the pointer while hovered.
    const magnetTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const cleanups: Array<() => void> = [];

    magnetTargets.forEach((target) => {
      const magneticMove = (e: MouseEvent) => {
        const rect = target.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        target.style.transform = `translate(${relX * 0.25}px, ${relY * 0.3}px)`;
      };
      const onEnter = () => {
        ring.classList.add("scale-[2.4]");
        const text = target.getAttribute("data-cursor-label");
        if (text) {
          label.textContent = text;
          label.classList.remove("opacity-0");
        }
        target.addEventListener("mousemove", magneticMove);
      };
      const onLeave = () => {
        ring.classList.remove("scale-[2.4]");
        label.classList.add("opacity-0");
        target.removeEventListener("mousemove", magneticMove);
        target.style.transform = "";
      };
      target.addEventListener("mouseenter", onEnter);
      target.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        target.removeEventListener("mouseenter", onEnter);
        target.removeEventListener("mouseleave", onLeave);
        target.removeEventListener("mousemove", magneticMove);
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cleanups.forEach((fn) => fn());
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
        <div
          ref={ringRef}
          className="absolute inset-0 rounded-full border-[1.5px] border-clay-500 transition-transform duration-300 ease-out"
        />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay-500" />
        <span
          ref={labelRef}
          className="absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-950 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-100 opacity-0 transition-opacity duration-200"
        />
      </div>
    </div>
  );
}
