import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQS, STEPS, type Product } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  detailed = false,
}: {
  product: Product;
  detailed?: boolean;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-background/95 px-2 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-navy">
          Concept
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-steel">{product.application}</p>
        <h3 className="mt-2 text-xl font-bold text-navy">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        {detailed && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.uses.map((u) => (
              <li
                key={u}
                className="rounded-sm bg-surface px-2.5 py-1 text-xs font-medium text-navy"
              >
                {u}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs font-medium text-steel">
          <FileText className="size-3.5" aria-hidden="true" /> Specifications available upon request
        </p>
        <Button asChild variant="outline-navy" className="mt-5 w-full justify-between">
          <Link to="/contact" search={{ inquiry: product.inquiry, equipment: product.name }}>
            Request Information <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function FaqList({ className }: { className?: string }) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("divide-y divide-border rounded-lg border border-border bg-card", className)}
    >
      {FAQS.map((f, i) => (
        <AccordionItem key={f.q} value={`faq-${i}`} className="border-0 px-5 sm:px-7">
          <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-navy hover:no-underline sm:text-lg">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function ProcessSteps({ onDark = false }: { onDark?: boolean }) {
  return (
    <ol className="relative grid gap-5 md:grid-cols-5 md:gap-4">
      <div
        className={cn(
          "absolute left-0 right-0 top-7 hidden h-px md:block",
          onDark ? "bg-on-dark/15" : "bg-border",
        )}
        aria-hidden="true"
      />
      {STEPS.map((s) => (
        <li key={s.n} className="relative">
          <div
            className={cn(
              "relative z-10 flex size-14 items-center justify-center rounded-md font-display text-lg font-extrabold",
              onDark ? "bg-safety text-safety-foreground" : "bg-navy text-on-dark",
            )}
          >
            {s.n}
          </div>
          <h3
            className={cn(
              "mt-5 text-lg font-bold leading-snug",
              onDark ? "text-on-dark" : "text-navy",
            )}
          >
            {s.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              onDark ? "text-on-dark-muted" : "text-muted-foreground",
            )}
          >
            {s.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
