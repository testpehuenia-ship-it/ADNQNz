"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Code2, Workflow, Megaphone, ChevronDown, Sparkles } from "lucide-react";
import { SITE } from "./data";
import { Magnetic } from "./magnetic";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="/images/hero-patagonia.png"
          alt="Agencia de Desarrollo Web en Neuquén - Paisaje de Villa Pehuenia Patagonia"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      <div className="noise absolute inset-0 -z-10" />
      <div className="mesh-bg absolute inset-0 -z-10 opacity-70" />

      {/* Floating glass service chips */}
      <FloatingChip
        className="left-[6%] top-[26%] hidden lg:flex"
        delay={0.2}
        icon={<Code2 className="h-4 w-4 text-emerald-300" />}
        title="Desarrollo Web"
        sub="Turismo · a medida"
      />
      <FloatingChip
        className="right-[7%] top-[20%] hidden lg:flex"
        delay={0.4}
        icon={<Workflow className="h-4 w-4 text-amber-300" />}
        title="Automatizaciones"
        sub="Workflows · CRM"
      />
      <FloatingChip
        className="right-[10%] bottom-[22%] hidden lg:flex"
        delay={0.6}
        icon={<Megaphone className="h-4 w-4 text-emerald-300" />}
        title="Marketing"
        sub="SEO · Ads · Social"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pb-24 pt-28 text-center sm:pt-32"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Agencia Digital Neuquina
          <span className="text-muted-foreground">·</span>
          <MapPin className="h-3 w-3 text-amber-300" />
          {SITE.location}
        </motion.div>

        {/* Wordmark */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 text-[clamp(4.5rem,19vw,15rem)] font-semibold leading-[0.82] tracking-tight"
        >
          <span className="sr-only">Agencia de Desarrollo Web y Marketing Digital en Neuquén - </span>
          <span className="text-gradient shimmer animate-shimmer bg-[linear-gradient(110deg,oklch(0.88_0.12_85),oklch(0.66_0.13_158),oklch(0.8_0.145_76),oklch(0.66_0.13_158))] bg-clip-text text-transparent">
            ADNQN
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-5 max-w-2xl text-pretty text-base text-foreground/80 sm:text-xl"
        >
          El{" "}
          <span className="font-display italic text-gradient-amber">ADN digital</span>{" "}
          de Neuquén. Diseñamos{" "}
          <span className="text-foreground">webs que venden</span> para el turismo,
          <span className="text-foreground"> automatizaciones</span> que liberan tu tiempo
          y <span className="text-foreground">marketing</span> que hace crecer tu negocio.
        </motion.h2>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Magnetic strength={14}>
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 px-7 py-3.5 text-sm font-semibold text-background shadow-[0_10px_40px_-10px_oklch(0.66_0.13_158_/_0.6)] transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10">Empezar proyecto</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </Magnetic>
          <Magnetic strength={10}>
            <a
              href="#trabajo"
              className="glass inline-flex items-center gap-2 rounded-full border border-amber-400/30 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-amber-400/60 hover:bg-amber-400/[0.06]"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              Ver trabajos
            </a>
          </Magnetic>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-muted-foreground"
        >
          {[
            ["+40", "webs lanzadas"],
            ["100%", "hechas a medida"],
            ["24/7", "automatizadas"],
            ["🏔️", "desde Villa Pehuenia"],
          ].map(([n, l]) => (
            <div key={l} className="flex items-center gap-2">
              <span className="font-display text-base font-semibold text-foreground">{n}</span>
              <span>{l}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#adn"
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function FloatingChip({
  className,
  icon,
  title,
  sub,
  delay = 0,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      className={`absolute z-10 ${className}`}
    >
      <div className="glass-strong animate-float flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl" style={{ animationDelay: `${delay}s` }}>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/5">
          {icon}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-foreground">{title}</span>
          <span className="text-[11px] text-muted-foreground">{sub}</span>
        </span>
      </div>
    </motion.div>
  );
}
