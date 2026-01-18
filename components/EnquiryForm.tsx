"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BUSINESS_INFO } from "@/lib/constants";
import {
  MessageCircle,
  Phone,
  CheckCircle,
  Circle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function EnquiryForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<
    "idle" | "typing" | "sending" | "sent"
  >("idle");
  const [countdown, setCountdown] = useState(5);

  /* 🕒 TIME LOGIC */
  const hour = new Date().getHours();
  const isOnline = hour >= 9 && hour < 21;
  const isNight = hour >= 21 || hour < 9;

  /* ⏱️ COUNTDOWN */
  useEffect(() => {
    if (status === "sending" && countdown > 0) {
      const timer = setTimeout(
        () => setCountdown((c) => c - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [status, countdown]);

  /* 📱 INDIAN PHONE FORMAT */
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || phone.replace(/\D/g, "").length < 10) return;

    setStatus("sending");
    setCountdown(5);

    const message = `
Hello ${BUSINESS_INFO.name} – ${BUSINESS_INFO.tag},

My name is ${name}.
My phone number is ${phone.replace("-", "")}.

${isNight
  ? "I know it is late. Please contact me tomorrow."
  : "I am interested in your electrical services. Please call me back."
}
    `.trim();

    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setStatus("sent");

      setTimeout(() => {
        router.push("/thank-you");
      }, 800);
    }, 5000);
  };

  return (
    <div className="group relative rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xl font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/15">
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
          </span>
          Quick Enquiry
        </h3>

        {/* 🟢 Online Status */}
        <span className="flex items-center gap-1 text-xs">
          <Circle
            className={`h-2.5 w-2.5 fill-current ${
              isOnline ? "text-green-500" : "text-gray-400"
            }`}
          />
          {isOnline ? "Online now" : "Offline"}
        </span>
      </div>

      {/* Status text */}
      <p className="mt-2 text-sm text-muted-foreground">
        {status === "idle" && isOnline && "Usually replies within 5 minutes"}
        {status === "idle" && isNight && "Replies tomorrow morning"}
        {status === "typing" && "Preparing your message…"}
        {status === "sending" && `Replying in ${countdown}s…`}
        {status === "sent" && "Message sent successfully!"}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setStatus("typing");
          }}
          required
        />

        <Input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(formatPhone(e.target.value));
            setStatus("typing");
          }}
          type="tel"
          required
        />

        <Button
          type="submit"
          disabled={status === "sending"}
          className={`
            w-full transition-all
            ${
              status === "sent"
                ? "bg-green-600 hover:bg-green-600"
                : "bg-[#25D366] hover:bg-[#20ba5a]"
            }
          `}
        >
          {status === "sent" ? (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Sent
            </>
          ) : (
            <>
              <MessageCircle className="h-4 w-4 mr-2" />
              Send via WhatsApp
            </>
          )}
        </Button>

        {/* Call fallback */}
        <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <Phone className="h-3.5 w-3.5" />
          Or call directly:
          <a
            href={`tel:${BUSINESS_INFO.phone1}`}
            className="font-medium hover:text-primary transition"
          >
            {BUSINESS_INFO.phone1}
          </a>
        </p>
      </form>
    </div>
  );
}
