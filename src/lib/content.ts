import { img } from "@/lib/assets";
import type { InquiryType } from "@/lib/inquiry";

export type Status = "planned" | "in-development" | "vision" | "open";

export const STATUS_LABEL: Record<Status, string> = {
  planned: "Planned service",
  "in-development": "In development",
  vision: "Long-term vision",
  open: "Open for discussion now",
};

export const SOLUTIONS = [
  {
    key: "steel",
    title: "Industrial Steel Containers",
    text: "Heavy-duty steel containers intended for demanding industrial environments, from production floors to outdoor yards.",
    image: img.openTop,
    alt: "Navy open-top heavy-duty steel waste container in an industrial facility",
    status: "in-development" as Status,
    to: "/products" as const,
  },
  {
    key: "rental",
    title: "Container Rental Solutions",
    text: "A proposed rental model that lets businesses access suitable containers without purchasing every unit outright.",
    image: img.hookLift,
    alt: "Hook-lift truck loading a blue steel roll-off container at an industrial site",
    status: "planned" as Status,
    to: "/rentals" as const,
  },
  {
    key: "tank",
    title: "Industrial Tank Solutions",
    text: "Industrial tank rental concepts and specialized container applications for operations with specific handling needs.",
    image: img.tanks,
    alt: "Horizontal and vertical industrial steel storage tanks at a facility",
    status: "planned" as Status,
    to: "/products" as const,
  },
  {
    key: "collection",
    title: "Collection & Transportation Coordination",
    text: "Planned coordination of collection, transportation, and appropriate disposal arrangements through qualified partners.",
    image: img.handling,
    alt: "Industrial compactor connected to an enclosed steel roll-off container at a loading dock",
    status: "planned" as Status,
    to: "/waste-management" as const,
  },
  {
    key: "cleaning",
    title: "Container Cleaning & Maintenance",
    text: "A planned process for cleaning, inspecting, and preparing containers so they are ready for their next use.",
    image: img.cleaning,
    alt: "Worker in safety gear pressure washing the inside of a steel container",
    status: "planned" as Status,
    to: "/waste-management" as const,
  },
  {
    key: "custom",
    title: "Custom Manufacturing",
    text: "Custom-built steel containers designed around your application, produced through qualified manufacturing partners.",
    image: img.welding,
    alt: "Welder fabricating a heavy steel container frame in a workshop",
    status: "in-development" as Status,
    to: "/custom-containers" as const,
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Understand Requirements",
    text: "Understand the customer's waste-handling requirements and operational environment.",
  },
  {
    n: "02",
    title: "Identify Container Requirements",
    text: "Determine suitable container dimensions, material, and specifications.",
  },
  {
    n: "03",
    title: "Manufacturing or Equipment Sourcing",
    text: "Coordinate the appropriate equipment through qualified suppliers or manufacturing partners.",
  },
  {
    n: "04",
    title: "Rental and Collection Planning",
    text: "Discuss rental arrangements, collection schedules, and qualified transportation partners.",
  },
  {
    n: "05",
    title: "Cleaning and Reuse",
    text: "Plan appropriate cleaning, inspection, and preparation before subsequent rentals.",
  },
];

export type Product = {
  slug: string;
  name: string;
  application: string;
  description: string;
  image: string;
  alt: string;
  inquiry: InquiryType;
  uses: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "open-top",
    name: "Open-Top Steel Waste Containers",
    application: "Bulk industrial and production waste",
    description:
      "Rugged open-top containers for high-volume, non-hazardous industrial waste streams and scrap collection.",
    image: img.openTop,
    alt: "Open-top heavy-duty steel waste container painted navy blue",
    inquiry: "container-rental",
    uses: ["Production scrap", "Packaging and pallets", "Site clean-outs"],
  },
  {
    slug: "skip-bins",
    name: "Heavy-Duty Industrial Skip Bins",
    application: "In-plant collection points",
    description:
      "Compact, liftable skip bins designed to sit close to work areas and be emptied or exchanged on a schedule.",
    image: img.skipBins,
    alt: "Row of blue industrial steel skip bins with orange lifting lugs",
    inquiry: "container-rental",
    uses: ["Workstation collection", "Metal offcuts", "Maintenance debris"],
  },
  {
    slug: "hook-lift",
    name: "Hook-Lift Containers",
    application: "Exchangeable roll-on / roll-off service",
    description:
      "Large-format containers intended for hook-lift trucks, allowing full containers to be swapped for empty ones.",
    image: img.hookLift,
    alt: "Hook-lift truck lifting a large blue steel container",
    inquiry: "container-rental",
    uses: ["Construction waste", "Bulk scrap", "Large-volume streams"],
  },
  {
    slug: "tanks",
    name: "Industrial Storage Tanks",
    application: "Specialized storage and handling concepts",
    description:
      "Industrial tank concepts for operations that need temporary or project-based storage. Suitability is assessed case by case.",
    image: img.tanks,
    alt: "Industrial steel storage tanks with pipework and ladders",
    inquiry: "tank-solutions",
    uses: ["Project-based storage", "Temporary capacity", "Process support"],
  },
  {
    slug: "custom",
    name: "Custom Steel Container Concepts",
    application: "Application-specific equipment",
    description:
      "Containers built around a specific footprint, handling method, or material — designed with qualified fabrication partners.",
    image: img.custom,
    alt: "Custom fabricated blue steel container with hinged lid and forklift pockets",
    inquiry: "custom-steel",
    uses: ["Forklift-handled units", "Lidded containers", "Unique footprints"],
  },
  {
    slug: "handling",
    name: "Industrial Waste-Handling Equipment",
    application: "Compaction and enclosed collection",
    description:
      "Enclosed containers and compaction-ready setups for facilities looking to organize waste flow at the loading dock.",
    image: img.handling,
    alt: "Stationary compactor attached to an enclosed steel container at a loading dock",
    inquiry: "waste-management",
    uses: ["Loading-dock collection", "Enclosed storage", "Volume reduction"],
  },
];

