import Link from "next/link";
import {
  Truck,
  CreditCard,
  Wrench,
  ShieldCheck,
  Zap,
  Volume2,
  TreePine,
  Building2,
  Gauge,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import CategoryCard from "@/components/CategoryCard";
import CTASection from "@/components/CTASection";
import MotionBackground from "@/components/MotionBackground";
import { categories, getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />

      {/* TRUST BAR */}
      <section className="border-y border-white/5 bg-graphite-900/60">
        <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            { icon: Truck, label: "Fast Shipping" },
            { icon: CreditCard, label: "Financing Options" },
            { icon: Wrench, label: "Expert Setup" },
            { icon: ShieldCheck, label: "Parts & Service Support" },
          ].map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-3 text-sm text-white/70"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-electric-500/30 bg-electric-500/10 text-cyan-glow">
                <t.icon className="h-4 w-4" />
              </span>
              <span className="font-medium text-white/85">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED BIKES */}
      <section className="relative">
        <div className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured"
              title="The bikes leading the lineup"
              description="A curated selection of the platforms riders ask about most."
            />
            <Link
              href="/bikes"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-glow hover:text-white"
            >
              View full catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="relative border-t border-white/5 bg-graphite-900/40">
        <div className="container-page py-20">
          <SectionHeading
            eyebrow="Shop"
            title="Browse by category"
            description="Find the right platform for how, where, and how often you ride."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <CategoryCard
                key={c.name}
                name={c.name}
                description={c.description}
                href={c.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="relative overflow-hidden">
        <MotionBackground />
        <div className="container-page relative py-20">
          <SectionHeading
            eyebrow="Performance"
            title="Why electric, done right, wins"
            description="Modern electric platforms aren't a downgrade — they're a different kind of capable."
            align="center"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: Zap,
                title: "Instant Torque",
                body: "Full power from zero RPM. Snap response wherever you twist the throttle.",
              },
              {
                icon: Wrench,
                title: "Low Maintenance",
                body: "No oil, no clutch, no carb — fewer wear items, more time riding.",
              },
              {
                icon: Volume2,
                title: "Quiet Power",
                body: "Stealth-quiet operation that opens up trails and neighborhoods.",
              },
              {
                icon: TreePine,
                title: "Trail Ready",
                body: "Suspension, geometry, and weight tuned for real off-road use.",
              },
              {
                icon: Building2,
                title: "Urban Capable",
                body: "Comfortable, agile, and street-friendly for the daily ride.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="card-surface group relative overflow-hidden p-6 transition hover:border-electric-500/40 hover:shadow-glow"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-electric-500/10 blur-2xl transition group-hover:bg-electric-500/20" />
                <c.icon className="h-7 w-7 text-cyan-glow" strokeWidth={1.6} />
                <h3 className="mt-4 text-base font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KINETIC */}
      <section className="relative border-t border-white/5">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Kinetic Moto Sports"
              title="More than a checkout button"
              description="Kinetic Moto Sports helps riders choose the right electric platform, configure it correctly, and support it after the sale. We are building a modern electric powersports dealership focused on performance, education, financing, and long-term service."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about" className="btn-ghost">
                Read our story
              </Link>
              <Link href="/contact" className="btn-primary">
                Talk to a rider
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="card-surface relative overflow-hidden p-8">
              <MotionBackground />
              <div className="relative grid gap-6 sm:grid-cols-2">
                {[
                  {
                    k: "Real Guidance",
                    v: "Honest, technical advice on which platform fits how you ride.",
                  },
                  {
                    k: "Configured Right",
                    v: "We dial setup, suspension, and electrics before they leave.",
                  },
                  {
                    k: "Long-Term Service",
                    v: "Parts, repairs, and upgrades — even years after the sale.",
                  },
                  {
                    k: "Financing Built-In",
                    v: "Multiple paths to get you on the bike without waiting years.",
                  },
                ].map((x) => (
                  <div key={x.k} className="space-y-1">
                    <Gauge className="h-5 w-5 text-cyan-glow" />
                    <div className="font-semibold text-white">{x.k}</div>
                    <div className="text-sm text-white/60">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCING */}
      <section className="relative border-t border-white/5 bg-graphite-900/40">
        <div className="container-page py-20">
          <SectionHeading
            eyebrow="Financing"
            title="Flexible ways to ride sooner"
            description="Flexible financing options are planned so riders can get into the right electric moto without waiting years to start."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {["Shop Pay", "Katapult", "Synchrony"].map((name) => (
              <div
                key={name}
                className="card-surface flex items-center justify-center px-6 py-10"
              >
                <div className="text-center">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.22em] text-electric-400">
                    Financing Partner
                  </div>
                  <div className="text-2xl font-semibold tracking-tight text-white">
                    {name}
                  </div>
                  <div className="mt-2 text-xs text-white/50">
                    Logo placeholder
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/financing" className="btn-ghost">
              Learn about financing
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section className="relative border-t border-white/5">
        <div className="container-page py-20">
          <SectionHeading
            eyebrow="Service & Support"
            title="A real shop, not just a checkout"
            description="From assembly to upgrades, we support the bikes we sell — and we're building toward a full local service center."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Assembly", body: "Bikes are unboxed, assembled, and prepped before delivery." },
              { title: "Setup", body: "Suspension, controllers, and ergonomics dialed for you." },
              { title: "Parts", body: "Sourcing OEM and aftermarket parts for the platforms we sell." },
              { title: "Repairs", body: "Diagnostics and repair on motors, controllers, and batteries." },
              { title: "Upgrades", body: "Performance upgrades — controllers, batteries, suspension." },
              { title: "Future Showroom", body: "A real local showroom and service center is on the roadmap." },
            ].map((s) => (
              <div key={s.title} className="card-surface p-6">
                <Wrench className="h-6 w-6 text-cyan-glow" />
                <div className="mt-3 text-base font-semibold text-white">
                  {s.title}
                </div>
                <p className="mt-1 text-sm text-white/60">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
