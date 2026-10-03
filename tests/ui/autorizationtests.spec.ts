import { expect, test } from "../../src/utils/base-test";
import { loginTestUser,generateTestUser } from "../../src/utils/test-data";
import { AuthPage } from "../../src/pages/auth.page";



test.use({ storageState: { cookies: [], origins: [] } });


test("Login", async ({ page }) => {
  const authPage = new AuthPage(page);
  const user = loginTestUser();

  await authPage.openLogin();
  await authPage.login(user.email, user.password);

  await expect(authPage.myNotesLink).toBeVisible();
});



test("Register", async ({ page }) => {
  const authPage = new AuthPage(page);
  const userData = generateTestUser();

  await authPage.openRegister();
  await authPage.register(userData);

  await page.waitForURL('**/notes/app/register');
  await expect(page.getByText('User account created successfully')).toBeVisible();

  
});
