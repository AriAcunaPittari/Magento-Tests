//Se agrega a la wishlist sin la sesion iniciada para que redireccione 
//a la pantalla de login y muestre un mensaje indicando que es necesario el logueo

import { Page } from "playwright-core";

export class AddToWishPage{
    page: Page
    constructor(page:Page){
        this.page = page;
    }
    async addFromHomePage(){
        // Scrollea buscando el producto y lo agrega a la wishlist
    }
}




