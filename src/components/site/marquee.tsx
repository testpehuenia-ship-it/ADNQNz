"use client";

const ITEMS = [
  "Desarrollo Web",
  "Turismo",
  "Automatizaciones",
  "Marketing Digital",
  "SEO",
  "Booking & Reservas",
  "CRM",
  "Diseño UX",
  "Villa Pehuenia",
  "E-commerce",
  "Ads",
  "Analytics",
];

export function Marquee() {
  return (
    <section aria-hidden className="relative border-y border-border/40 bg-background-elevated/40 py-5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-6 pr-6">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-display text-lg font-medium text-foreground/70 sm:text-xl">
                {item}
              </span>
              <span className="text-gradient-amber text-lg">✦</span>
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-6 pr-6" aria-hidden>
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-display text-lg font-medium text-foreground/70 sm:text-xl">
                {item}
              </span>
              <span className="text-gradient-amber text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
