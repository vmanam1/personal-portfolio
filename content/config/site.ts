export const siteConfig = {
  name: "Vishal Manam",
  shortName: "VM",
  title: "Software & ML Engineer",
  description:
    "Software and machine learning engineer building dependable systems across intelligent energy, computer vision, and data platforms.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  email: null,
  resume: {
    path: null,
    updatedAt: null,
  },
  social: {
    github: "https://github.com/vmanam1",
    linkedin: "https://www.linkedin.com/in/vishal-manam/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
