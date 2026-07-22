import type { MetadataRoute } from "next";

// Crawling is allowed on purpose: the site sends `noindex` via the
// X-Robots-Tag header and page metadata, and a crawler must be able to fetch
// the page to see that signal. Blocking here would prevent the noindex from
// being honored and could leave bare URLs in search results. No sitemap is
// published so no URLs are advertised.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
