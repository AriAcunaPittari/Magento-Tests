// login comun y corriente + agregar local storage

import { Locator, Page } from "playwright-core";
import { InfoNeeded } from "./infoNeeded";

export class LoginPage{
    page: Page

    inputEMail: Locator;
    inputPass: Locator;
    loginBtn: Locator;
    confirmLogin: Locator;
    infoNeeded: InfoNeeded;

    constructor(page:Page){
        this.page = page;
        this.inputEMail = this.page.getByLabel('Email', { exact: true });
        this.inputPass = this.page.getByRole('textbox', { name: 'Password*', exact: true });
        this.loginBtn = this.page.getByRole('link', { name: 'Sign In' });
        this.confirmLogin = this.page.getByRole('button', { name: 'Sign In' });
        this.infoNeeded = new InfoNeeded(this.page);
    }

    async login(){
        await this.loginBtn.click();
        await this.inputEMail.fill(this.infoNeeded.infoEmail);
        await this.inputPass.fill(this.infoNeeded.infoPass);
        await this.confirmLogin.click();
    }
}




