"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-graphite-950/70 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Kinetic Moto Sports home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/10 shadow-glow">
            <Zap className="h-4 w-4 text-cyan-glow" strokeWidth={2.5} />
            <span className="absolute inset-0 animate-pulse-glow rounded-full bg-electric-500/10" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[11px] uppercase tracking-[0.2em] text-electric-400">
              Kinetic
            </span>
            <span className="text-base font-semibold tracking-tight">
              Moto Sports
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/70 transition hover:text-cyan-glow"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/bikes" className="btn-primary">
            Shop Bikes
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
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-cyan-glow"
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
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
