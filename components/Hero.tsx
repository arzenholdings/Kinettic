"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bike, Zap } from "lucide-react";
import MotionBackground from "./MotionBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <MotionBackground variant="hero" />

      <div className="container-page relative grid items-center gap-10 py-20 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-glow"
          >
            <Zap className="h-3 w-3" />
            Pacific Northwest · Online Dealership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient-electric">Electric Motion.</span>
            <br />
            <span className="text-white">Activated.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-white/70"
          >
            High-performance electric motos, e-bikes, parts, financing, and
            support for the next generation of riders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
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
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { k: "75+", v: "MPH Top Tier" },
              { k: "80mi", v: "Max Range" },
              { k: "0%", v: "Emissions" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-semibold text-cyan-glow">
                  {s.k}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-electric-500/15 blur-3xl" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-electric-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-cyan-glow/20"
            />
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-full w-full items-center justify-center"
            >
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-electric-500/40 bg-graphite-900/60 shadow-glow-strong backdrop-blur">
                <Bike
                  className="h-24 w-24 text-cyan-glow"
                  strokeWidth={1.25}
                />
                <span className="absolute -bottom-3 rounded-full border border-electric-500/40 bg-graphite-950 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-electric-400">
                  Activate
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px divider-line" />
    </section>
  );
}
