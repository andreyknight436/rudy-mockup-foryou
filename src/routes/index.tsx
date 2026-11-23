import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Factory,
  Handshake,
  Leaf,
  Recycle,
  Ruler,
  Wrench,
  ClipboardList,
  Truck,
  Users,
  Hammer,
  Package,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, StatusBadge, CtaBand, PreLaunchNote } from "@/components/site/ui";
import { ProductCard, FaqList, ProcessSteps } from "@/components/site/blocks";
import { SOLUTIONS, PRODUCTS, INDUSTRIES_SERVED, PARTNERS } from "@/lib/content";
import { img } from "@/lib/assets";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Rudy | Industrial Container Rentals & Steel Waste Containers",
      "Industrial container solutions built around your operations: steel waste containers, industrial container and tank rental concepts, and waste management coordination.",
    ),
  component: HomePage,
});

const WHY = [
  {
    icon: Boxes,
    title: "Flexible rental concepts",
    text: "Access the containers your operation needs without tying up capital in every unit.",
  },
  {
    icon: Factory,
    title: "Industrial-focused solutions",
    text: "Built for production floors, yards, and sites — not residential collection.",
  },
  {
    icon: Ruler,
    title: "Custom equipment possibilities",
    text: "Container designs shaped around your footprint, handling method, and material.",
  },
  {
    icon: Recycle,
    title: "Reusable container management",
    text: "Cleaning, inspection, and preparation planned into the life of every container.",
  },
  {
    icon: ClipboardList,
    title: "Practical operational planning",
    text: "Placement, exchange, and collection discussed upfront, around how you actually work.",
  },
  {
    icon: Handshake,
    title: "Partnership-oriented service",
    text: "Long-term relationships with customers, fabricators, and transport partners.",
  },
];

