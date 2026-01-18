"use client";

import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center rounded-xl border border-border bg-background p-8 shadow-sm">
        
        <CheckCircle className="mx-auto h-14 w-14 text-green-600" />

        <h1 className="mt-4 text-2xl font-bold">
          Thank You!
        </h1>

        <p className="mt-3 text-muted-foreground">
          Your enquiry has been sent successfully.
          Our team from <strong>{BUSINESS_INFO.name}</strong> will contact you shortly.
        </p>

        <div className="mt-6 space-y-3">
          <Button asChild className="w-full">
            <Link href="/">
              Go Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full"
          >
            <a href={`tel:${BUSINESS_INFO.phone1}`}>
              Call Us Now
            </a>
          </Button>
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to website
        </Link>
      </div>
    </section>
  );
}
