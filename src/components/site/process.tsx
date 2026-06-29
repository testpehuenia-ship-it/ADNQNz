"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket, LineChart } from "lucide-react";
import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    icon: Search,
    title: "Descubrimiento",
    desc: "Inmersión total en tu marca, tu público y tus objetivos. Definimos juntos el norte del proyecto.",
    accent: "emerald" as const,
  },
  {
    n: "02",
    icon: PenTool,
    title: "Estrategia & Diseño",
    desc: "Arquitectura, UX y diseño visual premium. Vemos el resultado antes de escribir una línea de código.",
    accent: "amber" as const,
  },
  {
    n: "03",
    icon: Code2,
    title: "Desarrollo",
    desc: "Construimos con tecnología moderna (Next.js, headless, performante). Código limpio y escalable.",
    accent: "emerald" as const,
  },
  {
    n: "04",
    icon: Rocket,
    title: "Lanzamiento",
    desc: "Publicamos, testeamos en dispositivos reales y dejamos todo listo para recibir a tus clientes.",
    accent: "amber" as const,
  },
  {
    n: "05",
    icon: LineChart,
    title: "Optimización continua",
    desc: "Medimos, iteramos y escalamos. Tu proyecto evoluciona con data real y crecimiento sostenido.",
    accent: "emerald" as const,
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="proceso" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Proceso
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Del concepto al{" "}
              <span className="text-gradient">crecimiento</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-foreground/70">
              Un proceso claro y transparente. Sabés siempre en qué etapa está tu proyecto.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative pl-8 sm:pl-0">
          {/* Vertical line (desktop centered, mobile left) */}
          <div className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-border/70 sm:left-1/2 sm:-translate-x-1/2">
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-emerald-400 via-amber-300 to-emerald-400"
            />
          </div>

          <div className="space-y-10 sm:space-y-2">
            {STEPS.map((step, i) => (
              <StepRow key={step.n} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepRow({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const Icon = step.icon;
  const isLeft = index % 2 === 0;
  const isEmerald = step.accent === "emerald";

  return (
    <div className="relative sm:grid sm:grid-cols-2 sm:gap-8">
      {/* Node */}
      <div className="absolute -left-8 top-1 sm:left-1/2 sm:-translate-x-1/2">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background ${
            isEmerald ? "border-emerald-400" : "border-amber-400"
          }`}
        >
          <span className={`h-2 w-2 rounded-full ${isEmerald ? "bg-emerald-400" : "bg-amber-400"}`} />
        </span>
      </div>

      {/* Card */}
      <Reveal
        delay={0.05}
        className={isLeft ? "sm:col-start-1 sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"}
      >
        <div className="glass mb-10 rounded-2xl p-5 transition-colors hover:bg-foreground/[0.04] sm:mb-2 sm:p-6">
          <div
            className={`flex items-center gap-3 ${
              isLeft ? "sm:flex-row-reverse" : ""
            }`}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                isEmerald ? "bg-emerald-500/10 text-emerald-300" : "bg-amber-500/10 text-amber-300"
              }`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div className={isLeft ? "sm:text-right" : ""}>
              <span className="font-display text-xs font-medium text-muted-foreground">
                {step.n}
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                {step.title}
              </h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">{step.desc}</p>
        </div>
      </Reveal>
    </div>
  );
}
