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
          initial={{ scale: 1, x: "-3%" }}
          animate={{ scale: 1.12, x: "3%" }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
          style={{
            filter: "contrast(1.18) saturate(0.85) brightness(0.78)",
          }}
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

        {/* Faint trailing motion-blur ghost — sells the "moving footage" feel. */}
        <motion.div
          initial={{ scale: 1.04, x: "-2%", opacity: 0 }}
          animate={{ scale: 1.16, x: "2%", opacity: [0, 0.18, 0] }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 mix-blend-screen blur-md"
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Heavy darkening so the bike pops. */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Directional light bias — keeps cyan only as a tight accent. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/55" />

        {/* Tight cyan rim glow only on one quadrant — no more "everything is blue". */}
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-electric-500/12 blur-[120px]" />

        {/* Strong vignette so edges fade into darkness. */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_45%,transparent_35%,rgba(0,0,0,0.95)_100%)]" />

        {/* Grit / grunge layer — broad streaks + film grain. */}
        <div className="absolute inset-0 grunge-overlay opacity-60" />
        <div className="absolute inset-0 noise opacity-[0.16] mix-blend-overlay" />
      </div>

      {/* Particles + light streaks layer (toned down). */}
      <MotionBackground variant="hero" />

      <div className="container-page relative z-10 flex min-h-[640px] flex-col justify-end pb-16 pt-24 md:min-h-[720px] md:pb-24 md:pt-28 lg:min-h-[800px] lg:pb-32 lg:pt-32">
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
          className="mt-6 max-w-5xl font-black uppercase italic leading-[0.86] tracking-[-0.04em] text-7xl sm:text-8xl lg:text-[7.25rem] xl:text-[8.25rem]"
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
              className="absolute -bottom-2 left-0 h-[4px] w-32 origin-left bg-gradient-to-r from-cyan-glow via-electric-500 to-transparent sm:w-56"
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

      <div className="absolute inset-x-0 bottom-0 h-px divider-line" />
    </section>
  );
}
