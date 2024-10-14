// Logout :D

import { Locator, Page } from "playwright-core";

export class LogoutPage {
  page: Page;
  accOptions: Locator;
  signOut: Locator;
  textCustomerLogin: Locator;
  constructor(page: Page) {
    this.page = page;
    this.accOptions = this.page
      .getByRole("banner")
      .locator("button")
      .filter({ hasText: "Change" });
    this.signOut = this.page.getByRole("link", { name: "Sign Out" });
    this.textCustomerLogin = this.page.getByText("Customer Login");
  }
  async logOut() {
    await this.page.waitForLoadState("networkidle");
    await this.accOptions.isVisible();
    await this.accOptions.click();
    await this.signOut.click();
  }
}
