"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import MotionBackground from "./MotionBackground";

const HERO_IMAGE = "/images/bikes/sur-ron-light-bee-x.jpg";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-graphite-950">
      <MotionBackground variant="hero" />

      <div className="container-page relative z-10 grid items-center gap-10 pb-16 pt-20 md:pb-24 md:pt-24 lg:grid-cols-12 lg:gap-8 lg:pb-32 lg:pt-28">
        {/* LEFT — content */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 border border-electric-500/40 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-glow backdrop-blur"
          >
            <Zap className="h-3 w-3" />
            Pacific Northwest · Online Dealership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 font-black uppercase italic leading-[0.86] tracking-[-0.04em] text-6xl sm:text-7xl lg:text-[5.75rem] xl:text-[6.5rem]"
          >
            <span className="block text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
              Electric
            </span>
            <span className="block text-gradient-electric drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
              Motion.
            </span>
            <span className="relative block text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
              Activated.
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-[4px] w-32 origin-left bg-gradient-to-r from-cyan-glow via-electric-500 to-transparent sm:w-48"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-xl text-lg font-medium text-white/85 sm:text-xl"
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
            <Link href="/bikes" className="btn-moto">
              Shop Bikes
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/financing" className="btn-moto-ghost">
              Explore Financing
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6"
          >
            {[
              { k: "75+", v: "MPH Top Tier" },
              { k: "80mi", v: "Max Range" },
              { k: "0%", v: "Emissions" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-black uppercase italic tracking-tight text-white sm:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — large real bike image, no icons / orbs / rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative lg:col-span-6"
        >
          <div className="relative aspect-[5/4] w-full overflow-hidden lg:aspect-[4/5] xl:aspect-[5/4]">
            {/* Slow zoom + slight pan, contrast-graded for moto feel. */}
            <motion.div
              initial={{ scale: 1, x: "-1.5%" }}
              animate={{ scale: 1.1, x: "1.5%" }}
              transition={{
                duration: 16,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0"
              style={{
                filter: "contrast(1.15) saturate(0.9) brightness(0.85)",
              }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Sur Ron Light Bee X electric dirt bike"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Dark gradient overlay — keeps the bike the focal point */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-black/15 to-graphite-950/85" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/10 to-graphite-950/40" />

            {/* Tight cyan rim glow on right edge only */}
            <div className="pointer-events-none absolute -right-32 top-1/3 h-[20rem] w-[20rem] rounded-full bg-electric-500/15 blur-[120px]" />

            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_85%_at_55%_45%,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

            {/* Grunge + grain */}
            <div className="pointer-events-none absolute inset-0 grunge-overlay opacity-50" />
            <div className="pointer-events-none absolute inset-0 noise opacity-[0.14] mix-blend-overlay" />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px divider-line" />
    </section>
  );
}
