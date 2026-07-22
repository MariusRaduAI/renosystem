import clsx from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

// Nachgebaut aus der gelieferten Logo-Vorschau: "ren" + Dach-Icon (als
// Ersatz für das "o") + "system", "reno"-Teil in Markenblau, "system" in
// Markengrün — ein zweigeteiltes Dach-/Bergsilhouette-Icon als Sinnbild
// für Haus + Aufbau.
// TODO: Icon-Pfade durch offizielle Vektordatei ersetzen, sobald verfügbar.
export default function Logo({ variant = "dark", showTagline = false, className }: LogoProps) {
  const subColor = variant === "dark" ? "text-concrete-300" : "text-concrete-600";

  return (
    <div className={clsx("leading-none", className)}>
      <div className="inline-flex items-baseline whitespace-nowrap font-display text-lg font-extrabold lowercase tracking-tight text-wood-500 sm:text-xl">
        ren
        <svg
          viewBox="0 0 40 32"
          className="mx-[0.03em] h-[0.72em] w-[0.9em] translate-y-[0.08em] shrink-0"
          fill="var(--color-wood-500)"
          aria-hidden="true"
        >
          <path d="M26 4L38 28H14L26 4Z" />
          <path d="M14 12L24 28H4L14 12Z" />
        </svg>
        <span className="text-safety">system</span>
      </div>
      {showTagline && (
        <div className={clsx("mt-1 text-xs normal-case", subColor)}>
          Ihr Partner für komplette Renovierungen
        </div>
      )}
    </div>
  );
}
