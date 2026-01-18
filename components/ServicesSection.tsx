"use client";

import {
  Factory,
  Building2,
  Home,
  Video,
  Boxes,
} from "lucide-react";

const services = [
  {
    title: "Industrial Electrical Work",
    description:
      "Complete industrial electrical solutions including factory wiring, panel installation, maintenance, and safety compliance.",
    icon: Factory,
  },
  {
    title: "Commercial Electrical Services",
    description:
      "Electrical installations and maintenance for offices, shops, and commercial buildings with reliable performance.",
    icon: Building2,
  },
  {
    title: "House Wiring",
    description:
      "Safe and professional residential wiring, upgrades, repairs, and new home electrical installations.",
    icon: Home,
  },
  {
    title: "CCTV Installation & Repair",
    description:
      "High-quality CCTV camera installation, troubleshooting, and maintenance for security and monitoring.",
    icon: Video,
  },
  {
    title: "Industrial Electrical Materials",
    description:
      "Supply of quality industrial electrical materials and components at competitive prices.",
    icon: Boxes,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Reliable electrical solutions for industrial, commercial,
            and residential requirements.
          </p>
        </div>

        {/* Grid */}
       <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <div
      key={service.title}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-border
        bg-background
        p-7 md:p-8
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        animate-in fade-in slide-in-from-bottom-4
      "
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* LEFT ELECTRIC BAR */}
      <span
        className="
          absolute left-0 top-0
          h-full w-[6px]
          bg-gradient-to-b from-primary via-sky-400 to-primary
          opacity-0
          transition-all duration-300
          group-hover:opacity-100
          group-hover:translate-x-0
          rounded-l-2xl
        "
      />

      {/* SOFT GLOW LAYER */}
      <div
        className="
          absolute inset-0
          rounded-2xl
          opacity-0
          group-hover:opacity-100
          transition
          bg-gradient-to-br
          from-primary/10
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div
          className="
            relative
            flex items-center justify-center
            h-14 w-14
            rounded-xl
            bg-primary/10
            transition
            group-hover:bg-primary
          "
        >
          <service.icon
            className="
              h-7 w-7
              text-primary
              transition
              group-hover:text-primary-foreground
            "
          />

          {/* Icon halo */}
          <span
            className="
              absolute inset-0
              rounded-xl
              opacity-0
              group-hover:opacity-100
              transition
              blur-xl
              bg-primary/40
            "
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-lg font-semibold tracking-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-2 text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* BOTTOM ELECTRIC LINE */}
      <span
        className="
          absolute bottom-0 left-0
          h-[6px] w-0
          bg-gradient-to-r from-primary to-sky-400
          transition-all duration-300
          group-hover:w-full
          rounded-b-2xl
        "
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
