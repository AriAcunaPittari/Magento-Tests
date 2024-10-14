// completar todos los campos y terminar la compra.

import { Locator, Page } from "playwright-core";
import { InfoNeeded } from "./infoNeeded";

export class ChangePersonalInfoPage {
  page: Page;
  accOptions: Locator;
  myAccountBtn: Locator;
  editInfoBtn: Locator;
  labelName: Locator;
  checkEmail: Locator;
  labelEmail: Locator;
  saveBtn: Locator;
  labelPass: Locator;
  infoNeeded: InfoNeeded;

  constructor(page: Page) {
    this.page = page;
    this.accOptions = this.page
      .getByRole("banner")
      .locator("button")
      .filter({ hasText: "Change" });
    this.myAccountBtn = this.page.getByRole("link", { name: "My Account" });
    this.editInfoBtn = this.page.getByRole("link", {
      name: "Edit",
      exact: true,
    });
    this.labelName = this.page.getByLabel("First Name");
    this.checkEmail = this.page.getByLabel("Change Email");
    this.labelEmail = this.page.getByLabel("Email", { exact: true });
    this.saveBtn = this.page.getByRole("button", { name: "Save" });
    this.labelPass = this.page.getByLabel("Current Password");
    this.infoNeeded = new InfoNeeded(this.page);
  }
  async goToPeronalInfo() {
    await this.accOptions.click();
    await this.myAccountBtn.click();
  }
  async changePersonalInfo() {
    await this.editInfoBtn.click();
    await this.labelName.fill(process.env.NAME_COMPLETE!);
    await this.checkEmail.click();
    await this.labelEmail.fill(process.env.EMAIL_CHANGE!);
    await this.labelPass.fill(this.infoNeeded.infoPass);
  }
  async saveChanges() {
    await this.saveBtn.click();
  }
}
