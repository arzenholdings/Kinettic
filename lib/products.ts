// ============================================================================
// PRODUCT CATALOG
// Edit this file to add, remove, or update bikes shown across the site.
// Replace the `image` paths after dropping the matching files into
// /public/images/bikes/  (see /public/images/bikes/README.txt).
// ============================================================================

export type ProductCategory =
  | "Electric Dirt Bikes"
  | "Street / Urban E-Motos"
  | "Youth / Entry-Level"
  | "Performance Builds"
  | "Parts & Accessories"
  | "Service & Support";

export type Product = {
  name: string;
  slug: string;
  category: ProductCategory;
  priceLabel: string;
  badge?: string;
  shortDescription: string;
  image: string;
  specs: { label: string; value: string }[];
  financingAvailable: boolean;
  longDescription?: string;
};

export const products: Product[] = [
  {
    name: "Ventus V1+",
    slug: "ventus-v1-plus",
    category: "Performance Builds",
    priceLabel: "Starting at TBD — Contact for pricing",
    badge: "Flagship",
    shortDescription:
      "A premium high-performance electric platform engineered for serious riders who want torque, range, and refinement.",
    image: "/images/bikes/ventus-v1-plus.jpg",
    specs: [
      { label: "Top Speed", value: "Up to 75 mph" },
      { label: "Power", value: "12 kW peak" },
      { label: "Battery", value: "Removable Li-ion" },
      { label: "Range", value: "Up to 75 mi" },
      { label: "Weight", value: "~165 lb" },
      { label: "Use Case", value: "Trail / Off-road" },
    ],
    financingAvailable: true,
    longDescription:
      "The Ventus V1+ is built for riders who refuse to compromise. With a refined chassis, premium suspension, and a high-output drivetrain, it delivers the kind of acceleration and ride quality that defines the next generation of electric powersports.",
  },
  {
    name: "Talaria MX5",
    slug: "talaria-mx5",
    category: "Electric Dirt Bikes",
    priceLabel: "Starting at TBD — Contact for pricing",
    badge: "Popular",
    shortDescription:
      "The MX5 is the natural evolution of the Talaria platform — bigger wheels, better suspension, and a more confident ride.",
    image: "/images/bikes/talaria-mx5.jpg",
    specs: [
      { label: "Top Speed", value: "Up to 60 mph" },
      { label: "Power", value: "8 kW peak" },
      { label: "Battery", value: "Removable Li-ion" },
      { label: "Range", value: "Up to 50 mi" },
      { label: "Weight", value: "~140 lb" },
      { label: "Use Case", value: "MX / Trail" },
    ],
    financingAvailable: true,
    longDescription:
      "The Talaria MX5 is a serious off-road weapon for riders ready to step up. Improved geometry, full-size wheels, and a stiffer chassis make this an ideal trail and MX-style electric dirt bike.",
  },
  {
    name: "Sur Ron Light Bee X",
    slug: "sur-ron-light-bee-x",
    category: "Electric Dirt Bikes",
    priceLabel: "Starting at TBD — Contact for pricing",
    badge: "Best Seller",
    shortDescription:
      "The bike that started the modern electric moto category. Light, fast, and infinitely customizable.",
    image: "/images/bikes/sur-ron-light-bee-x.jpg",
    specs: [
      { label: "Top Speed", value: "Up to 47 mph" },
      { label: "Power", value: "6 kW peak" },
      { label: "Battery", value: "60V 32Ah" },
      { label: "Range", value: "Up to 60 mi" },
      { label: "Weight", value: "~110 lb" },
      { label: "Use Case", value: "Trail / Commuter" },
    ],
    financingAvailable: true,
    longDescription:
      "The Sur Ron Light Bee X is the platform that defined the category. Lightweight, agile, and supported by a massive aftermarket ecosystem, it is the ideal entry into serious electric riding.",
  },
  {
    name: "E-Ride Pro SS",
    slug: "e-ride-pro-ss",
    category: "Performance Builds",
    priceLabel: "Starting at TBD — Contact for pricing",
    badge: "Premium",
    shortDescription:
      "Mid-drive torque, premium components, and a chassis built for technical terrain.",
    image: "/images/bikes/e-ride-pro-ss.jpg",
    specs: [
      { label: "Top Speed", value: "Up to 55 mph" },
      { label: "Power", value: "Mid-drive, 5 kW peak" },
      { label: "Battery", value: "72V Li-ion" },
      { label: "Range", value: "Up to 50 mi" },
      { label: "Weight", value: "~150 lb" },
      { label: "Use Case", value: "Trail / Hill Climb" },
    ],
    financingAvailable: true,
    longDescription:
      "The E-Ride Pro SS uses a mid-drive layout for unmatched torque and climbing ability. A premium build aimed at riders who want the most capable platform on technical terrain.",
  },
  {
    name: "Rawrr Mantis X",
    slug: "rawrr-mantis-x",
    category: "Electric Dirt Bikes",
    priceLabel: "Starting at TBD — Contact for pricing",
    badge: "New",
    shortDescription:
      "A modern, full-size electric platform with an aggressive look and a tunable powertrain.",
    image: "/images/bikes/rawrr-mantis-x.jpg",
    specs: [
      { label: "Top Speed", value: "Up to 65 mph" },
      { label: "Power", value: "10 kW peak" },
      { label: "Battery", value: "Removable Li-ion" },
      { label: "Range", value: "Up to 60 mi" },
      { label: "Weight", value: "~155 lb" },
      { label: "Use Case", value: "Trail / Adventure" },
    ],
    financingAvailable: true,
    longDescription:
      "The Rawrr Mantis X brings full-size proportions, modern styling, and a tunable powertrain to the electric moto segment. Built for riders who want a real motorcycle experience without the gas.",
  },
  {
    name: "Arctic Leopard EXE",
    slug: "arctic-leopard-exe",
    category: "Street / Urban E-Motos",
    priceLabel: "Starting at TBD — Contact for pricing",
    badge: "Urban",
    shortDescription:
      "Street-ready styling and silent torque for the urban rider who wants something different.",
    image: "/images/bikes/arctic-leopard-exe.jpg",
    specs: [
      { label: "Top Speed", value: "Up to 50 mph" },
      { label: "Power", value: "5 kW peak" },
      { label: "Battery", value: "Removable Li-ion" },
      { label: "Range", value: "Up to 55 mi" },
      { label: "Weight", value: "~165 lb" },
      { label: "Use Case", value: "Urban / Commuter" },
    ],
    financingAvailable: true,
    longDescription:
      "The Arctic Leopard EXE is built for the city. With street-ready styling, silent torque, and a comfortable ride, it is the e-moto for riders who want something distinctive on every commute.",
  },
  {
    name: "Stealth Bomber 3000W",
    slug: "stealth-bomber-3000w",
    category: "Performance Builds",
    priceLabel: "Starting at TBD — Contact for pricing",
    badge: "Heavy Hitter",
    shortDescription:
      "The full-size electric beast. Massive battery, high-power motor, and unmistakable presence.",
    image: "/images/bikes/stealth-bomber-3000w.jpg",
    specs: [
      { label: "Top Speed", value: "Up to 50 mph" },
      { label: "Power", value: "3000W continuous" },
      { label: "Battery", value: "72V High-capacity" },
      { label: "Range", value: "Up to 80 mi" },
      { label: "Weight", value: "~140 lb" },
      { label: "Use Case", value: "Cruiser / Trail" },
    ],
    financingAvailable: true,
    longDescription:
      "The Stealth Bomber 3000W is unlike anything else in the category. A long wheelbase, massive battery, and a high-output motor combine to deliver an experience that turns heads everywhere.",
  },
];

