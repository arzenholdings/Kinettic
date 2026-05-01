"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import MotionBackground from "./MotionBackground";
import BikeImage from "./BikeImage";
import { getFeaturedProducts } from "@/lib/products";

export default function Hero() {
  const hero = getFeaturedProducts()[0];

  return (
    <section className="relative isolate overflow-hidden">
      <MotionBackground variant="hero" />

      {/* Hard cinematic vignette at edges. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_30%,transparent_45%,rgba(0,0,0,0.65)_100%)]"
      />

      <div className="container-page relative grid items-center gap-10 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-12 lg:gap-6 lg:pb-32 lg:pt-28">
        <div className="relative z-10 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-glow"
          >
            <Zap className="h-3 w-3" />
            Pacific Northwest · Online Dealership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 font-bold uppercase leading-[0.92] tracking-[-0.02em] text-6xl sm:text-7xl lg:text-[5.75rem] xl:text-[6.5rem]"
          >
            <span className="block text-white">Electric</span>
            <span className="block text-gradient-electric">Motion.</span>
            <span className="relative block text-white">
              Activated.
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-[3px] w-28 origin-left bg-gradient-to-r from-cyan-glow via-electric-500 to-transparent sm:w-40"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg text-white/75 sm:text-xl"
          >
            Built for performance. Tuned for the next generation of riding —
            instant torque, silent power, premium platforms ready to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link href="/bikes" className="btn-primary">
              Shop Bikes
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/financing" className="btn-ghost">
              Explore Financing
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {[
              { k: "75+", v: "MPH Top Tier" },
              { k: "80mi", v: "Max Range" },
              { k: "0%", v: "Emissions" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-semibold text-cyan-glow sm:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured bike image. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl lg:max-w-none">
            {/* Soft bloom behind bike. */}
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-electric-500/15 blur-3xl" />
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(125,249,255,0.22),transparent_75%)]"
            />

            {/* Slow rotating ring accents. */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-4 rounded-[2rem] border border-electric-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-10 rounded-[1.5rem] border border-cyan-glow/15"
            />

            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-graphite-900/40 shadow-[0_30px_120px_-20px_rgba(34,184,255,0.45)] backdrop-blur"
            >
              {hero && (
                <BikeImage
                  src={hero.image}
                  alt={hero.name}
                  priority
                />
              )}
              {/* Gradient overlay on bike for moody look. */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-graphite-950/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_20%,rgba(125,249,255,0.18),transparent_60%)]" />

              {/* Floating chip. */}
              {hero && (
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-electric-400">
                      Featured · Flagship
                    </div>
                    <div className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {hero.name}
                    </div>
                  </div>
                  <Link
                    href={`/bikes/${hero.slug}`}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-graphite-950/60 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur transition hover:border-electric-500/60 hover:bg-electric-500/10 hover:text-cyan-glow"
                  >
                    View
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px divider-line" />
    </section>
  );
}
