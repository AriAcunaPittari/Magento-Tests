
import { Page } from "playwright-core";

export class loginCheck{
    page: Page
    //Agregar el locator que necesitamos corroborar
    constructor(page:Page){
        this.page = page;
    }
    async checkLogin(){
        // Expect login exitoso
    }
}