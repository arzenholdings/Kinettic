"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "/bikes", label: "Bikes" },
  { href: "/financing", label: "Financing" },
  { href: "/service", label: "Service" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 glass-header shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-graphite-950/30 backdrop-blur-md"
      }`}
    >
      {/* Hairline glow at the bottom edge once scrolled. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(125,249,255,0.45), transparent)",
        }}
      />

      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Kinetic Moto Sports home"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/10 shadow-glow">
            <Zap className="h-4 w-4 text-cyan-glow" strokeWidth={2.5} />
            <span className="absolute inset-0 animate-pulse-glow rounded-full bg-electric-500/10" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-electric-400">
              Kinetic
            </span>
            <span className="text-base font-bold uppercase tracking-[0.08em] text-white">
              Moto Sports
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group relative text-[13px] font-medium uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-glow transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/bikes" className="btn-primary">
            Shop Bikes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-full border border-white/10 bg-white/5 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 glass-strong md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85 hover:bg-white/5 hover:text-cyan-glow"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                href="/bikes"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Shop Bikes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
