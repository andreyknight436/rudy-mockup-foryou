import { createFileRoute } from "@tanstack/react-router";
import { FileText, Ruler, Settings2 } from "lucide-react";
import { PageHero, SectionHeading, CtaBand, PreLaunchNote } from "@/components/site/ui";
import { ProductCard } from "@/components/site/blocks";
import { PRODUCTS } from "@/lib/content";
import { img } from "@/lib/assets";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/products")({
  head: () =>
    pageHead(
      "Steel Waste Containers, Skip Bins & Industrial Tanks | Rudy",
      "Explore planned industrial equipment: open-top steel waste containers, heavy-duty skip bins, hook-lift containers, industrial storage tanks, and custom steel containers.",
    ),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & equipment"
        title="Industrial steel containers, bins, and tanks"
        text="A planned equipment range for industrial waste handling and storage — from open-top containers to custom-built steel units."
        image={img.skipBins}
        alt="Row of heavy-duty blue steel skip bins with orange lifting lugs"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <SectionHeading eyebrow="Equipment range" title="Concepts ready to discuss">
              <p>
                Each category below represents equipment the business plans to offer through
                manufacturing partners and suppliers. Final designs are confirmed per application.
              </p>
            </SectionHeading>
            <PreLaunchNote>
              Capacities, dimensions, and material grades are not published. Specifications are
              prepared upon request for your application.
            </PreLaunchNote>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Specifications"
            title="What we'll ask to prepare a specification"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Settings2,
                t: "Application",
                d: "The type of material, how it is generated, and how often containers fill.",
              },
              {
                icon: Ruler,
                t: "Site & handling",
                d: "Available footprint, access, and whether units are moved by forklift, crane, or hook-lift.",
              },
              {
                icon: FileText,
                t: "Operational needs",
                d: "Quantities, rental duration, and any collection or cleaning expectations.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-lg bg-card p-8 text-center shadow-card">
                <Icon className="mx-auto size-8 text-steel" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a specific container?"
        text="Tell us about your application and we'll prepare a specification and quotation for discussion."
        cta="Request Information"
      />
    </>
  );
}
