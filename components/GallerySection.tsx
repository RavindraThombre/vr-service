"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const images = [
  "/gallery/work-1.png",
  "/gallery/work-2.png",
  "/gallery/work-3.png",
  // "/gallery/work-4.png",
  // "/gallery/work-5.png",
  // "/gallery/work-6.png",
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleOpen = (src: string) => {
    setActiveImage(src);
    setOpen(true);
  };

  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Work Gallery
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A glimpse of our industrial, commercial, and residential
            electrical projects.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => handleOpen(src)}
              className="
                group
                relative
                aspect-[4/3]
                overflow-hidden
                rounded-2xl
                border border-border
                bg-background
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
                focus:outline-none
              "
            >
              {/* Image */}
              <Image
                src={src}
                alt={`Electrical work ${index + 1}`}
                fill
                className="
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Dark overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/0
                  transition
                  group-hover:bg-black/40
                "
              />

              {/* Electric glow */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  bg-gradient-to-br
                  from-primary/20
                  via-transparent
                  to-transparent
                "
              />

              {/* Zoom icon */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  opacity-0
                  scale-90
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:scale-100
                "
              >
                <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-lg">
                  <ZoomIn className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    View
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl bg-background p-3 md:p-4">
          {activeImage && (
            <div className="relative w-full h-[75vh] rounded-xl overflow-hidden">
              <Image
                src={activeImage}
                alt="Electrical work full view"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
