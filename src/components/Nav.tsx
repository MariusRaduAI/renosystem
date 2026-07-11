"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { nav, business } from "@/content/de";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = `${pct}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-concrete-100/10 bg-concrete-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" aria-label="RENOSYSTEM Startseite">
          <Logo variant="dark" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-concrete-300 transition-colors hover:text-concrete-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#kontakt"
            data-magnetic
            className="inline-flex items-center rounded-sm bg-wood-500 px-5 py-2.5 text-sm font-semibold text-concrete-950 transition-colors hover:bg-safety hover:text-concrete-100"
          >
            {nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Per WhatsApp schreiben"
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-wood-600 text-lg"
          >
            💬
          </a>
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 bg-concrete-100 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-px w-6 bg-concrete-100 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-6 bg-concrete-100 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-concrete-100/10 bg-concrete-950 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-2 py-3 text-base font-medium text-concrete-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-concrete-100/5" aria-hidden="true">
        <div ref={progressRef} className="h-full w-0 bg-safety transition-[width] duration-100 ease-out" />
      </div>
    </header>
  );
}
