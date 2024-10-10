// completar todos los campos y terminar la compra.

import { Page } from "playwright-core";

export class CheckOutPage{
    page: Page
    constructor(page:Page){
        this.page = page;
    }
    async goToCheckout(){
        // Dirigirse al checkout clickeando la cart
    }
    async completeOrder(){
        // Rellenar todos los campos necesarios y completar la compra 

    }
}