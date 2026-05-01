"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MotionBackground from "./MotionBackground";

type Props = {
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export default function CTASection({
  title = "Ready to activate your ride?",
  body = "Talk to a real human about the right electric platform, financing, and setup for how you ride.",
  primary = { href: "/bikes", label: "Shop Bikes" },
  secondary = { href: "/contact", label: "Contact Us" },
}: Props) {
  return (
    <section className="relative">
      <div className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-graphite-900 via-graphite-900 to-graphite-800 px-8 py-16 sm:px-12">
          <MotionBackground />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-electric">{title}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={primary.href} className="btn-primary">
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={secondary.href} className="btn-ghost">
                {secondary.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
