import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  /** Crossfades from the full wordmark to the compact circular mark — used by the header on scroll. */
  collapsed?: boolean;
  /** "lg" is used for standalone brand moments (e.g. the footer) that want more presence than the header. */
  size?: "sm" | "lg";
};

export default function Logo({
  variant = "dark",
  showTagline = false,
  className,
  collapsed = false,
  size = "sm",
}: LogoProps) {
  const subColor = variant === "dark" ? "text-concrete-300" : "text-concrete-600";
  const wordmarkHeight = size === "lg" ? "h-12 sm:h-14" : "h-9 sm:h-10";
  const markSize = size === "lg" ? "h-12 w-12 sm:h-14 sm:w-14" : "h-9 w-9 sm:h-10 sm:w-10";

  return (
    <div className={clsx("leading-none", className)}>
      <div className="grid">
        <Image
          src="/logo/renosystem-logo.png"
          alt="RENOSYSTEM"
          width={800}
          height={150}
          priority
          className={clsx(
            "col-start-1 row-start-1 w-auto origin-left transition-all duration-500 ease-out",
            wordmarkHeight,
            collapsed ? "scale-90 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <Image
          src="/logo/renosystem-mark.png"
          alt="RENOSYSTEM"
          width={512}
          height={512}
          className={clsx(
            "col-start-1 row-start-1 origin-left transition-all duration-500 ease-out",
            markSize,
            collapsed ? "scale-100 opacity-100" : "scale-75 opacity-0"
          )}
        />
      </div>
      {showTagline && (
        <div className={clsx("mt-1 text-xs normal-case", subColor)}>
          Ihr Partner für komplette Renovierungen
        </div>
      )}
    </div>
  );
}
