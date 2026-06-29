"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./reveal";

export function AboutAdn() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const helixRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section id="adn" ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Left — story */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Nuestra esencia
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              No es un nombre.
              <br />
              Es un{" "}
              <span className="text-gradient-amber italic">ADN</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
              <span className="font-semibold text-foreground">ADNQN</span> nace de un juego de
              letras: el <span className="text-gradient-amber font-semibold">ADN</span> (la esencia,
              lo que somos) + <span className="text-gradient-emerald font-semibold">NQN</span> (Neuquén,
              de dónde venimos). El ADN de Neuquén, hecho agencia digital.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-foreground/70">
              Desde Villa Pehuenia, entre araucarias y lagos, llevamos la identidad patagónica al
              mundo digital. Cada proyecto lleva nuestro código genético:{" "}
              <span className="text-foreground">precisión, belleza y resultados.</span>
            </p>
          </Reveal>

          {/* Letter breakdown */}
          <Reveal delay={0.3}>
            <div className="mt-9 grid grid-cols-5 gap-2 sm:gap-3">
              {[
                ["A", "Agencia"],
                ["D", "Digital"],
                ["N", "Neuquina"],
                ["Q", "Calidad"],
                ["N", "NQN"],
              ].map(([l, m], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
                  className="group glass flex flex-col items-center rounded-2xl px-2 py-4 text-center transition-colors hover:bg-foreground/5"
                >
                  <span className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                    {l}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {m}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — image with helix overlay */}
        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 sm:aspect-[5/6]">
            <motion.img
              src="/images/about-forest.png"
              alt="Bosque de araucarias en Villa Pehuenia"
              style={{ y: imgY, scale: 1.12 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="noise absolute inset-0" />

            {/* DNA helix overlay */}
            <motion.svg
              style={{ rotate: helixRotate }}
              viewBox="0 0 120 200"
              className="absolute right-5 top-5 h-40 w-24 opacity-80 drop-shadow-[0_0_20px_oklch(0.8_0.145_76_/_0.4)]"
              fill="none"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                const y = 14 + i * 24;
                const t = i / 7;
                const x1 = 20 + Math.sin(t * Math.PI * 2) * 28;
                const x2 = 100 - Math.sin(t * Math.PI * 2) * 28;
                return (
                  <g key={i}>
                    <line
                      x1={x1}
                      y1={y}
                      x2={x2}
                      y2={y}
                      stroke="oklch(0.8 0.145 76 / 0.5)"
                      strokeWidth="1.5"
                    />
                    <circle cx={x1} cy={y} r="4" fill="oklch(0.66 0.13 158)" />
                    <circle cx={x2} cy={y} r="4" fill="oklch(0.8 0.145 76)" />
                  </g>
                );
              })}
            </motion.svg>

            {/* Floating caption */}
            <div className="glass-strong absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-amber-400 text-lg">
                🌲
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">Villa Pehuenia</p>
                <p className="text-xs text-muted-foreground">
                  Neuquén · Patagonia, Argentina
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
