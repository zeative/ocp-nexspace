import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoTicker />
      <AboutUs />
      <Features />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}
