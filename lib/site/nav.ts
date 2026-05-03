export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Bikes", href: "/bikes" },
  { label: "Financing", href: "/financing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "Bikes", href: "/bikes" },
      { label: "Financing", href: "/financing" },
      { label: "About", href: "/about" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Service", href: "/service" },
      { label: "Warranty", href: "/warranty" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const socialNav: NavLink[] = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
];

export const siteMeta = {
  name: "Kinetic Moto",
  tagline: "Premium Electric Dirt Bikes",
  inquiryHref: "/contact",
  inquiryLabel: "Request Info",
};
