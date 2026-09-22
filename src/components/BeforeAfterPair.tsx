import Image from "next/image";

export default function BeforeAfterPair({
  beforeSrc,
  afterSrc,
  alt,
  beforeLabel,
  afterLabel,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div className="relative grid grid-cols-2 gap-1 overflow-hidden rounded-2xl bg-concrete-900 sm:gap-1.5">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={beforeSrc}
          alt={`${alt} — Vorher`}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 25vw, 50vw"
          className="object-cover"
        />
        <span className="absolute bottom-2 left-2 z-10 rounded-full bg-concrete-100/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-concrete-950">
          {beforeLabel}
        </span>
      </div>
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={afterSrc}
          alt={`${alt} — Nachher`}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 25vw, 50vw"
          className="object-cover"
        />
        <span className="absolute bottom-2 right-2 z-10 rounded-full bg-concrete-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-concrete-100">
          {afterLabel}
        </span>
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-wood-500 text-sm font-bold text-concrete-100 shadow-lg"
        aria-hidden="true"
      >
        →
      </div>
    </div>
  );
}
