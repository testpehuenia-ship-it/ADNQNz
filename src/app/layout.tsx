import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";

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
  metadataBase: new URL("https://adnqn.ar"),
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
  icons: {
    icon: "/icon.svg",
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ADNQN - Agencia Digital Neuquina",
    image: "https://adnqn.ar/icon.svg",
    "@id": "https://adnqn.ar",
    url: "https://adnqn.ar",
    telephone: "+542942661000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cerro Mocho y La Angostura",
      addressLocality: "Villa Pehuenia",
      addressRegion: "Neuquén",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -38.8833,
      longitude: -71.1833,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    description: "Agencia digital especializada en desarrollo web para turismo, automatizaciones y marketing en Neuquén, Patagonia.",
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}
