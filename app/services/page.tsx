import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Our Services | V. R. Services – Bijliwala",
  description:
    "Industrial, commercial, and residential electrical services including CCTV installation and electrical material supply in Chakan.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
       <section className="bg-background border-b border-border">
          <ServicesSection />  
        </section>
    </main>
  );
}
