import { Suspense } from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CatalogClient from "@/components/CatalogClient";
import MotionBackground from "@/components/MotionBackground";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Bikes — Kinetic Moto Sports",
  description:
    "Browse the full Kinetic Moto Sports catalog of electric motos and e-bikes.",
};

export default function CatalogPage() {
  const allCategories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <MotionBackground />
        <div className="container-page relative py-20">
          <SectionHeading
            eyebrow="Catalog"
            title="The full lineup"
            description="Every electric moto and e-bike currently in our lineup. Search, filter, and find the platform that fits how you ride."
          />
        </div>
      </section>

      <section className="relative">
        <div className="container-page py-16">
          <Suspense
            fallback={
              <div className="card-surface px-6 py-20 text-center text-sm text-white/60">
                Loading catalog…
              </div>
            }
          >
            <CatalogClient
              products={products}
              allCategories={allCategories}
            />
          </Suspense>
        </div>
      </section>

      <CTASection
        title="Not sure which bike fits?"
        body="Tell us how and where you ride and we'll point you to the right platform."
        primary={{ href: "/contact", label: "Get a Recommendation" }}
        secondary={{ href: "/financing", label: "See Financing" }}
      />
    </>
  );
}
