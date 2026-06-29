"use client";

import { motion } from "framer-motion";
import {
  Code2,
  MapPinned,
  Workflow,
  Megaphone,
  Check,
  ArrowUpRight,
  Globe,
  CalendarCheck,
  Zap,
  Bot,
  Search,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";
import { cn } from "@/lib/utils";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  bullets: { icon: LucideIcon; label: string }[];
  image?: string;
  accent: "emerald" | "amber";
  span: string;
};

const SERVICES: Service[] = [
  {
    id: "web",
    icon: Code2,
    title: "Desarrollo Web",
    tagline: "Especializado en Turismo",
    description:
      "Sitios y plataformas hechos a medida, veloces y orientados a conversión. Diseñamos la experiencia digital que tu marca y tus huéspedes merecen.",
    features: [
      "Next.js · React · Headless CMS",
      "Diseño UX/UI premium",
      "100% responsive y optimizado",
    ],
    bullets: [
      { icon: Globe, label: "Web corporativa" },
      { icon: CalendarCheck, label: "Reservas online" },
      { icon: Zap, label: "Performance" },
    ],
    image: "/images/work-tourism-1.png",
    accent: "emerald",
    span: "lg:col-span-7",
  },
  {
    id: "turismo",
    icon: MapPinned,
    title: "Webs de Turismo",
    tagline: "Que venden experiencias",
    description:
      "Especialistas en turismo: cabañas, hoteles, operadores y destinos. Integraciones de booking, pagos y paquetes pensadas para el viajero.",
    features: [
      "Motor de reservas & disponibilidad",
      "Pasarelas de pago & confirmaciones",
      "Catálogos de excursiones y paquetes",
    ],
    bullets: [
      { icon: CalendarCheck, label: "Booking" },
      { icon: Globe, label: "Multi-idioma" },
      { icon: TrendingUp, label: "Conversión" },
    ],
    image: "/images/work-tourism-2.png",
    accent: "amber",
    span: "lg:col-span-5",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Automatizaciones",
    tagline: "Liberá tu tiempo",
    description:
      "Conectamos tus herramientas y dejamos que el sistema trabaje por vos. Menos tareas manuales, más tiempo para lo importante.",
    features: [
      "CRM + WhatsApp + Email integrados",
      "Workflows a medida con n8n / Make",
      "Agentes de IA y respuestas automáticas",
    ],
    bullets: [
      { icon: Bot, label: "IA agents" },
      { icon: Zap, label: "Integraciones" },
      { icon: Workflow, label: "Workflows" },
    ],
    accent: "amber",
    span: "lg:col-span-5",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Digital",
    tagline: "Crecimiento medible",
    description:
      "SEO, Ads y contenido que atrae al viajero correcto en el momento correcto. Cada peso invertido se mide y se optimiza.",
    features: [
      "SEO técnico & local (Google Maps)",
      "Meta & Google Ads orientados a ROI",
      "Social Media y email marketing",
    ],
    bullets: [
      { icon: Search, label: "SEO" },
      { icon: TrendingUp, label: "Ads" },
      { icon: Megaphone, label: "Social" },
    ],
    image: "/images/work-marketing.png",
    accent: "emerald",
    span: "lg:col-span-7",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Servicios
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Soluciones con{" "}
                <span className="text-gradient">ADN propio</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-pretty text-foreground/70">
              Cuatro disciplinas, un mismo objetivo: que tu marca crezca en el mundo digital.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <StaggerGroup className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ServiceCard({ service: s }: { service: Service }) {
  const Icon = s.icon;
  const isEmerald = s.accent === "emerald";
  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        "group relative flex min-h-[20rem] flex-col overflow-hidden rounded-3xl border border-border/60 p-6 transition-all duration-500 sm:p-8",
        "hover:border-foreground/20 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]",
        s.span
      )}
    >
      {/* Background image (if any) */}
      {s.image && (
        <>
          <img
            src={s.image}
            alt=""
            aria-hidden
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/85 to-background/50" />
        </>
      )}
      {!s.image && (
        <div
          className={cn(
            "absolute inset-0 -z-10 opacity-60",
            isEmerald ? "mesh-bg" : "bg-gradient-to-br from-amber-500/5 to-transparent"
          )}
        />
      )}

      {/* glow on hover */}
      <div
        className={cn(
          "pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
          isEmerald ? "bg-emerald-500/20" : "bg-amber-500/20"
        )}
      />

      <div className="flex items-center justify-between">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
            isEmerald ? "bg-emerald-500/10 text-emerald-300" : "bg-amber-500/10 text-amber-300"
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.18em]",
            isEmerald ? "text-emerald-300/80" : "text-amber-300/80"
          )}
        >
          {s.tagline}
        </p>
        <h3 className="font-display mt-1.5 text-2xl font-semibold tracking-tight sm:text-3xl">
          {s.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.description}</p>

        <ul className="mt-5 space-y-2">
          {s.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <span
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                  isEmerald ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
                )}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Mini bullets */}
        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          {s.bullets.map((b) => {
            const BIcon = b.icon;
            return (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-foreground/70"
              >
                <BIcon className="h-3 w-3" />
                {b.label}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
