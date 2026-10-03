import { expect, test } from "../src/utils/base-test";

test("мой первый запуск", async ({ page }) => {
  await page.goto("/inputs");

  await page.getByLabel("Input: Number").fill("18");
  await page.getByLabel("Input: Text").fill("Анна");
  await page.getByLabel("Input: Password").fill("Parol");
  await page.getByLabel("Input: Date").fill("2026-10-01");

  await page.getByRole("button", { name: "Display Inputs" }).click();
  
  await expect(page.locator("#output-number")).toHaveText('18');
  await expect(page.locator('#output-date')).toHaveText('2026-10-01');




});