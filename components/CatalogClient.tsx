"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import ProductGrid from "./ProductGrid";
import type { Product, ProductCategory } from "@/lib/products";

type Props = {
  products: Product[];
  allCategories: ProductCategory[];
};

export default function CatalogClient({ products, allCategories }: Props) {
  const params = useSearchParams();
  const initialCategory = params.get("category") ?? "";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const cat = params.get("category") ?? "";
    setCategory(cat);
  }, [params]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchesCat = !category || p.category === category;
      return matchesQuery && matchesCat;
    });
  }, [products, query, category]);

  return (
    <div className="space-y-8">
      <div className="card-surface flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Search bikes, categories, or specs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-graphite-900 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-electric-500/60"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("")}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
              category === ""
                ? "border-electric-500/60 bg-electric-500/15 text-cyan-glow"
                : "border-white/10 bg-white/5 text-white/70 hover:border-electric-500/40 hover:text-cyan-glow"
            }`}
          >
            All
          </button>
          {allCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                category === c
                  ? "border-electric-500/60 bg-electric-500/15 text-cyan-glow"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-electric-500/40 hover:text-cyan-glow"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-white/50">
        <span>
          Showing {filtered.length} of {products.length} bikes
        </span>
        {(query || category) && (
          <button
            onClick={() => {
              setQuery("");
              setCategory("");
            }}
            className="text-cyan-glow hover:text-white"
          >
            Clear filters
          </button>
        )}
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
