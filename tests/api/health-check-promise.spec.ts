import { expect, test } from "@playwright/test";

test("Promise API ", async ({ request }) => {
  const [homeResponse, apiResponse] = await Promise.all([
  request.get("/"),
  request.get("/notes/api"),
]);

expect(homeResponse.ok()).toBeTruthy();
expect(apiResponse.ok()).toBeTruthy();
console.log(homeResponse);
});