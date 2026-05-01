"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import BikeImage from "./BikeImage";

type Props = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <Link
        href={`/bikes/${product.slug}`}
        className="edge-glow relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-graphite-900/70 backdrop-blur transition duration-300 group-hover:border-electric-500/50 group-hover:shadow-glow-card"
      >
        {/* Image — large, dominant. */}
        <div className="relative aspect-[5/4] w-full overflow-hidden bg-graphite-800">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <BikeImage src={product.image} alt={product.name} />
          </motion.div>

          {/* Soft glow wash that intensifies on hover. */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_10%,rgba(125,249,255,0.18),transparent_60%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Bottom gradient for legibility of any badge over image. */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent" />

          {product.badge && (
            <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-electric-500/40 bg-graphite-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-glow backdrop-blur">
              {product.badge}
            </span>
          )}
          <span className="absolute right-4 top-4 inline-flex items-center rounded-full border border-white/10 bg-graphite-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur">
            {product.category}
          </span>
        </div>

        {/* Body — compact. */}
        <div className="flex flex-1 flex-col gap-2 p-5 pt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-white transition group-hover:text-cyan-glow">
              {product.name}
            </h3>
            <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-hover:border-electric-500/60 group-hover:bg-electric-500/10 group-hover:text-cyan-glow">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="line-clamp-2 text-sm text-white/60">
            {product.shortDescription}
          </p>

          <div className="mt-3 flex items-end justify-between gap-3 border-t border-white/5 pt-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Price
              </div>
              <div className="text-sm font-semibold text-white">
                {product.priceLabel}
              </div>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-400 transition group-hover:text-cyan-glow">
              Details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
