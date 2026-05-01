"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Props = {
  variant?: "hero" | "section";
  className?: string;
};

export default function MotionBackground({
  variant = "section",
  className = "",
}: Props) {
  // Deterministic particle layout — avoids SSR/CSR mismatch.
  const particles = useMemo(
    () =>
      Array.from({ length: variant === "hero" ? 28 : 14 }).map((_, i) => {
        const seed = (i + 1) * 9301;
        const r = (seed * 49297) % 233280;
        const top = (r % 100) / 100;
        const left = ((r >> 3) % 100) / 100;
        const size = 1 + (((r >> 5) % 30) / 10);
        const delay = ((r >> 7) % 60) / 10;
        const duration = 4 + (((r >> 9) % 60) / 10);
        return { top, left, size, delay, duration, key: i };
      }),
    [variant],
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid-fine opacity-50 mask-fade-y" />

      {variant === "hero" && (
        <>
          <motion.div
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute top-[18%] left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-glow/70 to-transparent"
          />
          <motion.div
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.4, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            className="absolute top-[58%] left-0 h-px w-1/2 bg-gradient-to-r from-transparent via-electric-500/60 to-transparent"
          />
          <motion.div
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.35, 0] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
            }}
            className="absolute top-[78%] left-0 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent"
          />
        </>
      )}

      {particles.map((p) => (
        <motion.span
          key={p.key}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-10, -40, -80],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{
            top: `${p.top * 100}%`,
            left: `${p.left * 100}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          className="absolute rounded-full bg-cyan-glow shadow-[0_0_8px_rgba(125,249,255,0.7)]"
        />
      ))}
    </div>
  );
}
