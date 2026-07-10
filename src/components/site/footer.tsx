"use client";

import { Phone, MapPin, Mail, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { NAV_LINKS, SITE } from "./data";
import { BrandMark } from "./navbar";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/60 bg-background-elevated/40">
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="noise absolute inset-0" />

      {/* Giant wordmark backdrop */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 flex justify-center overflow-hidden sm:-bottom-12">
        <span className="font-display select-none text-[26vw] font-bold leading-none tracking-tighter text-foreground/[0.03] sm:text-[20vw]">
          ADNQN
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <BrandMark className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-tight">
                  ADN<span className="text-gradient-amber">QN</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Digital · Neuquén
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-foreground/70">
              {SITE.tagline}. Agencia digital especializada en web para turismo,
              automatizaciones y marketing. Desde {SITE.location}, hacia el mundo.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Social href={SITE.whatsappLink} label="WhatsApp">
                <Phone className="h-4 w-4" />
              </Social>
              <Social href="https://instagram.com" label="Instagram">
                <Instagram className="h-4 w-4" />
              </Social>
              <Social href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Social>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-amber-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.whatsappLink}
                  className="flex items-center gap-2.5 text-sm text-foreground/70 transition-colors hover:text-amber-300"
                >
                  <Phone className="h-4 w-4 text-emerald-300" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-sm text-foreground/70 transition-colors hover:text-amber-300"
                >
                  <Mail className="h-4 w-4 text-emerald-300" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>
                  {SITE.address}
                  <br />
                  {SITE.location} · {SITE.province}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ADNQN · Agencia Digital Neuquina. El ADN de NQN, en cada
            pixel.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-xs font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Volver arriba
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 transition-transform group-hover:-translate-y-0.5">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-all hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
    >
      {children}
    </a>
  );
}
