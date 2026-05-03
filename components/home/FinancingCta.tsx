import Link from "next/link";
import Container from "@/components/layout/Container";

export default function FinancingCta() {
  return (
    <section className="relative overflow-hidden border-b border-base-border bg-base-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(201,162,75,0.18),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative grid gap-10 py-section-y-lg md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <p className="eyebrow">Financing</p>
          <h2 className="mt-4 font-display text-display-md text-ink">
            Get on your bike sooner. Flexible terms, fast approvals.
          </h2>
          <p className="mt-4 max-w-prose text-body-lg text-ink-muted">
            Tell us what you ride and how you ride. We will line up a financing or inquiry path that fits, with no pressure and no surprises.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row md:col-span-5 md:justify-end">
          <Link href="/contact" className="btn-primary">
            Request Info
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
