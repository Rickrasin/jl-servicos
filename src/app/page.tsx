import services from "@/data/data";

import HeaderSection from "@/components/layout/header/header";
import HeroSection from "@/components/layout/hero/hero";
import AboutSection from "@/components/layout/about/about";
import ServicesSection from "@/components/layout/services/services";
import GallerySection from "@/components/layout/gallery/gallery";
import DifferentialsSection from "@/components/layout/differentials/differentials";
import CallToActionSection from "@/components/layout/cta/cta";
import Footer from "@/components/layout/footer/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen ">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection services={services} />
      <GallerySection />
      <DifferentialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
