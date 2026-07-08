import clsx from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

// Nachgebaut aus der gelieferten Logo-Vorschau (renosystem_logo_preview.png).
// TODO: Icon-Pfade durch offizielle Vektordatei ersetzen, sobald verfügbar.
export default function Logo({ variant = "dark", showTagline = false, className }: LogoProps) {
  const textColor = variant === "dark" ? "text-concrete-100" : "text-concrete-950";
  const subColor = variant === "dark" ? "text-concrete-300" : "text-concrete-600";

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" fill="none" aria-hidden="true">
        <path d="M6 28L18 12L30 28H24V28H12V28H6Z" fill="var(--color-wood-500)" />
        <path
          d="M34 14C34 11.7909 35.7909 10 38 10H50C52.2091 10 54 11.7909 54 14V28H44V18H38V28H34V14Z"
          fill="var(--color-wood-500)"
        />
      </svg>
      <div className="leading-none">
        <div className={clsx("whitespace-nowrap font-display font-extrabold tracking-tight text-base sm:text-lg", textColor)}>
          RENOSYSTEM
          <span className="ml-1.5 hidden text-wood-500 text-[0.65em] font-bold tracking-[0.2em] align-middle sm:inline">
            ALL-IN-ONE
          </span>
        </div>
        {showTagline && (
          <div className={clsx("mt-1 text-xs", subColor)}>Ihr Partner für komplette Renovierungen</div>
        )}
      </div>
    </div>
  );
}
