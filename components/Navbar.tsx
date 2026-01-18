"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BUSINESS_INFO } from "@/lib/constants";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Brand */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-xs opacity-90">
              {BUSINESS_INFO.tag}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:opacity-80 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href={`tel:${BUSINESS_INFO.phone1}`}>
                Call: {BUSINESS_INFO.phone1}
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-primary text-primary-foreground border-none"
              >
                {/* Mobile Content */}
                <div className="flex flex-col items-center justify-center gap-8 h-full text-center">

                  {/* Links */}
                  <nav className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)} // ✅ auto-close
                        className="text-xl font-semibold hover:opacity-80 transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Divider */}
                  <div className="w-24 h-px bg-primary-foreground/30" />

                  {/* CTA */}
                  <Button
                    asChild
                    onClick={() => setOpen(false)}
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    <a href={`tel:${BUSINESS_INFO.phone1}`}>
                      Call: {BUSINESS_INFO.phone1}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
