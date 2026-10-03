import { expect, test } from "@playwright/test";

test("Notes API доступен", async ({ request }) => {
  const response = await request.get("/api/health-check");
  const body = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(body.success).toBe(true);
  expect(body.message).toBe("API is up!");
  expect(body.status).toBe("UP");
});