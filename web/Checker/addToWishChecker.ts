
import { Page } from "playwright-core";

export class addToWishCheck{
    page: Page
    //Agregar el locator que necesitamos corroborar
    constructor(page:Page){
        this.page = page;
    }
    async checkAddWish(){
        // Expect que haya redirigido a la pagina de login y aparezca el aviso de logueo necesario
    }
}
