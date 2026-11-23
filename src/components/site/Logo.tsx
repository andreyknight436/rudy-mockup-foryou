import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/site";

/** Geometric mark: open-top steel container inside a structural frame, with a safety-orange rail. */
export function LogoMark({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true" className={cn("h-10 w-10 shrink-0", className)}>
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="5"
        className={onDark ? "fill-on-dark" : "fill-navy"}
      />
      <path
        d="M7 7 L37 7"
        strokeWidth="2"
        className={onDark ? "stroke-navy/25" : "stroke-on-dark/25"}
      />
      {/* container body: wider at top */}
      <path d="M8 16 H36 L32.5 34 H11.5 Z" className={onDark ? "fill-navy" : "fill-on-dark"} />
      {/* ribs */}
      <path
        d="M16 17.5 V32.5 M22 17.5 V32.5 M28 17.5 V32.5"
        strokeWidth="2"
        className={onDark ? "stroke-on-dark/35" : "stroke-navy/30"}
      />
      {/* top rail */}
      <rect x="6" y="12" width="32" height="3.2" rx="0.8" className="fill-safety" />
      {/* base skids */}
      <rect x="11" y="35.5" width="6" height="2.5" className="fill-steel" />
      <rect x="27" y="35.5" width="6" height="2.5" className="fill-steel" />
    </svg>
  );
}

export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${BRAND.name} home`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <LogoMark onDark={onDark} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.4rem] font-extrabold uppercase tracking-[0.14em]",
            onDark ? "text-on-dark" : "text-navy",
          )}
        >
          {BRAND.short}
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em]",
            onDark ? "text-on-dark-muted" : "text-steel",
          )}
        >
          Container Solutions
        </span>
      </span>
    </Link>
  );
}
