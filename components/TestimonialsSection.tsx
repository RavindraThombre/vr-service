"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Industrial Client – Chakan",
    message:
      "V. R. Services handled our factory electrical work professionally. Timely completion and good quality work. Highly recommended.",
  },
  {
    name: "Commercial Shop Owner",
    message:
      "Quick response and neat wiring work. CCTV installation was done perfectly. Very reliable service.",
  },
  {
    name: "Residential Customer",
    message:
      "Safe and clean house wiring work. Explained everything properly and completed work on time.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trusted by industrial, commercial, and residential customers.
          </p>
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden py-4">
          <div
            className="
              group
              flex gap-8 w-max
              animate-[marquee_45s_linear_infinite]
              hover:[animation-play-state:paused]
            "
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  w-[320px]
                  flex-shrink-0
                  rounded-2xl
                  border border-border
                  bg-background/80
                  backdrop-blur
                  p-6
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
            
                {/* Quote icon */}
                <Quote className="h-6 w-6 text-primary/30 mb-3" />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  “{item.message}”
                </p>

                {/* Client */}
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
