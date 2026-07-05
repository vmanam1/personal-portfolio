import { expect, test } from "@playwright/test";

test("changes and persists the selected theme", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Choose color theme" }).click();
  await page.getByRole("menuitem", { name: "Light" }).click();

  await expect(page.locator("html")).toHaveClass(/light/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/light/);
});

test("mobile navigation opens, navigates, and closes", async ({
  page,
  isMobile,
}) => {
  test.skip(
    !isMobile,
    "Mobile navigation is only rendered for the mobile project",
  );

  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const dialog = page.getByRole("dialog", { name: "Navigation" });
  await expect(dialog).toBeVisible();
  await dialog.getByRole("link", { name: "Experience" }).click();

  await expect(page).toHaveURL(/\/experience$/);
  await expect(dialog).toBeHidden();
});
