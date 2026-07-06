export const siteConfig = {
  name: "Vishal Manam",
  shortName: "V",
  title: "Software & ML Engineer",
  description:
    "Software and machine learning engineer building dependable systems across intelligent energy, computer vision, and data platforms.",
  footerDescription:
    "Software Engineer building reliable software for intelligent systems, cloud platforms, and real-world applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vishalmanam.dev",
  locale: "en_US",
  email: "vmanam1@asu.edu",
  resume: {
    path: "/resume.pdf",
    updatedAt: "2026-07",
  },
  social: {
    github: "https://github.com/vmanam1",
    linkedin: "https://www.linkedin.com/in/vishal-manam/",
    leetcode: "https://leetcode.com/u/vmanam1/",
    instagram: "https://www.instagram.com/vmanam1",
    twitter: "https://x.com/VishalManam",
    letterboxd: "https://letterboxd.com/vmanam1/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
