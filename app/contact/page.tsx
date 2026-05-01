import { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MotionBackground from "@/components/MotionBackground";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Kinetic Moto Sports",
  description:
    "Talk to Kinetic Moto Sports about bikes, financing, setup, parts, or service.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <MotionBackground variant="hero" />
        <div className="container-page relative py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to a real human"
            description="Questions about a specific bike, setup, financing, or service? Send us a note — we respond fast."
          />
        </div>
      </section>

      <section className="relative">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <div className="card-surface p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/10 text-cyan-glow">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Email
                  </div>
                  <div className="text-sm font-medium text-white">
                    hello@kineticmotosports.com
                  </div>
                </div>
              </div>
            </div>
            <div className="card-surface p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/10 text-cyan-glow">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Phone
                  </div>
                  <div className="text-sm font-medium text-white">
                    Coming soon
                  </div>
                </div>
              </div>
            </div>
            <div className="card-surface p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/10 text-cyan-glow">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Based In
                  </div>
                  <div className="text-sm font-medium text-white">
                    Washington / Pacific Northwest
                  </div>
                </div>
              </div>
            </div>

            <div className="card-surface p-6">
              <div className="text-sm font-semibold text-white">
                Service hours
              </div>
              <p className="mt-2 text-sm text-white/65">
                Online support available throughout the week. Local
                showroom hours will be posted as the storefront launches.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Suspense
              fallback={
                <div className="card-surface px-6 py-20 text-center text-sm text-white/60">
                  Loading form…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
