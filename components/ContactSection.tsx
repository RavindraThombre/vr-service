"use client";

import { MapPin, Phone, FileText } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import EnquiryForm from "./EnquiryForm";

export default function ContactSection() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Get in touch for reliable industrial, commercial, and residential
            electrical services.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 items-stretch">
          
          {/* Contact Details */}
         <div
  className="
    group
    relative
    rounded-2xl
    border border-border
    bg-background
    p-6 md:p-8
    shadow-sm
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>

  {/* Soft hover glow */}
  <div
    className="
      pointer-events-none
      absolute inset-0 rounded-2xl
      opacity-0 group-hover:opacity-100
      transition
      bg-gradient-to-br
      from-primary/10 via-transparent to-transparent
    "
  />

  {/* Brand */}
  <h3 className="relative z-10 text-xl font-semibold tracking-tight">
    {BUSINESS_INFO.name}
  </h3>
  <p className="relative z-10 mt-1 text-sm text-muted-foreground">
    {BUSINESS_INFO.tag}
  </p>

  {/* Details */}
  <div className="relative z-10 mt-6 space-y-5 text-sm">
    {/* Address */}
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
        <MapPin className="h-4 w-4 text-primary" />
      </div>
      <p className="leading-relaxed">
        {BUSINESS_INFO.address}
      </p>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
        <Phone className="h-4 w-4 text-primary" />
      </div>
      <div>
        <a
          href={`tel:${BUSINESS_INFO.phone1}`}
          className="block font-medium hover:text-primary transition"
        >
          {BUSINESS_INFO.phone1}
        </a>
        <a
          href={`tel:${BUSINESS_INFO.phone2}`}
          className="block hover:text-primary transition"
        >
          {BUSINESS_INFO.phone2}
        </a>
      </div>
    </div>

    {/* GST */}
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
        <FileText className="h-4 w-4 text-primary" />
      </div>
      <p>
        <span className="font-medium">GST:</span> {BUSINESS_INFO.gst}
      </p>
    </div>
  </div>
</div>


          {/* Enquiry Form (Primary CTA) */}
          <div className="md:col-span-1">
            <EnquiryForm />
          </div>

          <div
  className="
    group
    relative
    rounded-2xl
    overflow-hidden
    border border-border
    bg-background
    shadow-sm
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl
    min-h-[320px]
  "
>
  {/* Soft electric glow on hover */}
  <div
    className="
      pointer-events-none
      absolute inset-0 z-10
      opacity-0 group-hover:opacity-100
      transition
      bg-gradient-to-br
      from-primary/15 via-transparent to-transparent
    "
  />
  
  {/* Open in Google Maps CTA */}
  <a
    href="https://www.google.com/maps?q=Nighoje%20Opp%20Mahindra%20Gate%20No%201%20Subhashwadi%20Chakan"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-3 right-3 z-20
      rounded-md
      bg-primary
      px-3 py-1.5
      text-xs font-medium
      text-primary-foreground
      shadow
      opacity-0 group-hover:opacity-100
      transition
      hover:bg-primary/90
    "
  >
    Open in Maps
  </a>

  {/* Google Map */}
  <iframe
    title="V. R. Services Location"
    src="https://www.google.com/maps?q=Nighoje%20Opp%20Mahindra%20Gate%20No%201%20Subhashwadi%20Chakan&output=embed"
    className="relative z-0 w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

        </div>
      </div>
    </section>
  );
}
