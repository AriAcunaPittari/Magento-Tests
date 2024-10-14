// registro de nuevo usuario.

import { Locator, Page } from "playwright-core";
import { InfoNeeded } from "./infoNeeded";

export class RegisterPage {
  page: Page;
  registerBtn: Locator;
  inputName: Locator;
  inputLastName: Locator;
  inputEMail: Locator;
  inputPass: Locator;
  inputConfirmPass: Locator;
  createAccBtn: Locator;
  infoNeeded: InfoNeeded;
  constructor(page: Page) {
    this.page = page;
    this.registerBtn = this.page.getByRole("link", {
      name: "Create an Account",
    });
    this.inputName = this.page.getByLabel("First Name");
    this.inputLastName = this.page.getByLabel("Last Name");
    this.inputEMail = this.page.getByLabel("Email", { exact: true });
    this.inputPass = this.page.getByRole("textbox", {
      name: "Password*",
      exact: true,
    });
    this.inputConfirmPass = this.page.getByLabel("Confirm Password");
    this.createAccBtn = this.page.getByRole("button", {
      name: "Create an Account",
    });
    this.infoNeeded = new InfoNeeded(this.page);
  }
  async createAccount() {
    await this.registerBtn.click();
    await this.inputName.fill(this.infoNeeded.infoName);
    await this.inputLastName.fill(this.infoNeeded.infoLastName);
    await this.inputEMail.fill(this.infoNeeded.infoEmail);
    await this.inputPass.fill(this.infoNeeded.infoPass);
    await this.inputConfirmPass.fill(this.infoNeeded.infoPass);
    await this.createAccBtn.click();
  }
}
