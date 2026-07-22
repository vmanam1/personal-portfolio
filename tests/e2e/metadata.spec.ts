import { expect, test } from "@playwright/test";

test("home and project pages expose canonical SEO metadata", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Vishal Manam/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /software and machine learning/i,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    /Vishal Manam/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "http://localhost:3000",
  );

  await page.goto("/projects/pdf-rag-pipeline");
  await expect(page).toHaveTitle(/PDF RAG Pipeline/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "http://localhost:3000/projects/pdf-rag-pipeline",
  );
});

for (const asset of [
  "/icon.svg",
  "/opengraph-image",
  "/manifest.webmanifest",
  "/robots.txt",
]) {
  test(`${asset} is available`, async ({ request }) => {
    const response = await request.get(asset);
    expect(response.status()).toBe(200);
    expect((await response.body()).byteLength).toBeGreaterThan(0);
  });
}

test("responses are marked noindex for search engines", async ({ request }) => {
  const response = await request.get("/");
  expect(response.headers()["x-robots-tag"]).toContain("noindex");
});

test("robots.txt does not advertise a sitemap", async ({ request }) => {
  const response = await request.get("/robots.txt");
  const body = await response.text();
  expect(body.toLowerCase()).not.toContain("sitemap");
});
