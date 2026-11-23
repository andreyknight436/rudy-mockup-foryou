import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Flame, Hammer, Target, Compass, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading, CtaBand, PreLaunchNote } from "@/components/site/ui";
import { img } from "@/lib/assets";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Rudy | Industrial Steel Container Venture",
      "Learn about the vision behind Rudy, a pre-launch industrial container rental and waste management venture grounded in steel and industrial cleaning experience.",
    ),
  component: AboutPage,
});

const BACKGROUND = [
  {
    icon: Factory,
    title: "Industrial steel products",
    text: "Hands-on familiarity with how industrial steel products are specified, built, and used.",
  },
  {
    icon: Hammer,
    title: "Manufacturing environments",
    text: "Experience working in production settings and understanding their day-to-day waste realities.",
  },
  {
    icon: Flame,
    title: "Oil-tank cleaning operations",
    text: "Practical exposure to tank cleaning work — the foundation for planned cleaning and maintenance.",
  },
];

const PRINCIPLES = [
  {
    icon: Target,
    title: "Start focused",
    text: "Industrial steel container rentals and waste management come first. Everything else follows demand.",
  },
  {
    icon: ShieldCheck,
    title: "Be accurate",
    text: "Clear about what is planned and what is available. No claims ahead of capability.",
  },
  {
    icon: Compass,
    title: "Build with partners",
    text: "Work with qualified fabricators, welders, and transport operators rather than going it alone.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An industrial venture shaped by real operational experience"
        text="Rudy is a pre-launch business developing steel container rentals, custom container manufacturing, and waste management coordination for industrial companies."
        image={img.welding}
        alt="Welder fabricating a heavy steel container frame with bright sparks"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Business vision"
            title="Durable equipment, flexible access, practical planning"
          >
            <p>
              Industrial companies rely on containers every day, yet many still buy equipment that
              sits idle, struggle with mismatched sizes, or lack a clear plan for collection and
              cleaning.
            </p>
            <p className="mt-4">
              The vision is to offer durable steel containers through a rental-based model,
              supported by planned collection coordination and cleaning between uses — giving
              operations the right equipment for the job and a dependable partner behind it.
            </p>
          </SectionHeading>
          <div className="flex flex-col justify-center gap-5">
            <PreLaunchNote>
              The company is currently developing its business model, exploring manufacturing
              partnerships, and securing funding. It does not yet operate facilities, a fleet, or an
              active rental service.
            </PreLaunchNote>
            <img
              src={img.maintenance}
              alt="Technician inspecting a heavy steel container in an industrial yard"
              loading="lazy"
              className="aspect-[16/10] w-full rounded-lg object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Founder's background"
            title="Grounded in steel, manufacturing, and tank cleaning"
          >
            <p>
              The founder brings previous industry experience across three areas that directly
              inform the business, along with connections to experienced welders and potential
              manufacturing partners.
            </p>
          </SectionHeading>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {BACKGROUND.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-lg bg-card p-8 shadow-card">
                <Icon className="size-8 text-safety" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="Our approach" title="How the business is being built" />
          <div className="divide-y divide-border border-y border-border">
            {PRINCIPLES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-6 py-7">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-navy text-on-dark">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-20 sm:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <SectionHeading
            eyebrow="Long-term goals"
            title="From industrial containers to environmental impact"
            onDark
          >
            <p>
              Beyond industrial rentals, the founder hopes to eventually contribute to environmental
              protection and specialized disaster-response equipment. These are long-term
              aspirations, pursued only once the core business is established.
            </p>
          </SectionHeading>
          <Button
            asChild
            variant="outline-light"
            size="xl"
            className="justify-self-start lg:justify-self-end"
          >
            <Link to="/vision">
              Explore the vision <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand
        title="Interested in what we're building?"
        text="Share your container requirements or explore a partnership while the business takes shape."
        cta="Start a Conversation"
      />
    </>
  );
}
