import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Compass, Hammer, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATUS_LABEL, type Status } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  onDark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "eyebrow flex items-center gap-3",
            align === "center" && "justify-center",
            onDark ? "text-safety" : "text-steel",
          )}
        >
          <span className="h-px w-8 bg-safety" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          onDark ? "text-on-dark" : "text-navy",
        )}
      >
        {title}
      </h2>
      {children && (
        <div
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            onDark ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

const STATUS_ICON = {
  planned: Clock,
  "in-development": Hammer,
  vision: Compass,
  open: MessageSquare,
};

export function StatusBadge({
  status,
  className,
  onDark = false,
}: {
  status: Status;
  className?: string;
  onDark?: boolean;
}) {
  const Icon = STATUS_ICON[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em]",
        status === "vision" && "bg-eco-soft text-eco",
        status === "open" && "bg-safety/12 text-safety",
        (status === "planned" || status === "in-development") &&
          (onDark ? "bg-on-dark/12 text-on-dark" : "bg-accent text-steel"),
        className,
      )}
    >
      <Icon className="size-3" aria-hidden="true" />
      {STATUS_LABEL[status]}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  alt,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep pb-20 pt-36 sm:pb-24 sm:pt-44">
      <img src={image} alt={alt} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
      <div className="container-site">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow flex items-center gap-3 text-safety">
            <span className="h-px w-8 bg-safety" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-on-dark sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-muted">{text}</p>
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function PreLaunchNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-md border border-steel-light bg-surface p-4 text-sm leading-relaxed text-muted-foreground",
        className,
      )}
    >
      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-safety" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

export function CtaBand({
  title = "Let's Explore the Right Container Solution for Your Operation",
  text = "Whether you're exploring container rentals, industrial equipment requirements, or a potential business partnership, start a conversation with us.",
  cta = "Request Information",
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-xl bg-navy-gradient px-6 py-14 shadow-lift sm:px-14 sm:py-16">
          <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
          <div
            className="absolute -right-24 -top-24 size-72 rounded-full border-[28px] border-safety/15"
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-on-dark sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-on-dark-muted">{text}</p>
            </div>
            <Button asChild variant="safety" size="xl">
              <Link to="/contact">
                {cta} <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
