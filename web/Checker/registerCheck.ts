import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class RegisterCheck {
    page:Page;
    registroAlert: Locator;

    constructor(page:Page){
        this.page = page;
        this.registroAlert = this.page.getByText('Thank you for registering');
    }
    async checkRegister(){
        await expect(this.registroAlert).toHaveText("Thank you for registering with Main Website Store.");
    }
}