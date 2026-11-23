import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, ClipboardCopy, Info, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading, PreLaunchNote } from "@/components/site/ui";
import {
  INDUSTRIES,
  INQUIRY_TYPES,
  inquirySchema,
  isInquiryType,
  type InquiryInput,
} from "@/lib/inquiry";
import { img } from "@/lib/assets";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

type ContactSearch = { inquiry?: InquiryInput["inquiryType"]; equipment?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    const out: ContactSearch = {};
    if (isInquiryType(search["inquiry"])) out.inquiry = search["inquiry"];
    if (typeof search["equipment"] === "string" && search["equipment"].length < 160)
      out.equipment = search["equipment"];
    return out;
  },
  head: () =>
    pageHead(
      "Request a Quote | Industrial Container Rentals — Rudy",
      "Request a customized quotation for industrial container rentals, custom steel containers, industrial tank solutions, waste management, or a manufacturing partnership.",
    ),
  component: ContactPage,
});

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-sm font-medium text-destructive">
      {message}
    </p>
  );
}

function ContactPage() {
  const search = Route.useSearch();
  const [submitted, setSubmitted] = useState<InquiryInput | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      inquiryType: search.inquiry ?? "container-rental",
      fullName: "",
      company: "",
      email: "",
      phone: "",
      industry: "",
      equipment: search.equipment ?? "",
      quantity: "",
      description: "",
    },
  });

  const onSubmit = (data: InquiryInput) => {
    setSubmitted(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const summary = submitted
    ? [
        `Inquiry type: ${INQUIRY_TYPES.find((t) => t.value === submitted.inquiryType)?.label ?? ""}`,
        `Name: ${submitted.fullName}`,
        `Company: ${submitted.company}`,
        `Email: ${submitted.email}`,
        `Phone: ${submitted.phone}`,
        `Industry: ${submitted.industry}`,
        `Equipment: ${submitted.equipment}`,
        `Estimated quantity: ${submitted.quantity || "—"}`,
        `Project description: ${submitted.description}`,
      ].join("\n")
    : "";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep pb-16 pt-36 sm:pt-40">
        <img
          src={img.tanks}
          alt="Industrial steel storage tanks at a facility"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
        <div className="container-site">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow flex items-center gap-3 text-safety">
              <span className="h-px w-8 bg-safety" aria-hidden="true" /> Contact / Request a quote
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-on-dark sm:text-5xl lg:text-6xl">
              Tell us about your operation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-on-dark-muted">
              Share your container requirements or partnership idea. Every quotation is prepared
              around your specific application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            <SectionHeading eyebrow="What happens next" title="A conversation, not a sales pitch">
              <p className="text-base">
                Inquiries help shape a business that is still being built. Expect questions about
                your site, waste streams, and handling equipment.
              </p>
            </SectionHeading>
            <ul className="space-y-3 text-sm">
              {[
                "Requirements reviewed",
                "Suitable equipment identified",
                "Quotation prepared for discussion",
              ].map((s, i) => (
                <li key={s} className="flex items-center gap-3 font-medium text-navy">
                  <span className="flex size-7 items-center justify-center rounded-sm bg-navy font-mono text-xs text-on-dark">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <PreLaunchNote className="bg-card">
              Rudy is a pre-launch venture. Services described as planned are not yet available.
            </PreLaunchNote>
          </aside>

          <div className="rounded-xl bg-card p-6 shadow-lift sm:p-10">
            {submitted ? (
              <div role="status" aria-live="polite">
                <CheckCircle2 className="size-12 text-eco" aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-extrabold text-navy">Your inquiry is ready</h2>
                <p className="mt-3 text-muted-foreground">
                  Thank you, {submitted.fullName.split(" ")[0]}. All required details are complete.
                </p>
                <div className="mt-6 flex gap-3 rounded-md border border-safety/40 bg-safety/5 p-4 text-sm leading-relaxed text-foreground">
                  <Info className="mt-0.5 size-5 shrink-0 text-safety" aria-hidden="true" />
                  <p>
                    <strong>Online submission is not connected yet.</strong> Your details have been
                    checked but not sent anywhere. Copy the summary below to keep a record of your
                    request.
                  </p>
                </div>
                <pre className="mt-6 max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-surface p-5 font-mono text-xs leading-relaxed text-navy">
                  {summary}
                </pre>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    variant="navy"
                    size="lg"
                    onClick={() => {
                      void navigator.clipboard?.writeText(summary).then(() => setCopied(true));
                    }}
                  >
                    <ClipboardCopy /> {copied ? "Copied" : "Copy summary"}
                  </Button>
                  <Button
                    variant="outline-navy"
                    size="lg"
                    onClick={() => {
                      reset();
                      setSubmitted(null);
                      setCopied(false);
                    }}
                  >
                    <RotateCcw /> Start a new inquiry
                  </Button>
                  <Button asChild variant="link" size="lg">
                    <Link to="/products">Browse equipment</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                <fieldset>
                  <legend className="font-display text-lg font-bold text-navy">Inquiry type</legend>
                  <Controller
                    control={control}
                    name="inquiryType"
                    render={({ field }) => (
                      <div
                        role="radiogroup"
                        aria-label="Inquiry type"
                        className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
                      >
                        {INQUIRY_TYPES.map((t) => {
                          const active = field.value === t.value;
                          return (
                            <button
                              key={t.value}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              onClick={() => field.onChange(t.value)}
                              className={cn(
                                "rounded-md border px-4 py-3 text-left text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                active
                                  ? "border-navy bg-navy text-on-dark shadow-card"
                                  : "border-input bg-background text-navy hover:border-steel hover:bg-surface",
                              )}
                            >
                              {t.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  <FieldError message={errors.inquiryType?.message} />
                </fieldset>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="fullName">Full name *</Label>
                    <Input
                      id="fullName"
                      autoComplete="name"
                      className="mt-2 h-11"
                      aria-invalid={!!errors.fullName}
                      {...register("fullName")}
                    />
                    <FieldError message={errors.fullName?.message} />
                  </div>
                  <div>
                    <Label htmlFor="company">Company name *</Label>
                    <Input
                      id="company"
                      autoComplete="organization"
                      className="mt-2 h-11"
                      aria-invalid={!!errors.company}
                      {...register("company")}
                    />
                    <FieldError message={errors.company?.message} />
                  </div>
                  <div>
                    <Label htmlFor="email">Business email *</Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 h-11"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    <FieldError message={errors.email?.message} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 h-11"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                    <FieldError message={errors.phone?.message} />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Controller
                      control={control}
                      name="industry"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger
                            id="industry"
                            className="mt-2 h-11"
                            aria-invalid={!!errors.industry}
                          >
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {INDUSTRIES.map((i) => (
                              <SelectItem key={i} value={i}>
                                {i}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FieldError message={errors.industry?.message} />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Estimated quantity</Label>
                    <Input
                      id="quantity"
                      placeholder="e.g. 4 containers"
                      className="mt-2 h-11"
                      {...register("quantity")}
                    />
                    <FieldError message={errors.quantity?.message} />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="equipment">Type of equipment required *</Label>
                    <Input
                      id="equipment"
                      placeholder="e.g. Open-top steel containers, hook-lift containers, industrial tank"
                      className="mt-2 h-11"
                      aria-invalid={!!errors.equipment}
                      {...register("equipment")}
                    />
                    <FieldError message={errors.equipment?.message} />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="description">Project description *</Label>
                    <Textarea
                      id="description"
                      rows={6}
                      placeholder="Describe your operation, the material to be handled, site conditions, and timing."
                      className="mt-2"
                      aria-invalid={!!errors.description}
                      {...register("description")}
                    />
                    <FieldError message={errors.description?.message} />
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">* Required fields</p>
                  <Button type="submit" variant="safety" size="xl" disabled={isSubmitting}>
                    Review Inquiry <ArrowRight />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
