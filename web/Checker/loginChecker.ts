
import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class LoginCheck{
    page: Page
    bannerWelcome: Locator;
    constructor(page:Page){
        this.page = page;
        this.bannerWelcome = this.page.getByText('Skip to Content Welcome,');
    }
    async checkLogin(){
        await expect(this.bannerWelcome).toBeVisible();

    }
}