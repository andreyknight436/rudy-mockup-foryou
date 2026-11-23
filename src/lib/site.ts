export const BRAND = {
  name: "Rudy",
  short: "Rudy",
  tagline: "Industrial steel container rental & waste management",
} as const;

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products & Equipment" },
  { to: "/rentals", label: "Container Rentals" },
  { to: "/waste-management", label: "Waste Management" },
  { to: "/custom-containers", label: "Custom Containers" },
  { to: "/vision", label: "Our Vision" },
] as const;

export type NavPath = (typeof NAV)[number]["to"] | "/" | "/contact";
