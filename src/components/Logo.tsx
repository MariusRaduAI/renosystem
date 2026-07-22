import clsx from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

// Nachgebaut aus der gelieferten Logo-Vorschau: "reno" in Markenblau,
// "system" in Markengrün, verbunden durch ein zweigeteiltes Dach-Icon
// als Sinnbild für Haus + Aufbau.
// TODO: Icon-Pfade durch offizielle Vektordatei ersetzen, sobald verfügbar.
export default function Logo({ variant = "dark", showTagline = false, className }: LogoProps) {
  const subColor = variant === "dark" ? "text-concrete-300" : "text-concrete-600";

  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logoRoofGrad" x1="6" y1="34" x2="54" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--color-wood-500)" />
            <stop offset="1" stopColor="var(--color-safety)" />
          </linearGradient>
        </defs>
        <path
          d="M34 8L54 32H45V32H23V32H14L34 8Z"
          stroke="url(#logoRoofGrad)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M20 16L34 32H6L20 16Z" fill="url(#logoRoofGrad)" />
      </svg>
      <div className="leading-none">
        <div className="whitespace-nowrap font-display text-base font-extrabold lowercase tracking-tight sm:text-lg">
          <span className="text-wood-500">reno</span>
          <span className="text-safety">system</span>
        </div>
        {showTagline && (
          <div className={clsx("mt-1 text-xs normal-case", subColor)}>
            Ihr Partner für komplette Renovierungen
          </div>
        )}
      </div>
    </div>
  );
}
