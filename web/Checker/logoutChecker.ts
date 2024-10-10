
import { Page } from "playwright-core";

export class LogoutCheck{
    page: Page
    //Agregar el locator que necesitamos corroborar
    constructor(page:Page){
        this.page = page;
    }
    async checkLogout(){
        // Expect logout exitoso
    }
}