const PARTNER_ICONS = [Building2, Factory, Hammer, Package, Truck, Users];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-deep pb-16 pt-32 sm:items-center sm:pb-24">
        <img
          src={img.hero}
          alt="Rows of navy steel industrial containers and a hook-lift truck at an industrial yard at dusk"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
        />
        <video
          className="absolute inset-0 -z-20 hidden h-full w-full object-cover md:block motion-reduce:hidden"
          src={img.heroVideo}
          poster={img.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-deep/70 to-transparent"
          aria-hidden="true"
        />

        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow flex animate-fade-up items-center gap-3 text-safety">
              <span className="h-px w-8 bg-safety" aria-hidden="true" />
              Industrial steel containers · Rentals · Waste management
            </p>
            <h1
              className="mt-6 animate-fade-up text-[2.6rem] font-extrabold leading-[1.02] text-on-dark sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Industrial Container Solutions Built Around Your Operations
            </h1>
            <p
              className="mt-7 max-w-2xl animate-fade-up text-lg leading-relaxed text-on-dark-muted sm:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              Exploring smarter industrial waste management through durable steel containers,
              flexible rental solutions, and dependable operational planning.
            </p>
            <div
              className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "240ms" }}
            >
              <Button asChild variant="safety" size="xl">
                <a href="#solutions">
                  Explore Our Solutions <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The vision"
              title="Practical Solutions for Industrial Waste Handling"
            >
              <p>
                Rudy is being developed to give industrial companies access to durable steel
                containers through a rental-based model — so the right equipment is in the right
                place, without every unit becoming a capital purchase.
              </p>
              <p className="mt-4">
                The approach draws on the founder's hands-on experience with industrial steel
                products, manufacturing environments, and oil-tank cleaning operations, alongside
                connections with experienced welders and potential manufacturing partners.
              </p>
            </SectionHeading>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                ["Durability", "Heavy-gauge steel construction intended for demanding use."],
                ["Flexibility", "Rental arrangements matched to changing operations."],
                ["Planning", "Equipment selection and placement thought through upfront."],
                ["Relationships", "Long-term partnerships over one-off transactions."],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-safety pl-4">
                  <dt className="font-display font-bold text-navy">{t}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={img.facility}
              alt="Clean modern manufacturing facility with overhead cranes and steel container bodies"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -left-4 max-w-[17rem] rounded-md bg-navy p-5 text-on-dark shadow-lift sm:-left-8">
              <p className="eyebrow text-safety">Pre-launch</p>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                Business model, manufacturing partnerships, and funding are currently in
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="scroll-mt-20 bg-surface py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Core solutions" title="Six areas, one industrial focus">
              <p>
                Each solution is shown with its current status. Requirements discussions and
                quotation requests are open now.
              </p>
            </SectionHeading>
            <StatusBadge status="open" className="self-start lg:self-end" />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.key}
                to={s.to}
                className="group flex flex-col overflow-hidden rounded-lg bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <StatusBadge status={s.status} className="self-start" />
                  <h3 className="mt-4 text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-safety">
                    Learn more{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why this approach"
            title="Designed Around Industrial Operational Needs"
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group bg-card p-8 transition-colors hover:bg-surface">
                <div className="flex size-12 items-center justify-center rounded-md bg-navy text-on-dark transition-colors group-hover:bg-safety">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
        <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
        <div className="container-site relative">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="How the rental model works"
              title="A five-step proposed process"
              onDark
            >
              <p>
                These are the proposed operational steps of the rental model as it is being
                developed — not an active service workflow.
              </p>
            </SectionHeading>
            <StatusBadge status="planned" onDark className="self-start lg:self-end" />
          </div>
          <div className="mt-16">
            <ProcessSteps onDark />
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Equipment showcase"
              title="Industrial containers and equipment concepts"
            >
              <p>Specifications are prepared per application and available upon request.</p>
            </SectionHeading>
            <Button asChild variant="outline-navy" size="lg" className="self-start">
              <Link to="/products">
                View all equipment <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Industries we aim to serve"
            title="Built for operations that generate serious waste"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_SERVED.map((ind) => (
              <article
                key={ind.name}
                className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-lg p-6"
              >
                <img
                  src={ind.image}
                  alt={ind.alt}
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/5"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-bold text-on-dark">{ind.name}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-on-dark-muted">
                  {ind.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <img
          src={img.vision}
          alt="Green coastal landscape at sunrise with an equipment staging area in the distance"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-eco-gradient opacity-90" aria-hidden="true" />
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <StatusBadge status="vision" />
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-on-dark sm:text-5xl">
              Building Beyond Industrial Waste Management
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted">
              Over the long term, the founder hopes to contribute to environmental protection and to
              specialized rescue and disaster-response equipment — the kind of durable steel
              equipment communities need after hurricanes, earthquakes, and major fires.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-dark-muted">
              These are future ambitions, not current capabilities. The immediate focus remains
              industrial steel container rentals and waste management.
            </p>
            <Button asChild variant="outline-light" size="xl" className="mt-8">
              <Link to="/vision">
                Read our vision <ArrowRight />
              </Link>
            </Button>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {["Hurricanes", "Earthquakes", "Major fires", "Environmental challenges"].map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 rounded-md border border-on-dark/20 bg-on-dark/10 p-4 font-display font-semibold text-on-dark backdrop-blur-sm"
              >
                <Leaf className="size-5 shrink-0 text-eco-soft" aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Partnership opportunities" title="Help build what comes next">
              <p>
                The venture is actively looking to connect with the people and companies who can
                help shape it — from first customers to fabrication and transport partners.
              </p>
            </SectionHeading>
            <Button asChild variant="safety" size="xl" className="mt-8">
              <Link to="/contact" search={{ inquiry: "partnership" }}>
                Discuss a Partnership <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PARTNERS.map((p, i) => {
              const Icon = PARTNER_ICONS[i] ?? Users;
              return (
                <div
                  key={p.title}
                  className="rounded-lg border border-border bg-card p-6 transition-all hover:border-steel hover:shadow-card"
                >
                  <Icon className="size-6 text-steel" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="FAQ" title="Straight answers about a venture in development" />
            <PreLaunchNote className="mt-8 bg-card">
              Where a service is described as planned, it is not yet available. Requirements
              discussions and quotation requests are welcome now.
            </PreLaunchNote>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <Wrench className="size-4 text-steel" aria-hidden="true" /> Have a different question?{" "}
              <Link
                to="/contact"
                className="font-semibold text-navy underline-offset-4 hover:underline"
              >
                Ask us
              </Link>
            </div>
          </div>
          <FaqList />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
