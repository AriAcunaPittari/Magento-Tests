
import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class AddToWishCheck{
    page: Page
    alertWish: Locator;
    constructor(page:Page){
        this.page = page;
        this.alertWish = this.page.getByText('You must login or register to');
    }
    async checkAddWish(){
        await expect(this.alertWish).toBeVisible();
        await expect(this.alertWish).toHaveText("You must login or register to add items to your wishlist.");
    }
}
