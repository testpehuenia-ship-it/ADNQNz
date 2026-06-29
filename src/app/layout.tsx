import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADNQN — Agencia Digital Neuquina | Web, Turismo, Automatizaciones & Marketing",
  description:
    "ADNQN es la agencia digital neuquina especializada en desarrollo web para turismo, automatizaciones y marketing. El ADN digital de Neuquén, desde Villa Pehuenia. Contacto: 2942661000.",
  keywords: [
    "ADNQN",
    "Agencia Digital Neuquina",
    "desarrollo web Neuquén",
    "webs de turismo",
    "automatizaciones",
    "marketing digital",
    "Villa Pehuenia",
    "agencia de marketing Patagonia",
  ],
  authors: [{ name: "ADNQN" }],
  openGraph: {
    title: "ADNQN — Agencia Digital Neuquina",
    description:
      "Desarrollo web especializado en turismo, automatizaciones y marketing. El ADN digital de Neuquén, desde Villa Pehuenia.",
    siteName: "ADNQN",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADNQN — Agencia Digital Neuquina",
    description:
      "Desarrollo web especializado en turismo, automatizaciones y marketing desde Villa Pehuenia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
