import Link from "next/link";
import { Zap, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-graphite-950">
      <div className="absolute inset-x-0 top-0 h-px divider-line" />
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/10 shadow-glow">
              <Zap className="h-4 w-4 text-cyan-glow" strokeWidth={2.5} />
            </span>
            <div className="leading-tight">
              <div className="text-[11px] uppercase tracking-[0.2em] text-electric-400">
                Kinetic
              </div>
              <div className="text-base font-semibold">Moto Sports</div>
            </div>
          </Link>
          <p className="text-sm text-white/60">
            Electric Motion. Activated. A modern electric powersports
            dealership built for the next generation of riders.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-electric-400">
            Shop
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/bikes" className="hover:text-cyan-glow">All Bikes</Link></li>
            <li><Link href="/bikes?category=Electric+Dirt+Bikes" className="hover:text-cyan-glow">Dirt Bikes</Link></li>
            <li><Link href="/bikes?category=Street+%2F+Urban+E-Motos" className="hover:text-cyan-glow">Urban E-Motos</Link></li>
            <li><Link href="/bikes?category=Performance+Builds" className="hover:text-cyan-glow">Performance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-electric-400">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/financing" className="hover:text-cyan-glow">Financing</Link></li>
            <li><Link href="/service" className="hover:text-cyan-glow">Service & Setup</Link></li>
            <li><Link href="/about" className="hover:text-cyan-glow">About</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-glow">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-electric-400">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-electric-400" />
              Washington / Pacific Northwest
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-electric-400" />
              hello@kineticmotosports.com
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-electric-400" />
              (Coming soon)
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Kinetic Moto Sports. All rights
            reserved.
          </span>
          <span>
            Pricing, specs, and availability subject to change. Contact for
            details.
          </span>
        </div>
      </div>
    </footer>
  );
}