export const categories: {
  name: ProductCategory;
  description: string;
  href: string;
}[] = [
  {
    name: "Electric Dirt Bikes",
    description:
      "Trail and MX-ready electric platforms for off-road riders.",
    href: "/bikes?category=Electric+Dirt+Bikes",
  },
  {
    name: "Street / Urban E-Motos",
    description:
      "Street-ready electric motos for the modern urban rider.",
    href: "/bikes?category=Street+%2F+Urban+E-Motos",
  },
  {
    name: "Youth / Entry-Level",
    description:
      "Approachable platforms for new riders and growing families.",
    href: "/bikes?category=Youth+%2F+Entry-Level",
  },
  {
    name: "Performance Builds",
    description:
      "Premium high-output platforms for serious riders.",
    href: "/bikes?category=Performance+Builds",
  },
  {
    name: "Parts & Accessories",
    description:
      "Upgrades, batteries, controllers, suspension, and more.",
    href: "/service",
  },
  {
    name: "Service & Support",
    description:
      "Setup, assembly, diagnostics, repairs, and rider education.",
    href: "/service",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, count);
  const sameCategory = products.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const others = products.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export const featuredSlugs = [
  "talaria-mx5",
  "sur-ron-light-bee-x",
  "e-ride-pro-ss",
  "rawrr-mantis-x",
  "ventus-v1-plus",
];

export function getFeaturedProducts(): Product[] {
  return featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}
