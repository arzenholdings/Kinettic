"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  name: string;
  description: string;
  href: string;
  index?: number;
};

export default function CategoryCard({
  name,
  description,
  href,
  index = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-graphite-900 via-graphite-900 to-graphite-800 p-6 transition hover:border-electric-500/40 hover:shadow-glow"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-electric-500/10 blur-3xl transition group-hover:bg-electric-500/20"
        />
        <div className="relative space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-400">
            Category
          </div>
          <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-glow">
            {name}
          </h3>
          <p className="text-sm text-white/60">{description}</p>
        </div>
        <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium text-white/70 transition group-hover:text-cyan-glow">
          Explore
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.div>
  );
}
