import type { Metadata } from "next";
import { MapPin, Compass, Users, Wrench } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MotionBackground from "@/components/MotionBackground";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — Kinetic Moto Sports",
  description:
    "Kinetic Moto Sports brings a modern, technical, and trustworthy electric moto buying experience to riders.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <MotionBackground variant="hero" />
        <div className="container-page relative py-20">
          <SectionHeading
            eyebrow="About"
            title="Built for the next generation of riders"
            description="Kinetic Moto Sports was created to bring a more modern, technical, and trustworthy electric moto buying experience to riders. The goal is to combine online catalog depth with real technical guidance, support, financing, and future local service."
          />
        </div>
      </section>

      <section className="relative">
        <div className="container-page py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Compass,
                title: "Modern Buying",
                body: "Catalog depth, transparent pricing, and the technical detail you actually need.",
              },
              {
                icon: Wrench,
                title: "Real Support",
                body: "Setup, parts, repairs, and upgrades — long after the sale is closed.",
              },
              {
                icon: Users,
                title: "Rider First",
                body: "Honest guidance from people who care which bike actually fits how you ride.",
              },
              {
                icon: MapPin,
                title: "Local Future",
                body: "A Pacific Northwest showroom and service center is on the roadmap.",
              },
            ].map((c) => (
              <div key={c.title} className="card-surface p-6">
                <c.icon className="h-6 w-6 text-cyan-glow" />
                <h3 className="mt-3 text-base font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-white/65">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-graphite-900/40">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-3">
          <SectionHeading
            eyebrow="Our story"
            title="Where Kinetic comes from"
          />
          <div className="space-y-5 text-white/75 lg:col-span-2">
            <p>
              The electric moto category is exploding — but the buying
              experience hasn't kept up. Too many sites are thin catalog
              dumps. Too many shops can't actually service what they sell.
              Riders deserve better.
            </p>
            <p>
              Kinetic Moto Sports is being built to fix that. We're combining
              the depth of a real online catalog with the technical guidance
              of a true dealership: real conversations about the right bike,
              real setup before delivery, and real support after.
            </p>
            <p>
              We're based in Washington / Pacific Northwest, with plans for a
              full showroom and service center as the brand grows. Until then,
              we're working with riders one-on-one to make sure each bike is
              the right fit — and that it stays that way for years.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ride with us."
        body="Whatever stage you're at — first electric or fifth — we'll meet you there."
        primary={{ href: "/bikes", label: "Browse Bikes" }}
        secondary={{ href: "/contact", label: "Get In Touch" }}
      />
    </>
  );
}
