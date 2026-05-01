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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <Link
        href={`/bikes/${product.slug}`}
        className="card-surface relative flex h-full flex-col overflow-hidden transition group-hover:border-electric-500/40 group-hover:shadow-glow"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite-800">
          <BikeImage src={product.image} alt={product.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/30 to-transparent" />
          {product.badge && (
            <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-electric-500/40 bg-graphite-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-glow backdrop-blur">
              {product.badge}
            </span>
          )}
          <span className="absolute right-4 top-4 inline-flex items-center rounded-full border border-white/10 bg-graphite-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/60 backdrop-blur">
            {product.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-lg font-semibold tracking-tight text-white transition group-hover:text-cyan-glow">
            {product.name}
          </h3>
          <p className="text-sm text-white/60">{product.shortDescription}</p>

          <div className="mt-auto flex items-end justify-between gap-3 pt-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Price
              </div>
              <div className="text-sm font-semibold text-white">
                {product.priceLabel}
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition group-hover:border-electric-500/60 group-hover:bg-electric-500/10 group-hover:text-cyan-glow">
              View Details
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
