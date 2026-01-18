import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "V. R. Services – Bijliwala",
  description:
    "All types of electrical work – Industrial, Commercial, House Wiring & CCTV Installation in Chakan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Business / Local SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              name: BUSINESS_INFO.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS_INFO.address,
                addressCountry: "IN",
              },
              telephone: [
                BUSINESS_INFO.phone1,
                BUSINESS_INFO.phone2,
              ],
              areaServed: "Chakan, Pune, Maharashtra",
              openingHours: "Mo-Su 09:00-20:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
