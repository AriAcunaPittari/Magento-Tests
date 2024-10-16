import { Page } from "playwright-core";

export class InfoNeeded {
  page: Page;
  infoEmail: string;
  infoPass: string;
  infoName: string;
  infoLastName: string;
  infoURL: string;
  infoTalle: string;
  infoColor: string;
  constructor(page: Page) {
    this.page = page;
    this.infoEmail = process.env.EMAIL!;
    this.infoPass = process.env.PASS!;
    this.infoName = process.env.NAME!;
    this.infoLastName = process.env.LASTNAME!;
    this.infoURL = process.env.URL_MAGENTO!;
    this.infoTalle = process.env.TALLE!;
    this.infoColor = process.env.COLOR!;
  }
}
