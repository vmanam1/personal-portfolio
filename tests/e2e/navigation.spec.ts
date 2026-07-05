import { expect, test } from "@playwright/test";

test("navigates through primary portfolio routes", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "scalable software systems",
  );
  await page.getByRole("link", { name: "View projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Systems, pipelines, and products.",
  );

  await page.getByRole("link", { name: "PDF RAG Pipeline" }).click();
  await expect(page).toHaveURL(/\/projects\/pdf-rag-pipeline$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "PDF RAG Pipeline",
  );
});

test("returns a useful 404", async ({ page }) => {
  const response = await page.goto("/route-that-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This route doesn’t exist.",
  );
  await expect(
    page
      .locator("#main-content")
      .getByRole("link", { name: "Home", exact: true }),
  ).toBeVisible();
});
