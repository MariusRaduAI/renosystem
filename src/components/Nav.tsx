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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-ink-100/10 bg-ink-950/85 pl-5 pr-3 shadow-lg shadow-black/20 backdrop-blur-md sm:pl-6 sm:pr-4">
          <Link href="/" aria-label="RENOSYSTEM Startseite" className="relative z-50">
            <Logo variant="dark" />
          </Link>

          <nav className="hidden items-center gap-1 rounded-full bg-ink-100/5 p-1 md:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-ink-300 transition-colors hover:bg-ink-100/10 hover:text-ink-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#kontakt"
              data-magnetic
              className="inline-flex items-center rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-ink-100 transition-colors hover:bg-gold hover:text-ink-950"
            >
              {nav.cta}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Per WhatsApp schreiben"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-600 text-lg"
            >
              💬
            </a>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full transition-colors active:bg-ink-100/10"
            >
              <span
                className={`h-px w-6 rounded-full bg-ink-100 transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-px w-6 rounded-full bg-ink-100 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-6 rounded-full bg-ink-100 transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        <div className="mx-auto mt-1.5 h-0.5 max-w-7xl overflow-hidden rounded-full bg-ink-950/5" aria-hidden="true">
          <div ref={progressRef} className="h-full w-0 rounded-full bg-gold transition-[width] duration-100 ease-out" />
        </div>
      </header>

      {/* Full-screen mobile menu — a sibling of <header>, not a descendant,
          so it isn't drawn through the header's backdrop-blur compositing
          layer (which otherwise let the page behind it bleed into view). */}
      {open && (
        <div className="fixed inset-0 z-40 bg-ink-950 md:hidden">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-clay-600/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
          />

          <div className="relative flex h-16 items-center justify-between px-4 sm:px-6">
            <Logo variant="dark" />
            <button
              type="button"
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-ink-100 active:bg-ink-100/10"
            >
              ✕
            </button>
          </div>

          <nav className="relative flex h-[calc(100%-4rem)] flex-col justify-center px-8 pb-16">
            <ul className="flex flex-col gap-2">
              {nav.links.map((link, i) => (
                <li key={link.href} className="animate-fade-up" style={{ animationDelay: `${80 + i * 60}ms` }}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-3xl px-5 py-4 font-display text-3xl font-extrabold text-ink-100 transition-colors active:bg-ink-100/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 flex flex-col gap-3 animate-fade-up"
              style={{ animationDelay: `${80 + nav.links.length * 60}ms` }}
            >
              <Link
                href="/#kontakt"
                onClick={() => setOpen(false)}
                className="flex min-h-[56px] items-center justify-center rounded-full bg-clay-500 px-7 text-base font-semibold text-ink-950 transition-colors active:bg-gold"
              >
                {nav.cta}
              </Link>
              <a
                href={business.phoneHref}
                className="flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-ink-100/20 px-7 text-base font-semibold text-ink-100"
              >
                📞 {business.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
