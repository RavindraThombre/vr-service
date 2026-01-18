import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us | V. R. Services – Bijliwala",
  description:
    "Contact V. R. Services (Bijliwala) for industrial, commercial, and residential electrical work in Chakan.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-background border-b border-border">
      <ContactSection />
      </section>
    </main>
  );
}
