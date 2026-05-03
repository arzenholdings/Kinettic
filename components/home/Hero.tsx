import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-base-border bg-base">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base-elevated/40 via-base to-base"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative grid gap-12 py-section-y-lg md:grid-cols-12 md:items-center">
        <div className="md:col-span-6">
          <p className="eyebrow">Kinetic Moto</p>

          <h1 className="mt-6 font-display text-display-xl text-ink">
            Premium Electric Dirt Bikes Built for Serious Riders
          </h1>

          <p className="mt-6 max-w-prose text-body-lg text-ink-muted">
            Engineered for the trail and the track. Silent torque, durable frames, and showroom finish. Pick your model and ride.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/bikes" className="btn-primary">
              Browse Bikes
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request Info
            </Link>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="surface-elevated relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-base-elevated via-base-surface to-base"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,162,75,0.18),transparent_60%)]"
            />
            <div className="relative flex h-full w-full items-center justify-center">
              <span className="eyebrow text-ink-subtle">E-Moto Visual</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
