// se busca el producto, se selecciona el color y talle y se agrega al carrito

import { Locator, Page } from "playwright-core";

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
  }
  async searchProduct() {
    await this.selectCategory.click();
  }
  async selectProduct(productos: string[]) {
    await this.page.waitForLoadState("networkidle");
    let foundProducts = 0;
    await this.page.pause(); //! QUITAR !
    for (let i = 0; i < (await this.row.count()); i++) {
      const productItem = await this.row
        .locator("div[class='product details product-item-details']")
        .nth(i)
        .locator("strong")
        .locator("a");
      const product = await productItem.innerText();
      if (await productos.includes(product)) {
        await productItem.click();
        await this.page.waitForLoadState("load");
        if (await this.selectSizePants.isVisible()) {
          await this.selectSizePants.waitFor({ state: "visible" });
          await this.selectSizePants.click();
          await this.selectColor.click();
          await this.addBtn.click();
          await this.alertCartAdded.waitFor({ state: "visible" });
          await this.page.goBack();
        } else if (await this.selectSizeTop.isVisible()) {
          await this.selectSizeTop.waitFor({ state: "visible" });
          await this.selectSizeTop.click();
          await this.selectColor.click();
          await this.addBtn.click();
          await this.alertCartAdded.waitFor({ state: "visible" });
          await this.page.goBack();
        }
        await foundProducts++;
        if (await foundProducts === productos.length) {
          break;
        }
      }
    }
  }
}
