import { Page, expect } from '@playwright/test';

export class AuthPage {
  constructor(private page: Page) {}

  // Локаторы для Login
  get loginLink() { return this.page.getByRole('link', { name: 'Login' }); }
  get loginEmail() { return this.page.getByLabel('Email address'); }
  get loginPassword() { return this.page.getByLabel('Password'); }
  get loginButton() { return this.page.getByRole('button', { name: 'Login' }); }
  get myNotesLink() { return this.page.getByRole('link', { name: 'MyNotes' }); }

  // Локаторы для Register
  get registerEmail() { return this.page.getByRole('textbox', { name: 'Email address' }); }
  get registerName() { return this.page.getByRole('textbox', { name: 'Name' }); }
  get registerPassword() { return this.page.getByLabel('Password', { exact: true }); }
  get confirmPassword() { return this.page.getByTestId('register-confirm-password'); }
  get registerButton() { return this.page.getByRole('button', { name: 'Register' }); }

  // Методы действий
  async openLogin() {
    await this.page.goto("/notes/app");
  }

  async openRegister() {
    await this.page.goto("notes/app/register");
  }

  async login(email: string, pass: string) {
    await this.loginLink.click();
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(pass);
    await this.loginButton.click();
  }

  async register(userData: { email: string; name: string; password: string }) {
    await this.registerEmail.fill(userData.email);
    await this.registerName.fill(userData.name);
    await this.registerPassword.fill(userData.password);
    await this.confirmPassword.fill(userData.password);
    await this.registerButton.click();
  }
}
