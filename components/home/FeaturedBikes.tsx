import Link from "next/link";
import Container from "@/components/layout/Container";

type FeaturedBike = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  topSpeedMph: number;
  rangeMiles: number;
  power: string;
  priceUsd: number;
  imageAlt: string;
};

const placeholderBikes: FeaturedBike[] = [
  {
    slug: "apex-pro",
    name: "Apex Pro",
    tagline: "Track-grade torque. Showroom finish.",
    category: "Track",
    topSpeedMph: 85,
    rangeMiles: 75,
    power: "20 kW",
    priceUsd: 12900,
    imageAlt: "Kinetic Moto Apex Pro electric dirt bike",
  },
  {
    slug: "ridge-rs",
    name: "Ridge RS",
    tagline: "Trail-tuned. Built to climb.",
    category: "Trail",
    topSpeedMph: 65,
    rangeMiles: 90,
    power: "14 kW",
    priceUsd: 9800,
    imageAlt: "Kinetic Moto Ridge RS electric dirt bike",
  },
  {
    slug: "vanta-x",
    name: "Vanta X",
    tagline: "Stealth chassis. Uncompromising range.",
    category: "Dual Sport",
    topSpeedMph: 80,
    rangeMiles: 110,
    power: "18 kW",
    priceUsd: 14500,
    imageAlt: "Kinetic Moto Vanta X electric dirt bike",
  },
];

function formatPrice(usd: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(usd);
}

function BikeCard({ bike }: { bike: FeaturedBike }) {
  return (
    <Link
      href={`/bikes/${bike.slug}`}
      className="group surface-elevated relative flex flex-col overflow-hidden rounded-md transition-colors duration-200 ease-brand hover:border-accent"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-base-elevated via-base-surface to-base"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,162,75,0.15),transparent_60%)] transition-opacity duration-300 group-hover:opacity-80"
        />
        <div className="relative flex h-full w-full items-center justify-center">
          <span className="eyebrow text-ink-subtle">{bike.imageAlt}</span>
        </div>
        <span className="absolute left-4 top-4 rounded-sm border border-base-border bg-base/70 px-2 py-1 text-eyebrow text-ink-muted backdrop-blur">
          {bike.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-heading-lg text-ink">{bike.name}</h3>
          <p className="mt-2 text-body-sm text-ink-muted">{bike.tagline}</p>
        </div>

        <dl className="grid grid-cols-3 gap-4 border-t border-base-border pt-4 text-ink">
          <div>
            <dt className="eyebrow text-ink-subtle">Top</dt>
            <dd className="mt-1 text-body-md">{bike.topSpeedMph} mph</dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-subtle">Range</dt>
            <dd className="mt-1 text-body-md">{bike.rangeMiles} mi</dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-subtle">Power</dt>
            <dd className="mt-1 text-body-md">{bike.power}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-body-md text-ink">{formatPrice(bike.priceUsd)}</span>
          <span className="text-body-sm uppercase tracking-wider text-accent group-hover:text-accent-hover">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedBikes() {
  return (
    <section className="border-b border-base-border bg-base">
      <Container className="py-section-y-lg">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">The Lineup</p>
            <h2 className="mt-4 font-display text-display-md text-ink">
              Featured Bikes
            </h2>
            <p className="mt-4 max-w-prose text-body-lg text-ink-muted">
              Three machines, three disciplines. Each tuned for its terrain and finished to showroom spec.
            </p>
          </div>

          <Link
            href="/bikes"
            className="text-body-sm uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
          >
            View all bikes
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderBikes.map((bike) => (
            <BikeCard key={bike.slug} bike={bike} />
          ))}
        </div>
      </Container>
    </section>
  );
}
