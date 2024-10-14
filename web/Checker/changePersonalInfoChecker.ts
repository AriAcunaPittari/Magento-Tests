import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class ChangePersonalInfoChecker {
  page: Page;
  labelEmail: Locator;
  alertSuccess: Locator;
  constructor(page: Page) {
    this.page = page;
    this.labelEmail = this.page.getByLabel("Email", { exact: true });
    this.alertSuccess = this.page.getByText("You saved the account");
  }
  async checkEmailInput() {
    await expect(this.labelEmail).toBeVisible();
  }
  async checkInfoChange() {
    await expect(this.alertSuccess).toBeVisible();
    await expect(this.alertSuccess).toHaveText(
      "You saved the account information."
    );
  }
}
