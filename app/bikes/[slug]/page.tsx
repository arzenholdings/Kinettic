import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";
import BikeImage from "@/components/BikeImage";
import MotionBackground from "@/components/MotionBackground";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Bike — Kinetic Moto Sports" };
  return {
    title: `${product.name} — Kinetic Moto Sports`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: Params) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <MotionBackground variant="hero" />
        <div className="container-page relative py-12">
          <Link
            href="/bikes"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-cyan-glow"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to catalog
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-graphite-800 shadow-glow">
                <BikeImage
                  src={product.image}
                  alt={product.name}
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite-950/70 via-transparent" />
              </div>
            </div>

            <div>
              {product.badge && (
                <span className="inline-flex items-center rounded-full border border-electric-500/40 bg-electric-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-glow">
                  {product.badge}
                </span>
              )}
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="text-gradient-electric">{product.name}</span>
              </h1>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50">
                {product.category}
              </div>
              <p className="mt-5 text-lg text-white/75">
                {product.shortDescription}
              </p>

              <div className="mt-7 card-surface px-5 py-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Pricing
                </div>
                <div className="mt-1 text-xl font-semibold text-white">
                  {product.priceLabel}
                </div>
                {product.financingAvailable && (
                  <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-cyan-glow">
                    <CreditCard className="h-3.5 w-3.5" />
                    Financing options available
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/contact?bike=${encodeURIComponent(product.name)}`}
                  className="btn-primary"
                >
                  <MessageSquare className="h-4 w-4" />
                  Request Quote
                </Link>
                <Link href="/financing" className="btn-ghost">
                  <CreditCard className="h-4 w-4" />
                  Ask About Financing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="relative">
        <div className="container-page py-16">
          <SectionHeading
            eyebrow="Specifications"
            title="The numbers behind the ride"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.specs.map((s) => (
              <div key={s.label} className="card-surface p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-electric-400">
                  {s.label}
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      {product.longDescription && (
        <section className="relative border-t border-white/5 bg-graphite-900/40">
          <div className="container-page grid gap-10 py-16 lg:grid-cols-3">
            <SectionHeading
              eyebrow="Overview"
              title="About this bike"
            />
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-white/75">
                {product.longDescription}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Pre-delivery assembly & inspection",
                  "Suspension & ergonomics setup",
                  "Battery & controller verification",
                  "Owner walkthrough included",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-white/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-glow" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FINANCING / SUPPORT CALLOUT */}
      <section className="relative border-t border-white/5">
        <div className="container-page py-16">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card-surface relative overflow-hidden p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-electric-500/10 blur-3xl" />
              <CreditCard className="h-7 w-7 text-cyan-glow" />
              <h3 className="mt-3 text-xl font-semibold text-white">
                Flexible Financing
              </h3>
              <p className="mt-2 text-sm text-white/65">
                Multiple paths to ride sooner. Ask about Shop Pay, Katapult,
                or Synchrony — and which fits your situation.
              </p>
              <Link
                href="/financing"
                className="mt-4 inline-flex text-sm font-medium text-cyan-glow hover:text-white"
              >
                Explore financing →
              </Link>
            </div>
            <div className="card-surface relative overflow-hidden p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-electric-500/10 blur-3xl" />
              <Wrench className="h-7 w-7 text-cyan-glow" />
              <h3 className="mt-3 text-xl font-semibold text-white">
                Setup & Service Included
              </h3>
              <p className="mt-2 text-sm text-white/65">
                Every bike gets professionally assembled, dialed, and
                inspected. Long-term parts and service support included.
              </p>
              <Link
                href="/service"
                className="mt-4 inline-flex text-sm font-medium text-cyan-glow hover:text-white"
              >
                See what we cover →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="relative border-t border-white/5 bg-graphite-900/40">
          <div className="container-page py-16">
            <SectionHeading
              eyebrow="More to ride"
              title="Related bikes"
            />
            <ProductGrid products={related} />
          </div>
        </section>
      )}

      <CTASection
        title="Want this bike configured for you?"
        body="Tell us how you ride. We'll dial setup, suspension, and electrics before delivery."
        primary={{
          href: `/contact?bike=${encodeURIComponent(product.name)}`,
          label: "Request a Quote",
        }}
        secondary={{ href: "/bikes", label: "Browse More" }}
      />
    </>
  );
}
