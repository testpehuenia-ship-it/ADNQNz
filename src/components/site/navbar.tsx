"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "./data";
import { Magnetic } from "./magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled
            ? "glass-strong shadow-[0_18px_50px_-20px_rgba(0,0,0,0.7)]"
            : "border border-transparent bg-transparent"
        )}
      >
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-2.5">
          <BrandMark className="h-9 w-9" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              ADN<span className="text-gradient-amber">QN</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Digital · Neuquén
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 scale-90 rounded-full bg-foreground/5 opacity-0 transition-all duration-300 hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Magnetic strength={12} className="hidden sm:inline-block">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:glow-amber"
            >
              <Phone className="h-3.5 w-3.5" />
              Hablemos
            </a>
          </Magnetic>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-3 top-[4.5rem] z-40 md:hidden"
          >
            <div className="glass-strong rounded-2xl p-3 shadow-2xl">
              <ul className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-foreground/5"
                    >
                      {l.label}
                      <span className="text-muted-foreground">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 via-emerald-600 to-amber-500/80 p-[2px] shadow-lg",
        className
      )}
    >
      <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-background/90 backdrop-blur">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          {/* DNA helix meets A */}
          <path
            d="M7 17C7 17 9 13 12 13C15 13 17 17 17 17M7 7C7 7 9 11 12 11C15 11 17 7 17 7M8.5 8.5L15.5 15.5M8.5 15.5L15.5 8.5"
            stroke="url(#dna)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="1.6" fill="oklch(0.8 0.145 76)" />
          <defs>
            <linearGradient id="dna" x1="6" y1="6" x2="18" y2="18">
              <stop stopColor="oklch(0.66 0.13 158)" />
              <stop offset="1" stopColor="oklch(0.8 0.145 76)" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </span>
  );
}
