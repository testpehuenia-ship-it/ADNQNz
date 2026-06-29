"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  metric: string;
  metricLabel: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "Cabañas del Lago",
    category: "Web + Booking · Turismo",
    description:
      "Sitio premium con motor de reservas en tiempo real para cabañas frente al lago Aluminé.",
    image: "/images/work-tourism-1.png",
    metric: "+128%",
    metricLabel: "reservas online",
    accent: "from-emerald-500/20 to-emerald-700/5",
  },
  {
    title: "Patagonia Adventures",
    category: "Operador turístico · Web",
    description:
      "Plataforma multi-idioma con catálogo de excursiones y pagos para operador de aventura.",
    image: "/images/work-tourism-2.png",
    metric: "4.9★",
    metricLabel: "valoración clientes",
    accent: "from-amber-500/20 to-amber-700/5",
  },
  {
    title: "CRM Automatizado",
    category: "Automatización · Workflow",
    description:
      "Conectamos WhatsApp, email y reservas con agentes de IA que responden y califican leads 24/7.",
    image: "/images/work-automation.png",
    metric: "−18h",
    metricLabel: "trabajo manual / semana",
    accent: "from-amber-500/20 to-emerald-700/5",
  },
  {
    title: "Crecimiento Digital",
    category: "Marketing · SEO + Ads",
    description:
      "Estrategia SEO local y campañas de Meta/Google Ads que multiplicaron el tráfico cualificado.",
    image: "/images/work-marketing.png",
    metric: "+340%",
    metricLabel: "tráfico orgánico",
    accent: "from-emerald-500/20 to-amber-700/5",
  },
];

export function Portfolio() {
  return (
    <section id="trabajo" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Trabajo
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Proyectos con{" "}
                <span className="text-gradient-amber italic">alma patagónica</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-pretty text-foreground/70">
              Una muestra de lo que creamos cuando el diseño, el código y la estrategia se
              encuentran.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-border/60 bg-gradient-to-r from-foreground/[0.04] to-transparent p-6 sm:flex-row sm:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold sm:text-2xl">
                ¿Tu próximo proyecto?
              </h3>
              <p className="mt-1 text-sm text-foreground/70">
                Construyamos algo que enamore a tus clientes y crezca tu negocio.
              </p>
            </div>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Hablemos de tu idea
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
  }
  function reset() {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative h-full overflow-hidden rounded-3xl border border-border/60 transition-[transform,box-shadow] duration-300 will-change-transform hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-60 mix-blend-soft-light", p.accent)} />

        {/* Category pill */}
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium text-foreground/80">
          {p.category}
        </span>

        {/* Metric */}
        <div className="absolute right-4 top-4 flex flex-col items-end rounded-2xl bg-background/40 px-3 py-2 backdrop-blur-md">
          <span className="font-display text-lg font-semibold text-gradient-amber leading-none">
            {p.metric}
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-wide text-foreground/60">
            {p.metricLabel}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="relative flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.description}</p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 group-hover:text-amber-300">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
