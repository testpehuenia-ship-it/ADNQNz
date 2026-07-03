"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, MessageCircle, Send, Loader2, CheckCircle2, Clock } from "lucide-react";
import { Reveal } from "./reveal";
import { SITE } from "./data";
import { useToast } from "@/hooks/use-toast";
import { Magnetic } from "./magnetic";

const SERVICES = [
  "Desarrollo Web",
  "Web de Turismo",
  "Automatizaciones",
  "Marketing Digital",
  "No estoy seguro / Quiero asesorarme",
];

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    
    const nombre = data.get("nombre");
    const email = data.get("email");
    const telefono = data.get("telefono") || "No especificado";
    const servicio = data.get("servicio");
    const mensaje = data.get("mensaje");

    const text = `¡Hola ADNQN! 👋
Mi nombre es ${nombre}.
✉️ Email: ${email}
📱 Tel: ${telefono}
🎯 Me interesa: ${servicio}

Mensaje:
${mensaje}`;

    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    
    setDone(true);
    form.reset();
    setLoading(false);
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="grid-pattern mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left — info */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Contacto
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                Conversemos
                <br />
                sobre tu{" "}
                <span className="text-gradient">próximo proyecto</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-pretty text-foreground/70">
                Contanos qué necesitás y te respondemos en menos de 24 hs. Sin compromiso, con la
                calidez de quienes trabajan desde la Patagonia.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 space-y-3">
                <ContactRow
                  icon={<Phone className="h-4 w-4" />}
                  label="Teléfono / WhatsApp"
                  value={SITE.phone}
                  href={`https://wa.me/${SITE.whatsapp}`}
                />
                <ContactRow
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value={SITE.email}
                  href={`mailto:${SITE.email}`}
                />
                <ContactRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Ubicación"
                  value={`${SITE.address} · ${SITE.location}`}
                />
                <ContactRow
                  icon={<Clock className="h-4 w-4" />}
                  label="Horario"
                  value="Lun a Vie · 9 a 18 hs"
                />
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <Magnetic strength={10} className="mt-7 inline-block">
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Hola%20ADNQN,%20quiero%20cotizar%20un%20proyecto`}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-background shadow-[0_12px_40px_-12px_oklch(0.66_0.13_158_/_0.6)] transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Escribinos por WhatsApp
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.2}>
            <div className="glass-strong rounded-3xl p-6 shadow-2xl sm:p-8">
              {done ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-semibold">¡Listo!</h3>
                  <p className="mt-2 max-w-xs text-sm text-foreground/70">
                    Recibimos tu mensaje. Te respondemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setDone(false)}
                    className="mt-6 text-sm font-medium text-amber-300 hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Teléfono" name="telefono" placeholder="+54 9 2942..." />
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-foreground/70">Servicio</label>
                      <select
                        name="servicio"
                        defaultValue=""
                        className="h-11 rounded-xl border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                      >
                        <option value="" disabled>
                          Elegí un servicio
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-foreground/70">Mensaje</label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      placeholder="Contanos sobre tu proyecto, tu negocio o tu idea..."
                      className="resize-none rounded-xl border border-border/60 bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.01] disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-muted-foreground">
                    Al enviar aceptás que te contactemos. Nunca compartimos tus datos.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center gap-4 rounded-2xl border border-border/50 p-3.5 transition-colors hover:border-foreground/20 hover:bg-foreground/[0.03]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-amber-500/10 text-emerald-300">
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="text-sm font-semibold text-foreground">{value}</span>
      </span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-foreground/70">
        {label} {required && <span className="text-amber-300">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
      />
    </div>
  );
}
