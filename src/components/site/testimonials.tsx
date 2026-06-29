"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";

const TESTIMONIALS = [
  {
    quote:
      "ADNQN transformó por completo nuestra presencia digital. Las reservas online se triplicaron en tres meses. Profesionales de verdad.",
    author: "María Luz",
    role: "Cabañas del Lago · Villa Pehuenia",
    accent: "emerald",
  },
  {
    quote:
      "Automatizaron todo nuestro sistema de reservas y respuestas. Ahora atendemos 24/7 sin perder un solo cliente. Increíble.",
    author: "Federico A.",
    role: "Operador turístico · Neuquén",
    accent: "amber",
  },
  {
    quote:
      "El diseño superó nuestras expectativas. Se nota que entienden el turismo patagónico. Lo recomiendo sin dudar.",
    author: "Carolina V.",
    role: "Hostería · Aluminé",
    accent: "emerald",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Testimonios
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Lo que dicen{" "}
              <span className="text-gradient-amber italic">nuestros clientes</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <figure className="glass relative flex h-full flex-col rounded-3xl p-6 transition-colors hover:bg-foreground/[0.04] sm:p-7">
                <Quote className="h-8 w-8 text-amber-300/40" />
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/85 sm:text-base">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold ${
                      t.accent === "emerald"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-amber-500/15 text-amber-300"
                    }`}
                  >
                    {t.author.charAt(0)}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold text-foreground">{t.author}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
