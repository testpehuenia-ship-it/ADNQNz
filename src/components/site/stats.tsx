"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Counter } from "./counter";
import { Reveal } from "./reveal";

const STATS = [
  { to: 40, suffix: "+", label: "Webs lanzadas", sub: "turismo & más" },
  { to: 98, suffix: "%", label: "Clientes que repiten", sub: "o recomiendan" },
  { to: 3, suffix: "x", label: "Más conversión", sub: "promedio vs. plantillas" },
  { to: 24, suffix: "/7", label: "Automatizadas", sub: "tu negocio nunca duerme" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-28">
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20 scale-110">
        <img
          src="/images/hero-patagonia.png"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-background/85 backdrop-blur-[2px]" />
      <div className="mesh-bg absolute inset-0 -z-10 opacity-50" />
      <div className="noise absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Números que hablan de{" "}
            <span className="text-gradient-amber italic">resultados</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/40 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center justify-center bg-background/60 p-6 text-center backdrop-blur-sm sm:p-8">
                <span className="font-display text-4xl font-semibold text-gradient sm:text-5xl lg:text-6xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </span>
                <span className="mt-3 text-sm font-semibold text-foreground">{s.label}</span>
                <span className="mt-1 text-xs text-muted-foreground">{s.sub}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
