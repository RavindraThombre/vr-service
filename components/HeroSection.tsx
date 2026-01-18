"use client";

import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import { Bolt, Factory, Home, MessageCircle, Phone, Video } from "lucide-react";
import ElectricBackground from "@/components/ElectricBackground";

const services = [
  { icon: Factory, label: "Industrial Electrical Work" },
  { icon: Bolt, label: "Commercial Electrical Services" },
  { icon: Home, label: "House Wiring" },
  { icon: Video, label: "CCTV Installation & Repair" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      
      {/* ⚡ Electric background */}
      <ElectricBackground opacity={0.18} speed={45} />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 pb-14 md:pt-20 md:pb-20">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm mb-6">
              <Bolt className="h-4 w-4 text-yellow-300" />
              Trusted Electrical Services
            </div>

            <h1
  className="
    group
    text-4xl md:text-6xl
    font-extrabold
    leading-tight
    tracking-tight
    transition-all
    duration-500
  "
>
  {/* Business Name */}
  <span
    className="
      block
      bg-gradient-to-r
      from-white
      via-sky-200
      to-white
      bg-clip-text
      text-transparent
      group-hover:from-sky-300
      group-hover:via-white
      group-hover:to-sky-300
      transition-all
      duration-500
      drop-shadow-sm
    "
  >
    {BUSINESS_INFO.name}
  </span>

  {/* Tagline */}
  <span
    className="
      block
      mt-2
      text-2xl md:text-3xl
      font-semibold
      text-white/85
      tracking-normal
      transition-all
      duration-500
      group-hover:text-white
      group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]
    "
  >
    {BUSINESS_INFO.tag}
  </span>
</h1>


          <p
  className="
    mt-6
    max-w-xl
    mx-auto md:mx-0
    text-base md:text-lg
    leading-relaxed
    text-white/85
    transition-all
    duration-500
    group-hover:text-white
    group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]
  "
>
  Industrial, commercial & residential electrical work delivered with
  <span className="font-semibold text-white/95"> safety</span>,
  <span className="font-semibold text-white/95"> precision</span>, and
  <span className="font-semibold text-white/95"> reliability</span>.
</p>

            {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start group">
  
  {/* PRIMARY CTA – CALL */}
  <Button
    asChild
    size="lg"
    className="
      relative
      overflow-hidden
      bg-white
      text-primary
      font-semibold
      px-8
      shadow-lg
      transition-all
      duration-300
      hover:bg-white/95
      hover:shadow-2xl
    "
  >
    <a
      href={`tel:${BUSINESS_INFO.phone1}`}
      className="
        flex items-center gap-2
        hover:animate-[lightning-flash_0.6s_ease-out]
      "
    >
      <Phone className="h-4 w-4" />
      <span>Call Now</span>
    </a>
  </Button>

  {/* SECONDARY CTA – WHATSAPP */}
  <Button
    asChild
    size="lg"
    variant="outline"
    className="
      border-white/80
      text-white
      font-medium
      px-8
      transition-all
      duration-300
      hover:bg-white
      hover:text-primary
      hover:shadow-lg
    "
  >
    <a
      href={`https://wa.me/91${BUSINESS_INFO.phone1}`}
      target="_blank"
      className="flex items-center gap-2"
    >
      <MessageCircle className="h-4 w-4" />
      <span>WhatsApp</span>
    </a>
  </Button>

</div>
          </div>

          {/* RIGHT SERVICES */}
          <div className="grid grid-cols-2 gap-5 max-w-md mx-auto md:max-w-none">
            {services.map((service) => (
              <div
                key={service.label}
                className="
                  group
                  rounded-xl
                  bg-white
                  text-slate-900
                  p-6
                  flex flex-col items-center
                  text-center
                  shadow-md
                  hover:shadow-xl
                  transition
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3 group-hover:scale-110 transition">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold">
                  {service.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
