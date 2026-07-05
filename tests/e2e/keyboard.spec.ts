import { expect, test } from "@playwright/test";

test("skip navigation moves keyboard focus to main content", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("theme menu is fully keyboard operable", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Choose color theme" });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("menuitem", { name: "System" })).toBeVisible();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("reduced-motion preference prevents card movement", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/projects");
  const card = page.locator("article").first();
  await card.hover();

  await expect(card).toHaveCSS("transform", "none");
});
