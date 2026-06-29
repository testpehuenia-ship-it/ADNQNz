import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { AboutAdn } from "@/components/site/about-adn";
import { Services } from "@/components/site/services";
import { Portfolio } from "@/components/site/portfolio";
import { Process } from "@/components/site/process";
import { Stats } from "@/components/site/stats";
import { Features } from "@/components/site/features";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { ScrollProgress } from "@/components/site/scroll-progress";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <AboutAdn />
        <Services />
        <Portfolio />
        <Stats />
        <Process />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
