import type { Metadata } from "next";
import {
  Wrench,
  Cpu,
  Box,
  ShieldCheck,
  Zap,
  Building2,
  Settings,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MotionBackground from "@/components/MotionBackground";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Service & Support — Kinetic Moto Sports",
  description:
    "Setup, assembly, diagnostics, repairs, parts, and upgrades for the electric moto platforms we sell.",
};

const services = [
  {
    icon: Box,
    title: "Assembly",
    body: "Bikes are unboxed, assembled, and prepped before delivery — torque-spec'd and inspected.",
  },
  {
    icon: Settings,
    title: "Setup",
    body: "Suspension sag, controller mapping, ergonomics, and tire pressures dialed for how you ride.",
  },
  {
    icon: Cpu,
    title: "Diagnostics",
    body: "Motor, controller, BMS, and battery diagnostics on the platforms we support.",
  },
  {
    icon: Wrench,
    title: "Repairs",
    body: "Mechanical and electrical repair for trail, MX, and street platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Parts Sourcing",
    body: "OEM and aftermarket parts for the bikes in our lineup — sourced and installed.",
  },
  {
    icon: Zap,
    title: "Upgrades",
    body: "Controllers, batteries, suspension, and chassis upgrades to match your goals.",
  },
];

export default function ServicePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <MotionBackground variant="hero" />
        <div className="container-page relative py-20">
          <SectionHeading
            eyebrow="Service & Support"
            title="More than a reseller"
            description="Kinetic Moto Sports is built to back up every bike we sell — and to be a real long-term resource for the riders we work with."
          />
        </div>
      </section>

      <section className="relative">
        <div className="container-page py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-surface group relative overflow-hidden p-6 transition hover:border-electric-500/40 hover:shadow-glow"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-electric-500/10 blur-2xl transition group-hover:bg-electric-500/20" />
                <s.icon
                  className="h-7 w-7 text-cyan-glow"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-white/65">{s.body}</p>
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
                eyebrow="Roadmap"
                title="A real local showroom is coming"
                description="We're building toward a Pacific Northwest showroom and service center — a real place to see, touch, demo, and have your bike serviced by people who know the platforms."
              />
              <ul className="space-y-3 text-sm text-white/75">
                {[
                  "Demo bikes for in-person rides",
                  "Walk-in service for the platforms we sell",
                  "Performance & trail-ready upgrade builds",
                  "Rider education, group rides, and community",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-glow" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-surface relative overflow-hidden p-8">
              <MotionBackground />
              <div className="relative">
                <Building2 className="h-8 w-8 text-cyan-glow" />
                <h3 className="mt-3 text-xl font-semibold text-white">
                  Future Showroom & Service Center
                </h3>
                <p className="mt-2 text-sm text-white/65">
                  Located in Washington / Pacific Northwest. Until the doors
                  open, every bike is configured, prepped, and supported
                  remotely with the same standards we'll bring to the
                  showroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need service or parts?"
        body="Tell us what you're riding and what you need. We'll get back fast."
        primary={{ href: "/contact", label: "Contact Service" }}
        secondary={{ href: "/bikes", label: "Browse Bikes" }}
      />
    </>
  );
}
