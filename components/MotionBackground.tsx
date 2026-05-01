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
          {/* Light streaks — fewer and dimmer, mostly white. */}
          <motion.div
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.35, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-[26%] left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-white/55 to-transparent"
          />
          <motion.div
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.3, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            className="absolute top-[62%] left-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-glow/45 to-transparent"
          />

          {/* One drifting bloom — tight, off-canvas. */}
          <motion.div
            animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-40 top-1/3 h-[24rem] w-[24rem] rounded-full bg-electric-500/10 blur-3xl"
          />
        </>
      )}

      {particles.map((p) => {
        // Mix dust-colored and faint-cyan particles (mostly dust).
        const dust = p.key % 3 !== 0;
        return (
          <motion.span
            key={p.key}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, dust ? 0.4 : 0.5, 0],
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
            className={
              dust
                ? "absolute rounded-full bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                : "absolute rounded-full bg-cyan-glow shadow-[0_0_6px_rgba(125,249,255,0.5)]"
            }
          />
        );
      })}
    </div>
  );
}
