import { trustBar } from "@/content/de";

export default function TrustBar() {
  return (
    <section className="border-y border-concrete-100/10 bg-concrete-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustBar.map((item) => (
          <div key={item.label} className="px-2 py-6 text-center lg:text-left">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-concrete-100">
              {item.label}
            </p>
            <p className="mt-1 text-xs text-concrete-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
