"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Gauge,
  HeartHandshake,
  Palette,
  ShieldCheck,
  Infinity as InfinityIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "./reveal";

const FEATURES = [
  {
    icon: Mountain,
    title: "Raíces patagónicas",
    desc: "Desde Villa Pehuenia, entendemos el turismo de montaña como nadie. Hablamos tu idioma y el de tus huéspedes.",
  },
  {
    icon: Gauge,
    title: "Velocidad que convierte",
    desc: "Sitios ultrarrápidos (90+ en Lighthouse) porque cada segundo de carga cuesta ventas.",
  },
  {
    icon: Palette,
    title: "Diseño premium",
    desc: "Cada pixel pensado. Nada de plantillas genéricas: tu marca merece una experiencia única.",
  },
  {
    icon: HeartHandshake,
    title: "Cercanía real",
    desc: "Trato directo, sin intermediarios. Te acompañamos antes, durante y después del lanzamiento.",
  },
  {
    icon: ShieldCheck,
    title: "Hecho para durar",
    desc: "Código limpio y escalable. Tu plataforma crece contigo, sin rehacer todo cada dos años.",
  },
  {
    icon: InfinityIcon,
    title: "Mejora continua",
    desc: "No lanzamos y desaparecemos. Medimos, iteramos y optimizamos con data real.",
  },
];

export function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Por qué ADNQN
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              No es una agencia más.
              <br />
              Es un{" "}
              <span className="text-gradient">socio digital</span>.
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-3xl border border-border/60 p-6 transition-colors hover:bg-foreground/[0.03]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/15 to-amber-500/10 text-emerald-300 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold tracking-tight sm:text-xl">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{f.desc}</p>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
