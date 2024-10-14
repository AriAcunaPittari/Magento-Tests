// se busca el producto, se selecciona el color y talle y se agrega al carrito

import { Locator, Page } from "playwright-core";
import { InfoNeeded } from "./infoNeeded";

export class AddToCartPage {
  page: Page;
  selectCategory: Locator;
  addBtn: Locator;
  row: Locator;
  table: Locator;
  selectSizePants: Locator;
  selectSizeTop: Locator;
  selectColor: Locator;
  alertCartAdded: Locator;
  infoNeeded: InfoNeeded;
  constructor(page: Page) {
    this.page = page;
    this.selectCategory = this.page.getByRole("link", {
      name: "New Luma Yoga Collection Get",
    });
    this.addBtn = this.page.getByTitle("Add to Cart");
    this.table = this.page.getByText("New Luma Yoga Collection View");
    this.row = this.table.locator("li");
    this.selectSizePants = this.page.getByLabel("28");
    this.selectSizeTop = this.page.getByLabel("XL");
    this.selectColor = this.page.getByLabel("Purple");
    this.alertCartAdded = this.page.getByRole("alert").locator("div").first();
    this.infoNeeded = new InfoNeeded(this.page);
  }
  async searchProduct() {
    await this.selectCategory.click();
  }
  async selectProduct(productos: string[]) {
    await this.page.waitForLoadState("networkidle");
    let foundProducts = 0;
    for (let i = 0; i < (await this.row.count()); i++) {
      const productItem = this.row
        .locator("div[class='product details product-item-details']")
        .nth(i)
        .locator("strong")
        .locator("a");
      const product = await productItem.innerText();
      if (productos.includes(product)) {
        await productItem.scrollIntoViewIfNeeded();
        await productItem.click();
        await this.page.waitForLoadState("networkidle");
        if (await this.selectSizePants.isVisible()) {
          await this.selectSizePants.waitFor({ state: "visible" });
          await this.selectSizePants.scrollIntoViewIfNeeded();
          await this.selectSizePants.click();
          await this.selectColor.click();
          await this.addBtn.click();
          await this.alertCartAdded.waitFor({ state: "visible" });
          await this.page.goBack();
        } else if (await this.selectSizeTop.isVisible()) {
          await this.selectSizeTop.waitFor({ state: "visible" });
          await this.selectSizeTop.scrollIntoViewIfNeeded();
          await this.selectSizeTop.click();
          await this.selectColor.click();
          await this.addBtn.click();
          await this.alertCartAdded.waitFor({ state: "visible" });
          await this.page.goBack();
        }
        foundProducts++;
        if (foundProducts === productos.length) {
          break;
        }
      }
    }
  }
}
