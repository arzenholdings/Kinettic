"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import MotionBackground from "./MotionBackground";

const HERO_IMAGE = "/images/bikes/sur-ron-light-bee-x.jpg";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Cinematic background image with Ken Burns motion. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1, x: "-1.5%" }}
          animate={{ scale: 1.1, x: "1.5%" }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Color grade + darken: makes the still feel like cinematic footage. */}
        <div className="absolute inset-0 bg-graphite-950/55" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_30%,rgba(34,184,255,0.28),transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/90 via-graphite-950/55 to-graphite-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/10 to-graphite-950/40" />

        {/* Subtle film noise + faint vignette. */}
        <div className="absolute inset-0 noise opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_40%,transparent_50%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Particles + light streaks layer. */}
      <MotionBackground variant="hero" />

      <div className="container-page relative z-10 flex min-h-[640px] flex-col justify-end pb-16 pt-24 md:min-h-[720px] md:pb-24 md:pt-28 lg:min-h-[780px] lg:pb-32 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-glow backdrop-blur"
        >
          <Zap className="h-3 w-3" />
          Pacific Northwest · Online Dealership
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 max-w-5xl font-bold uppercase leading-[0.92] tracking-[-0.02em] text-6xl sm:text-7xl lg:text-[6rem] xl:text-[7rem]"
        >
          <span className="block text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
            Electric
          </span>
          <span className="block text-gradient-electric">Motion.</span>
          <span className="relative block text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
            Activated.
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 h-[3px] w-32 origin-left bg-gradient-to-r from-cyan-glow via-electric-500 to-transparent sm:w-48"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 max-w-xl text-lg text-white/80 sm:text-xl"
        >
          Built for performance. Tuned for the next generation of riding —
          instant torque, silent power, premium platforms ready to launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px divider-line" />
    </section>
  );
}
