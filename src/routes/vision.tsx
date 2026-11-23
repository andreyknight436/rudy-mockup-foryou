import { createFileRoute } from "@tanstack/react-router";
import { CloudLightning, Flame, HeartHandshake, Leaf, Mountain, ShieldPlus } from "lucide-react";
import {
  PageHero,
  SectionHeading,
  CtaBand,
  StatusBadge,
  PreLaunchNote,
} from "@/components/site/ui";
import { img } from "@/lib/assets";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/vision")({
  head: () =>
    pageHead(
      "Our Long-Term Vision | Rudy",
      "The founder's long-term vision for environmental solutions, disaster-response equipment, and community support — future ambitions beyond industrial container rentals.",
    ),
  component: VisionPage,
});

const AREAS = [
  {
    icon: CloudLightning,
    t: "Hurricanes",
    d: "Durable steel equipment that could support debris handling and recovery staging.",
  },
  {
    icon: Mountain,
    t: "Earthquakes",
    d: "Robust containers and storage for relief supplies and recovery work.",
  },
  {
    icon: Flame,
    t: "Major fires",
    d: "Equipment that could assist with clean-up and safe material handling afterward.",
  },
  {
    icon: Leaf,
    t: "Environmental challenges",
    d: "Reusable equipment and responsible handling that reduce environmental impact.",
  },
];

const PHASES = [
  {
    label: "Now",
    title: "Build the core business",
    text: "Develop the industrial container rental model, partnerships, and funding.",
    status: "in-development" as const,
  },
  {
    label: "Next",
    title: "Operate and grow",
    text: "Launch rentals, collection coordination, and cleaning once ready.",
    status: "planned" as const,
  },
  {
    label: "Future",
    title: "Expand the mission",
    text: "Explore environmental, rescue, and disaster-response equipment.",
    status: "vision" as const,
  },
];

function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our vision"
        title="Building beyond industrial waste management"
        text="The long-term ambition is to put durable steel equipment and practical know-how to work for environmental protection and communities facing disasters."
        image={img.vision}
        alt="Green coastal landscape at sunrise with an equipment staging area in the distance"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why it matters"
            title="Equipment that helps when it's needed most"
          >
            <p>
              After hurricanes, earthquakes, and major fires, communities need rugged equipment to
              manage debris, store supplies, and support recovery. The founder hopes that, over
              time, the same steel container expertise behind industrial rentals could contribute to
              that work.
            </p>
          </SectionHeading>
          <div className="flex flex-col justify-center gap-4">
            <StatusBadge status="vision" className="self-start" />
            <PreLaunchNote>
              Everything on this page describes future ambitions. Rudy does not currently offer
              environmental, rescue, or disaster-response services or equipment.
            </PreLaunchNote>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Future areas of interest" title="Where the vision points" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-lg border-t-4 border-eco bg-card p-7 shadow-card">
                <Icon className="size-8 text-eco" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="A realistic path"
            title="Core business first, mission second"
            align="center"
          />
          <ol className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {PHASES.map((p) => (
              <li key={p.label} className="relative rounded-lg border border-border bg-card p-8">
                <p className="font-display text-4xl font-extrabold text-steel-light">{p.label}</p>
                <h3 className="mt-3 text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <StatusBadge status={p.status} className="mt-5" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-eco-gradient py-20 sm:py-24">
        <div className="container-site grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <div className="flex gap-4">
            <ShieldPlus className="size-12 text-eco-soft" aria-hidden="true" />
            <HeartHandshake className="size-12 text-eco-soft" aria-hidden="true" />
          </div>
          <SectionHeading eyebrow="Community support" title="Grounded in responsibility" onDark>
            <p>
              Whatever scale the business reaches, the intention is to stay practical, honest about
              capability, and useful to the communities and industries it serves.
            </p>
          </SectionHeading>
        </div>
      </section>

      <CtaBand
        title="Share the vision?"
        text="Organizations interested in environmental or community initiatives are welcome to start a conversation."
        cta="Get in Touch"
      />
    </>
  );
}
