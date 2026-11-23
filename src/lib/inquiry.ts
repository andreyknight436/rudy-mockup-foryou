import { z } from "zod";

export const INQUIRY_TYPES = [
  { value: "container-rental", label: "Container Rental" },
  { value: "custom-steel", label: "Custom Steel Containers" },
  { value: "tank-solutions", label: "Industrial Tank Solutions" },
  { value: "waste-management", label: "Waste Management" },
  { value: "partnership", label: "Manufacturing Partnership" },
  { value: "general", label: "General Business Inquiry" },
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number]["value"];

export const INDUSTRIES = [
  "Manufacturing",
  "Construction",
  "Metal Processing",
  "Industrial Maintenance",
  "Oil and Energy",
  "Infrastructure",
  "Commercial / Other",
] as const;

export function isInquiryType(value: unknown): value is InquiryType {
  return INQUIRY_TYPES.some((t) => t.value === value);
}

export const inquirySchema = z.object({
  inquiryType: z.enum(INQUIRY_TYPES.map((t) => t.value) as [InquiryType, ...InquiryType[]], {
    message: "Select an inquiry type",
  }),
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  company: z.string().trim().min(2, "Enter your company name").max(120),
  email: z.string().trim().email("Enter a valid business email").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a phone number")
    .max(30)
    .regex(/^[+()\-.\s\d]+$/, "Use digits, spaces and + ( ) - only"),
  industry: z.string().trim().min(1, "Select your industry"),
  equipment: z.string().trim().min(2, "Describe the equipment you need").max(160),
  quantity: z.string().trim().max(60).optional().or(z.literal("")),
  description: z
    .string()
    .trim()
    .min(20, "Please share at least a few sentences (20+ characters)")
    .max(2000),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
