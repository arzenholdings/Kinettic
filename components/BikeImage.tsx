"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
};

// Renders a bike image, gracefully falling back to a styled placeholder when
// the file is missing in /public/images/bikes/.
export default function BikeImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = true,
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-graphite-800 via-graphite-900 to-graphite-950 ${className}`}
      >
        <div className="absolute inset-0 bg-grid-fine opacity-30" />
        <div className="relative z-10 flex flex-col items-center gap-2 text-center text-white/50">
          <ImageOff className="h-7 w-7 text-electric-400/70" />
          <span className="px-3 text-xs uppercase tracking-[0.2em] text-electric-400/80">
            Image Placeholder
          </span>
          <span className="px-3 text-[11px] text-white/40">
            Drop file at <span className="text-white/70">{src}</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      className={`object-cover ${className}`}
      onError={() => setErrored(true)}
      priority={priority}
    />
  );
}
