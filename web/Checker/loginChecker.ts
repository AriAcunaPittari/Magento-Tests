
import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class LoginCheck{
    page: Page
    //Agregar el locator que necesitamos corroborar
    bannerWelcome: Locator;
    constructor(page:Page){
        this.page = page;
        this.bannerWelcome = this.page.getByText('Skip to Content Welcome,');
    }
    async checkLogin(){
        // Expect login exitoso
        await expect(this.bannerWelcome).toBeVisible();

    }
}