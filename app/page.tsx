import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* Wave divider */}
<div className="relative -mt-1">
  <svg
    viewBox="0 0 1440 100"
    className="block w-full"
    preserveAspectRatio="none"
  >
    <path
      fill="hsl(var(--primary))"
      d="M0,40 C120,80 320,0 560,30 800,60 1040,100 1440,40 L1440,0 L0,0 Z"
    />
  </svg>
</div>

      <ServicesSection />
      <WhyChooseUs />
       <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
