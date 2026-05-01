"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06070a]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_30%_30%,#15171d_0%,#0a0b0e_55%,#06070a_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 noise opacity-[0.18] mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grunge-overlay opacity-40"
      />

      <div className="container-page relative grid items-center gap-y-12 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-12 lg:gap-x-6 lg:pb-36 lg:pt-28">
        <div className="relative z-20 lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-bold uppercase tracking-[0.32em] text-electric-400"
          >
            Pacific Northwest · Electric Powersports
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-5 font-black uppercase italic leading-[0.85] tracking-[-0.045em] text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
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
                className="absolute -bottom-2 left-0 h-[4px] w-32 origin-left bg-gradient-to-r from-cyan-glow via-electric-500 to-transparent sm:w-48"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-xl text-lg font-medium text-white/80 sm:text-xl"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 lg:col-span-7"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 -bottom-2 h-14 bg-black/70 blur-3xl"
            style={{ borderRadius: "50%" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_60%_45%,rgba(125,249,255,0.18),transparent_70%)] blur-2xl"
          />

          <div className="relative w-full lg:-mr-12 xl:-mr-24">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <motion.div
                initial={{ scale: 1, x: "-2%" }}
                animate={{ scale: 1.1, x: "2%" }}
                transition={{
                  duration: 16,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0"
                style={{ filter: "contrast(1.15) saturate(0.92) brightness(0.88)" }}
              >
                <Image
                  src="/images/bikes/sur-ron-light-bee-x.jpg"
                  alt="Sur Ron Light Bee X electric dirt bike"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06070a] via-[#06070a]/30 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#06070a] to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_85%_at_55%_50%,transparent_45%,rgba(0,0,0,0.85)_100%)]" />
              <div className="pointer-events-none absolute inset-0 noise opacity-[0.15] mix-blend-overlay" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px divider-line" />
    </section>
  );
}
