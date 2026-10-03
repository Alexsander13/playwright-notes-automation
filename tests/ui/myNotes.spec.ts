import { TIMEOUT } from "node:dns";
import { expect, test } from "../../src/utils/base-test";
import { loginTestUser } from "../../src/utils/test-data";
import { setTimeout } from "node:timers";


test("createMyNotes", async ({ page }) => {
  await page.goto("/notes/app");



  await page.pause();


await expect(page.getByRole('link', { name: 'MyNotes' })).toBeVisible();



в работе !!!


});