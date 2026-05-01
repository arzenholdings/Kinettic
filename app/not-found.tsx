import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MotionBackground from "@/components/MotionBackground";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <MotionBackground variant="hero" />
      <div className="container-page relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-electric-400">
          404
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="text-gradient-electric">Lost the trail.</span>
        </h1>
        <p className="mt-3 max-w-md text-white/65">
          The page you're after doesn't exist — or hasn't been built yet.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/bikes" className="btn-ghost">
            Browse Bikes
          </Link>
        </div>
      </div>
    </section>
  );
}
