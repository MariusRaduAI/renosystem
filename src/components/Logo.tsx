import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

export default function Logo({ variant = "dark", showTagline = false, className }: LogoProps) {
  const subColor = variant === "dark" ? "text-concrete-300" : "text-concrete-600";

  return (
    <div className={clsx("leading-none", className)}>
      <Image
        src="/logo/renosystem-logo.png"
        alt="RENOSYSTEM"
        width={800}
        height={150}
        priority
        className="h-7 w-auto sm:h-8"
      />
      {showTagline && (
        <div className={clsx("mt-1 text-xs normal-case", subColor)}>
          Ihr Partner für komplette Renovierungen
        </div>
      )}
    </div>
  );
}
