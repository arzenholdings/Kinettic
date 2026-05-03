import Link from "next/link";
import Container from "./Container";
import { primaryNav, siteMeta } from "@/lib/site/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-base-border bg-base/80 backdrop-blur">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-heading-md uppercase tracking-widest text-ink hover:text-accent transition-colors"
        >
          {siteMeta.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-body-sm uppercase tracking-wider text-ink-muted hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={siteMeta.inquiryHref}
            className="btn-primary text-body-sm"
          >
            {siteMeta.inquiryLabel}
          </Link>
        </div>
      </Container>
    </header>
  );
}
