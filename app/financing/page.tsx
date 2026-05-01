import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CreditCard, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MotionBackground from "@/components/MotionBackground";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Financing — Kinetic Moto Sports",
  description:
    "Flexible financing options for electric motos and e-bikes. Shop Pay, Katapult, Synchrony, and more.",
};

export default function FinancingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <MotionBackground variant="hero" />
        <div className="container-page relative py-20">
          <SectionHeading
            eyebrow="Financing"
            title="Ride sooner. Pay smarter."
            description="Flexible financing options are planned so riders can get into the right electric moto without waiting years to start."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to Us About Options
            </Link>
            <Link href="/bikes" className="btn-ghost">
              Browse Bikes
            </Link>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container-page py-16">
          <SectionHeading
            eyebrow="Partners"
            title="Multiple paths to financing"
            description="We're working with the financing partners riders trust. Logos and final terms will be added as each program goes live."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                name: "Shop Pay",
                blurb:
                  "Split eligible purchases into installments at checkout.",
              },
              {
                name: "Katapult",
                blurb:
                  "Lease-to-own approval flow designed for more flexible credit.",
              },
              {
                name: "Synchrony",
                blurb:
                  "Promotional financing options for qualifying buyers.",
              },
            ].map((p) => (
              <div key={p.name} className="card-surface p-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-electric-400">
                  Financing Partner
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {p.name}
                </div>
                <div className="mt-2 text-xs text-white/40">
                  Logo placeholder
                </div>
                <p className="mt-4 text-sm text-white/65">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-graphite-900/40">
        <div className="container-page py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Why finance"
                title="Get on the right bike now"
                description="Financing means choosing the platform that actually fits how you ride — not just what fits the cash on hand today."
              />
              <ul className="space-y-3 text-sm text-white/75">
                {[
                  "Multiple lender options to fit different credit profiles",
                  "Pre-qualification flows that don't impact your score",
                  "Transparent terms — no surprise fees",
                  "Apply financing toward the bike, parts, and setup",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-glow" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface relative overflow-hidden p-8">
              <MotionBackground />
              <div className="relative space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/10">
                    <Sparkles className="h-5 w-5 text-cyan-glow" />
                  </span>
                  <div className="text-lg font-semibold text-white">
                    Get Pre-Qualified
                  </div>
                </div>
                <p className="text-sm text-white/70">
                  Reach out with the bike you have in mind. We'll point you to
                  the right financing path and walk you through pre-qualification
                  options.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    <CreditCard className="h-4 w-4" />
                    Contact for Pre-Qualification
                  </Link>
                  <Link href="/bikes" className="btn-ghost">
                    See the Lineup
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <ShieldCheck className="h-4 w-4 text-cyan-glow" />
                  Honest answers. No pressure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Pick the bike. We'll handle the rest."
        body="From financing to setup to long-term service, Kinetic Moto Sports is built to make electric moto ownership simple."
        primary={{ href: "/bikes", label: "Shop Bikes" }}
        secondary={{ href: "/contact", label: "Contact Us" }}
      />
    </>
  );
}
