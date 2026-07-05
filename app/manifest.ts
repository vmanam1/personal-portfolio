import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.title}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#08111b",
    theme_color: "#08111b",
  };
}
