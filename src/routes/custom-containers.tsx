import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, DraftingCompass, Hammer, MessagesSquare, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  SectionHeading,
  CtaBand,
  PreLaunchNote,
  StatusBadge,
} from "@/components/site/ui";
import { img } from "@/lib/assets";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/custom-containers")({
  head: () =>
    pageHead(
      "Custom Industrial Containers & Steel Fabrication | Rudy",
      "Custom steel container manufacturing through qualified fabrication and welding partners. Share your footprint, handling method, and application to start an inquiry.",
    ),
  component: CustomPage,
});

const POSSIBILITIES = [
  "Non-standard footprints for tight production areas",
  "Forklift pockets, lifting lugs, or crane points",
  "Hinged or removable lids and enclosed designs",
  "Reinforced bodies for heavy scrap and offcuts",
  "Drain points or sealed bases where appropriate",
  "Paint colors and identification for site organization",
];

const PATH = [
  {
    icon: MessagesSquare,
    t: "Share your requirement",
    d: "Describe the application, handling method, and quantity.",
  },
  {
    icon: DraftingCompass,
    t: "Concept & specification",
    d: "A concept and specification are prepared with fabrication partners.",
  },
  {
    icon: Hammer,
    t: "Fabrication",
    d: "Units built by qualified welders and manufacturing partners.",
  },
  {
    icon: PackageCheck,
    t: "Rent or purchase",
    d: "Discuss whether custom units are rented or supplied outright.",
  },
];

function CustomPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom containers"
        title="Custom steel containers for specific equipment requirements"
        text="When a standard container doesn't fit, custom units can be designed around your application and built through qualified manufacturing partners."
        image={img.facility}
        alt="Steel container bodies under construction in a manufacturing facility"
      >
        <Button asChild variant="safety" size="xl">
          <Link to="/contact" search={{ inquiry: "custom-steel" }}>
            Start a Custom Inquiry <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <StatusBadge status="in-development" />
            <SectionHeading title="Fabrication possibilities" className="mt-2">
              <p>
                Custom work draws on the founder's connections with experienced welders and
                potential manufacturing partners. Feasibility, timelines, and pricing are confirmed
                for each project.
              </p>
            </SectionHeading>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {POSSIBILITIES.map((p) => (
                <li
                  key={p}
                  className="rounded-md border border-border bg-card px-4 py-3 text-sm font-medium text-navy"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={img.custom}
            alt="Custom blue steel container with hinged lid, orange lifting lugs and forklift pockets"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Inquiry path"
            title="From idea to fabricated container"
            align="center"
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PATH.map(({ icon: Icon, t, d }, i) => (
              <li key={t} className="rounded-lg bg-card p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <Icon className="size-8 text-safety" aria-hidden="true" />
                  <span className="font-display text-3xl font-extrabold text-steel-light">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <img
            src={img.welding}
            alt="Welder in protective gear welding a steel container frame"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-lg object-cover shadow-card"
          />
          <div>
            <SectionHeading eyebrow="Welders & fabricators" title="Build with us">
              <p>
                Experienced welders, steel fabricators, and manufacturers interested in custom or
                series container work are invited to discuss a partnership.
              </p>
            </SectionHeading>
            <PreLaunchNote className="mt-6">
              No manufacturing facility is currently operated. Production would be carried out
              through qualified partners.
            </PreLaunchNote>
            <Button asChild variant="navy" size="xl" className="mt-6">
              <Link to="/contact" search={{ inquiry: "partnership" }}>
                Discuss a Partnership <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a container requirement that doesn't fit the standard?"
        cta="Request Information"
      />
    </>
  );
}
