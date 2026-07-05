import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/config/site";
import { getProjectSlugs } from "@/lib/content/projects";

const staticRoutes = [
  "",
  "/experience",
  "/projects",
  "/skills",
  "/education",
  "/resume",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectSlugs = await getProjectSlugs();
  const routes = [
    ...staticRoutes,
    ...projectSlugs.map((slug) => `/projects/${slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route || "/", siteConfig.url).toString(),
    changeFrequency: route.startsWith("/projects/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
  }));
}
