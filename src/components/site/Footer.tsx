import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";
import { BRAND, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-on-dark">
      <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden="true" />
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo onDark />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-dark-muted">
            A pre-launch venture developing industrial steel container rentals, custom container
            manufacturing, and waste management coordination for industrial operations.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-sm border border-on-dark/15 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-on-dark-muted">
            <span className="size-1.5 rounded-full bg-safety" /> Currently in development
          </p>
        </div>
        <div className="md:col-span-4">
          <h2 className="eyebrow text-on-dark-muted">Explore</h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {[{ to: "/" as const, label: "Home" }, ...NAV].map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-on-dark/85 transition-colors hover:text-safety">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="eyebrow text-on-dark-muted">Get in touch</h2>
          <p className="mt-5 text-sm leading-relaxed text-on-dark/85">
            Discuss container requirements, custom builds, or partnership opportunities.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex font-semibold text-safety underline-offset-4 hover:underline"
          >
            Request a Quote →
          </Link>
        </div>
      </div>
      <div className="relative border-t border-on-dark/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>Services described on this site are planned unless stated otherwise.</p>
        </div>
      </div>
    </footer>
  );
}
