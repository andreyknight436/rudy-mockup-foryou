import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarRange,
  CheckCircle2,
  ClipboardCheck,
  Coins,
  Layers,
  Repeat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  SectionHeading,
  CtaBand,
  PreLaunchNote,
  StatusBadge,
} from "@/components/site/ui";
import { ProcessSteps } from "@/components/site/blocks";
import { img } from "@/lib/assets";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/rentals")({
  head: () =>
    pageHead(
      "Industrial Container Rentals | Rudy",
      "A proposed industrial container rental model: access durable steel waste containers and tank solutions without purchasing every unit. Quotation-based pricing.",
    ),
  component: RentalsPage,
});

const BENEFITS = [
  {
    icon: Coins,
    t: "Less capital tied up",
    d: "Rent the units you need instead of purchasing and storing every container.",
  },
  {
    icon: Layers,
    t: "Right equipment, right size",
    d: "Match container types and quantities to each area of your operation.",
  },
  {
    icon: CalendarRange,
    t: "Short or long term",
    d: "Rental durations discussed around projects, shutdowns, or ongoing production.",
  },
  {
    icon: Repeat,
    t: "Planned reuse",
    d: "Containers cleaned, inspected, and prepared before every subsequent rental.",
  },
];

const APPLICATIONS = [
  "Ongoing production waste at manufacturing plants",
  "Scrap and offcut collection in metal processing",
  "Construction and demolition project phases",
  "Plant shutdowns and maintenance turnarounds",
  "Temporary storage needs on infrastructure projects",
  "Seasonal or fluctuating waste volumes",
];

const REQUIREMENTS = [
  "Type of waste or material to be handled",
  "Estimated volumes and how often containers fill",
  "Site access, footprint, and handling equipment",
  "Rental start date and expected duration",
  "Collection or exchange expectations",
];

function RentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Container rentals"
        title="Industrial container rental, built around how you operate"
        text="A rental-based model designed to give industrial businesses access to suitable steel containers without purchasing every unit outright."
        image={img.hookLift}
        alt="Hook-lift truck lifting a large blue steel roll-off container"
      >
        <Button asChild variant="safety" size="xl">
          <Link to="/contact" search={{ inquiry: "container-rental" }}>
            Request a Rental Quote <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <StatusBadge status="planned" />
            <SectionHeading title="The rental concept" className="mt-2">
              <p>
                Instead of buying a fixed fleet of containers, a business would rent the equipment
                that fits its current needs — and adjust as those needs change. Rentals would be
                supported by collection planning through qualified partners and cleaning between
                uses.
              </p>
            </SectionHeading>
            <PreLaunchNote className="mt-8">
              The rental service is being developed and is not yet operating. You can discuss
              requirements and request a quotation now to help shape it.
            </PreLaunchNote>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {BENEFITS.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card"
              >
                <Icon className="size-7 text-safety" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-navy">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div className="rounded-lg bg-card p-8 shadow-card sm:p-10">
            <p className="eyebrow text-steel">Potential applications</p>
            <ul className="mt-6 space-y-4">
              {APPLICATIONS.map((a) => (
                <li key={a} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-eco" aria-hidden="true" />{" "}
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-navy p-8 text-on-dark shadow-card sm:p-10">
            <p className="eyebrow text-safety">What we'll ask you</p>
            <ul className="mt-6 space-y-4">
              {REQUIREMENTS.map((r) => (
                <li key={r} className="flex gap-3">
                  <ClipboardCheck
                    className="mt-0.5 size-5 shrink-0 text-safety"
                    aria-hidden="true"
                  />{" "}
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Proposed process" title="How a rental would come together">
            <p>Proposed operational steps — not yet an active service workflow.</p>
          </SectionHeading>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <SectionHeading eyebrow="Pricing" title="Quotation-based pricing">
            <p>
              Rental pricing depends on container type, quantity, duration, handling, and any
              collection or cleaning arrangements. Rather than publishing standard rates, each
              request receives a quotation based on its specific requirements.
            </p>
          </SectionHeading>
          <Button
            asChild
            variant="safety"
            size="xl"
            className="justify-self-start lg:justify-self-end"
          >
            <Link to="/contact" search={{ inquiry: "container-rental" }}>
              Request a Quotation <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
