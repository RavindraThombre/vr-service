"use client";

import { BUSINESS_INFO } from "@/lib/constants";
import { Bolt, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import ElectricBackground from "./ElectricBackground";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
    <ElectricBackground enableHoverPulse={true} />
      {/* CONTENT (defines height automatically) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-4 grid gap-8 md:grid-cols-3">

        {/* Business Info */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold">
            <Bolt className="h-5 w-5" />
            {BUSINESS_INFO.name}
          </h3>

          <p className="mt-1 text-sm opacity-90">
            {BUSINESS_INFO.tag}
          </p>

          <p className="mt-4 text-sm opacity-80">
            {BUSINESS_INFO.address}
          </p>

          <p className="mt-2 text-sm opacity-80">
            GST: {BUSINESS_INFO.gst}
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm opacity-90">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:opacity-100 opacity-80"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>

          <p className="text-sm opacity-90">
            <a href={`tel:${BUSINESS_INFO.phone1}`}>
              {BUSINESS_INFO.phone1}
            </a>
          </p>

          <p className="mt-2 text-sm opacity-90">
            <a href={`tel:${BUSINESS_INFO.phone2}`}>
              {BUSINESS_INFO.phone2}
            </a>
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone1}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Phone className="h-5 w-5" />
            </a>

            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/20 text-center text-xs opacity-80 py-3">
        © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
      </div>
    </footer>
  );
}
