import { describe, expect, it } from "vitest";
import { INQUIRY_TYPES, inquirySchema } from "@/lib/inquiry";

const valid = {
  inquiryType: "container-rental",
  fullName: "Jordan Lee",
  company: "Acme Metals",
  email: "jordan@acme-metals.com",
  phone: "+1 (555) 010-2000",
  industry: "Metal Processing",
  equipment: "Open-top steel containers",
  quantity: "4",
  description: "We need containers for steel offcuts at our main plant.",
};

describe("quote request form", () => {
  it("offers exactly the six inquiry types from the brief", () => {
    expect(INQUIRY_TYPES.map((t) => t.label)).toEqual([
      "Container Rental",
      "Custom Steel Containers",
      "Industrial Tank Solutions",
      "Waste Management",
      "Manufacturing Partnership",
      "General Business Inquiry",
    ]);
  });

  it("accepts a complete inquiry", () => {
    expect(inquirySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid business email", () => {
    expect(inquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires company name and industry", () => {
    expect(inquirySchema.safeParse({ ...valid, company: "" }).success).toBe(false);
    expect(inquirySchema.safeParse({ ...valid, industry: "" }).success).toBe(false);
  });

  it("treats estimated quantity as optional", () => {
    expect(inquirySchema.safeParse({ ...valid, quantity: "" }).success).toBe(true);
  });
});
