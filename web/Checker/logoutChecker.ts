import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class LogoutCheck {
  page: Page;
  //Agregar el locator que necesitamos corroborar
  alertSignOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alertSignOut = this.page.getByText("You are signed out");
  }
  async checkLogout() {
    // Expect logout exitoso
    await expect(this.alertSignOut).toBeVisible();
  }
}
