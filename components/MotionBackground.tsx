"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Props = {
  variant?: "hero" | "section" | "soft";
  className?: string;
};

export default function MotionBackground({
  variant = "section",
  className = "",
}: Props) {
  const particleCount = variant === "hero" ? 22 : variant === "soft" ? 6 : 10;

  // Deterministic particle layout to avoid SSR/CSR mismatch.
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }).map((_, i) => {
        const seed = (i + 1) * 9301;
        const r = (seed * 49297) % 233280;
        const top = (r % 100) / 100;
        const left = ((r >> 3) % 100) / 100;
        const size = 1 + (((r >> 5) % 28) / 10);
        const delay = ((r >> 7) % 60) / 10;
        const duration = 5 + (((r >> 9) % 60) / 10);
        return { top, left, size, delay, duration, key: i };
      }),
    [particleCount],
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Organic moving aurora gradients. */}
      <div className="absolute inset-0 aurora-field opacity-90" />

      {/* Soft directional glow from top. */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,184,255,0.18),transparent_70%)]" />

      {/* Very subtle grid, masked off so it doesn't read as "tech dashboard". */}
      {variant !== "soft" && (
        <div className="absolute inset-0 bg-grid-fine opacity-30 mask-radial" />
      )}

      {/* Subtle film noise. */}
      <div className="absolute inset-0 noise opacity-[0.06]" />

      {variant === "hero" && (
        <>
          {/* Light streaks. */}
          <motion.div
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.55, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute top-[22%] left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-glow/80 to-transparent"
          />
          <motion.div
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.45, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            className="absolute top-[58%] left-0 h-px w-1/2 bg-gradient-to-r from-transparent via-electric-500/70 to-transparent"
          />
          <motion.div
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.4, 0] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
            }}
            className="absolute top-[80%] left-0 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent"
          />

          {/* Slow drifting bloom orbs. */}
          <motion.div
            animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-electric-500/15 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 20, 0], y: [0, 20, -10, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 top-1/2 h-[26rem] w-[26rem] rounded-full bg-cyan-glow/10 blur-3xl"
          />
        </>
      )}

      {particles.map((p) => (
        <motion.span
          key={p.key}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.55, 0],
            y: [-10, -50, -100],
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
