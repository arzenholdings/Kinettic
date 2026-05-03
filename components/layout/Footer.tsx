import Link from "next/link";
import Container from "./Container";
import { footerNav, socialNav, siteMeta } from "@/lib/site/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-base-border bg-base-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-display text-heading-lg uppercase tracking-widest text-ink hover:text-accent transition-colors"
            >
              {siteMeta.name}
            </Link>
            <p className="mt-4 max-w-xs text-body-sm text-ink-muted">
              {siteMeta.tagline}. Built for serious riders.
            </p>
          </div>

          {footerNav.map((column) => (
            <div key={column.heading}>
              <h3 className="eyebrow mb-4">{column.heading}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-ink-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-base-border pt-8 md:flex-row md:items-center">
          <p className="text-body-sm text-ink-subtle">
            &copy; {year} {siteMeta.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {socialNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-body-sm uppercase tracking-wider text-ink-muted hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
