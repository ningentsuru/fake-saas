import { test, expect } from "@playwright/test";

const baseUrl = "http://localhost:3000";
const credentials = {
  email: "test@account.com",
  password: "password123",
};
const navigationItems = [
  { label: "Dashboard", path: "/dashboard", heading: "Dashboard Page" },
  { label: "Inventory", path: "/inventory", heading: "Inventory Page" },
  {
    label: "Point of Sale",
    path: "/point-of-sale",
    heading: "Point of Sale Page",
  },
  { label: "Price Check", path: "/price-check", heading: "Price Check Page" },
];

async function signIn(page: Parameters<typeof test>[0]["page"]) {
  await page.goto(`${baseUrl}/login`);
  await page.getByLabel("Email").fill(credentials.email);
  await page.getByLabel("Password").fill(credentials.password);
  await page.getByRole("button", { name: /login/i }).click();
  await expect(page).toHaveURL(`${baseUrl}/dashboard/`);
  await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
}

test.describe("app navigation", () => {
  for (const item of navigationItems) {
    test(`navigates to ${item.label}`, async ({ page }) => {
      await signIn(page);
      await page.getByRole("link", { name: item.label }).click();
      await expect(page).toHaveURL(`${baseUrl}${item.path}/`);
      await expect(
        page.getByRole("heading", { name: item.heading }),
      ).toBeVisible();
    });
  }
});
