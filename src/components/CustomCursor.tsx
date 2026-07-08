"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover || prefersReducedMotion()) return;

    setActive(true);
    document.body.classList.add("custom-cursor-active");

    const el = dotRef.current;
    if (!el) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!active) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="2" x2="14" y2="10" stroke="#E8E4DC" strokeWidth="1.5" />
        <line x1="14" y1="18" x2="14" y2="26" stroke="#E8E4DC" strokeWidth="1.5" />
        <line x1="2" y1="14" x2="10" y2="14" stroke="#E8E4DC" strokeWidth="1.5" />
        <line x1="18" y1="14" x2="26" y2="14" stroke="#E8E4DC" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
