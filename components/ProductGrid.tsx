import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
  emptyText?: string;
};

export default function ProductGrid({
  products,
  emptyText = "No bikes match your filters yet.",
}: Props) {
  if (products.length === 0) {
    return (
      <div className="card-surface flex items-center justify-center px-6 py-20 text-center text-sm text-white/60">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} index={i} />
      ))}
    </div>
  );
}
