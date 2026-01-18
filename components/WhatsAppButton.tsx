"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/91${BUSINESS_INFO.phone1}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        group
        fixed bottom-24 right-6 z-50
        flex items-center
        rounded-full
        bg-[#25D366]
        text-white
        h-12
        px-4
        shadow-lg
        transition-all
        hover:bg-[#20ba5a]
        hover:shadow-xl
        animate-[float-slow_6s_ease-in-out_infinite]
      "
    >
      {/* Icon */}
      <MessageCircle className="h-5 w-5 shrink-0" />

      {/* Text (hidden → visible on hover) */}
      <span
        className="
          ml-2
          max-w-0
          overflow-hidden
          whitespace-nowrap
          text-sm
          font-medium
          opacity-0
          transition-all
          duration-300
          group-hover:max-w-[120px]
          group-hover:opacity-100
        "
      >
        WhatsApp
      </span>
    </a>
  );
}
