import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Droplets,
  MapPinned,
  Recycle,
  Search,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading, CtaBand, StatusBadge } from "@/components/site/ui";
import { img } from "@/lib/assets";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/waste-management")({
  head: () =>
    pageHead(
      "Industrial Waste Management Solutions | Rudy",
      "Proposed industrial waste management: container placement, collection and transportation coordination through qualified partners, disposal partnerships, and container reuse planning.",
    ),
  component: WastePage,
});

const STAGES = [
  {
    icon: MapPinned,
    t: "Assessment & placement",
    d: "Review waste streams and plan where each container type should sit on site.",
  },
  {
    icon: Truck,
    t: "Collection coordination",
    d: "Schedule exchanges and pickups through qualified transportation partners.",
  },
  {
    icon: Recycle,
    t: "Disposal partnerships",
    d: "Route materials to appropriate, properly authorized disposal or recycling facilities.",
  },
  {
    icon: Droplets,
    t: "Cleaning",
    d: "Wash returned containers to remove residue before inspection.",
  },
  {
    icon: Search,
    t: "Inspection & reuse",
    d: "Check structure and condition, then prepare containers for their next rental.",
  },
];

function WastePage() {
  return (
    <>
      <PageHero
        eyebrow="Waste management solutions"
        title="A coordinated approach to industrial waste handling"
        text="The planned service connects the right containers with dependable collection, transportation, and disposal partners — and keeps equipment in service through cleaning and reuse."
        image={img.handling}
        alt="Industrial compactor attached to an enclosed steel container at a loading dock"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Proposed process" title="From placement to reuse" />
            <StatusBadge status="planned" className="self-start lg:self-end" />
          </div>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STAGES.map(({ icon: Icon, t, d }, i) => (
              <li
                key={t}
                className="relative rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="font-mono text-xs font-medium text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="mt-4 size-8 text-navy" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <img
            src={img.cleaning}
            alt="Worker pressure washing the inside of a steel container at a cleaning bay"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
          />
          <SectionHeading
            eyebrow="Cleaning & reuse"
            title="Containers kept in service, not sent to scrap"
          >
            <p>
              Drawing on the founder's background in oil-tank cleaning operations, the planned
              process treats each container as a long-life asset: cleaned after use, inspected for
              damage, and prepared before it goes back out.
            </p>
            <p className="mt-4">
              Reuse reduces the need for new equipment and helps keep rental costs grounded — a
              practical environmental benefit built into the model.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col gap-5 rounded-lg border-2 border-safety/40 bg-safety/5 p-8 sm:flex-row sm:p-10">
            <AlertTriangle className="size-8 shrink-0 text-safety" aria-hidden="true" />
            <div>
              <h2 className="text-2xl font-bold text-navy">About hazardous waste</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                Rudy does not accept, handle, or transport hazardous waste. Any future involvement
                would only follow once the required approvals, qualifications, and partner
                arrangements are confirmed. All collection and disposal would be carried out by
                appropriately qualified partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <SectionHeading eyebrow="Transport & disposal partners" title="Qualified partners wanted">
            <p>
              Haulers, hook-lift operators, and disposal or recycling facilities interested in
              working with the venture are welcome to get in touch.
            </p>
          </SectionHeading>
          <Button
            asChild
            variant="navy"
            size="xl"
            className="justify-self-start lg:justify-self-end"
          >
            <Link to="/contact" search={{ inquiry: "partnership" }}>
              Discuss a Partnership <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
