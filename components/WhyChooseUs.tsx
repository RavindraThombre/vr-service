"use client";

import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  Users,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Reliable & Safe Work",
    description:
      "We strictly follow safety standards and best practices to deliver secure and dependable electrical installations.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description:
      "Fast response and on-time completion for industrial, commercial, and residential projects.",
  },
  {
    icon: BadgeCheck,
    title: "GST Registered",
    description: `GST Registered Service Provider (${BUSINESS_INFO.gst}) ensuring transparency and trust.`,
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Skilled professionals handling complex electrical work with precision and quality workmanship.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A trusted electrical service provider delivering safety,
            quality, and reliability across all projects.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-border
                bg-background
                p-7
                text-center
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
                  h-full w-[4px]
                  bg-gradient-to-b from-primary via-sky-400 to-primary
                  opacity-0
                  transition-all duration-300
                  group-hover:opacity-100
                  rounded-l-2xl
                "
              />

              {/* Soft glow */}
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
              <div className="relative z-10 mx-auto mb-6">
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
                  <reason.icon
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
                {reason.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-2 text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
