import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { OnDemandBanner } from "../components/OnDemandBanner";
import { ServicesSection } from "../components/ServicesSection";
import { InfrastructureSection } from "../components/InfrastructureSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CTABanner } from "../components/CTABanner";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <OnDemandBanner />
      <ServicesSection />
      <InfrastructureSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
