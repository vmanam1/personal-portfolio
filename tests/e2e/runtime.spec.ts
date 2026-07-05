import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/experience",
  "/projects",
  "/projects/arizona-power-outage-archive",
  "/projects/authentication-portal",
  "/projects/automatic-license-plate-detection",
  "/projects/customer-churn-prediction",
  "/projects/django-blog-platform",
  "/projects/nyc-data-analytics-pipeline",
  "/projects/pdf-rag-pipeline",
  "/skills",
  "/education",
  "/resume",
  "/contact",
];

for (const route of routes) {
  test(`${route} renders without console, hydration, or page errors`, async ({
    page,
  }) => {
    const errors: string[] = [];

    page.on("console", (message) => {
      if (message.type() === "error") errors.push(`console: ${message.text()}`);
    });
    page.on("pageerror", (error) => errors.push(`page: ${error.message}`));

    const response = await page.goto(route, { waitUntil: "networkidle" });

    expect(response?.status()).toBe(200);
    expect(errors).toEqual([]);
  });
}

test("all rendered internal links resolve successfully", async ({
  page,
  request,
}) => {
  const hrefs = new Set<string>();

  for (const route of routes) {
    await page.goto(route);
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((elements) =>
        elements
          .map((element) => element.getAttribute("href"))
          .filter((href): href is string => Boolean(href)),
      );
    links.forEach((href) => hrefs.add(href.split("#")[0] || "/"));
  }

  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status(), `${href} should resolve`).toBeLessThan(400);
  }
});

test("project MDX renders the complete project structure", async ({ page }) => {
  await page.goto("/projects/pdf-rag-pipeline");

  const sections = [
    "Overview",
    "Problem",
    "Solution",
    "Architecture",
    "Features",
    "Tech Stack",
    "Implementation",
    "Challenges",
    "Lessons Learned",
    "Future Improvements",
  ];

  for (const heading of sections) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible();
  }
});
