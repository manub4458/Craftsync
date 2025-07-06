import DigitalPartnerSection from "./components/aboutus";
import Hero from "./components/hero";
import LogoStream from "./components/infinitescroller";
import ContactOverlay from "./components/letstalk";
import ServicesSection from "./components/services";
import TestimonialsSection from "./components/testimonials";
import ProfessionalsSection from "./components/whyus";

export default function Home() {
  return (
  <>
  <Hero />
  <LogoStream />
  <DigitalPartnerSection />
  <ProfessionalsSection />
  <ServicesSection />
  <ContactOverlay />
  <TestimonialsSection />
  </>  
  );
}
