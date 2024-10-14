import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class LogoutCheck {
  page: Page;
  alertSignOut: Locator;
  loginText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alertSignOut = this.page.getByText("You are signed out");
    this.loginText = this.page.getByText('Customer Login');
  }
  async checkLogout() {
    if(await this.alertSignOut.isVisible()){
      await expect(this.alertSignOut).toBeVisible();
    } else{
      await expect(this.loginText).toBeVisible();
    }
  }
}
