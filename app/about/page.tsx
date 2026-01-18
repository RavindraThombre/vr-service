import GallerySection from "@/components/GallerySection";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata = {
  title: "About Us | V. R. Services – Bijliwala",
  description:
    "Learn about V. R. Services – Bijliwala, a trusted electrical service provider for industrial, commercial, and residential projects in Chakan.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            About Us
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            V. R. Services – Bijliwala is a trusted name in electrical
            services, delivering quality and reliable solutions for
            industrial, commercial, and residential clients.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 text-muted-foreground leading-relaxed">
          <p>
            <strong>{BUSINESS_INFO.name}</strong> – {BUSINESS_INFO.tag} provides
            complete electrical services including industrial electrical work,
            commercial installations, house wiring, CCTV installation, and
            supply of industrial electrical materials.
          </p>

          <p className="mt-4">
            Based in Chakan, we serve nearby industrial areas with a strong
            focus on safety, quality workmanship, and timely project delivery.
            Our experienced team ensures every project meets industry standards
            and client expectations.
          </p>

          <p className="mt-4">
            We believe in building long-term relationships through trust,
            transparency, and reliable service.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
    </main>
  );
}