export const INDUSTRIES_SERVED = [
  {
    name: "Manufacturing",
    text: "Steady, predictable waste streams that benefit from planned container placement and exchange.",
    image: img.facility,
    alt: "Modern manufacturing facility with overhead cranes and steel container bodies",
  },
  {
    name: "Construction",
    text: "Project-based container needs that change as sites move through each phase of work.",
    image: img.construction,
    alt: "Construction site with steel framework, tower crane and a blue roll-off container",
  },
  {
    name: "Metal Processing",
    text: "Heavy offcuts and scrap that call for durable steel containers built for weight.",
    image: img.metal,
    alt: "Metal processing plant with steel coils and a plasma cutting machine",
  },
  {
    name: "Industrial Maintenance",
    text: "Shutdowns and maintenance programs that need temporary, well-organized collection points.",
    image: img.maintenance,
    alt: "Technician in safety gear inspecting a heavy steel container",
  },
  {
    name: "Oil and Energy",
    text: "Facilities with specialized handling requirements, where suitability is assessed carefully.",
    image: img.energy,
    alt: "Oil and energy facility with refinery towers and steel tanks at dawn",
  },
  {
    name: "Infrastructure",
    text: "Long-duration public and civil works with evolving equipment and logistics needs.",
    image: img.infrastructure,
    alt: "Bridge infrastructure project with concrete pillars and steel girders",
  },
];

export const PARTNERS = [
  {
    title: "Industrial Customers",
    text: "Share your requirements early and help shape a service built around real operations.",
  },
  {
    title: "Steel Manufacturers",
    text: "Explore production partnerships for durable, repeatable container designs.",
  },
  {
    title: "Welding Professionals",
    text: "Experienced welders and fabricators interested in custom and series work.",
  },
  {
    title: "Equipment Suppliers",
    text: "Suppliers of containers, tanks, lifting gear, and related equipment.",
  },
  {
    title: "Transportation Partners",
    text: "Qualified haulers and hook-lift operators for collection coordination.",
  },
  {
    title: "Business Collaborators",
    text: "Investors, advisors, and operators interested in the venture's development.",
  },
];

export const FAQS = [
  {
    q: "What types of industrial containers are being planned?",
    a: "The initial focus is on open-top steel waste containers, heavy-duty skip bins, hook-lift containers, and industrial tank concepts, with custom steel containers available through manufacturing partners. The final product range will be shaped by customer demand and partnership arrangements.",
  },
  {
    q: "How does the container rental model work?",
    a: "The proposed model allows businesses to rent suitable containers instead of purchasing every unit. Requirements are reviewed, the right equipment is identified and sourced, and rental terms, collection planning, and cleaning between uses are agreed upfront. The rental service is still being developed and is not yet operating.",
  },
  {
    q: "Can businesses request custom container designs?",
    a: "Yes, you can discuss custom requirements today. Custom containers would be designed and built through qualified manufacturing and welding partners. Feasibility, timelines, and pricing are confirmed individually for each request.",
  },
  {
    q: "Can collection and transportation be coordinated?",
    a: "Collection and transportation coordination is a planned service that would work through qualified, appropriately licensed transportation and disposal partners. It is not currently available. Hazardous waste is not accepted or transported unless all required approvals and qualifications are in place.",
  },
  {
    q: "Are specifications available for different applications?",
    a: "Specifications are prepared on request based on your application, handling method, and site conditions. Published capacities, material grades, or certifications are not offered at this stage.",
  },
  {
    q: "How can industrial businesses discuss their requirements?",
    a: "Use the Request a Quote page to describe your operation, the equipment you are considering, and estimated quantities. Early conversations help shape the service and make sure it fits real operational needs.",
  },
];
