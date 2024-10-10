// se busca el producto, se selecciona el color y talle y se agrega al carrito

import { Page } from "playwright-core";

export class AddToCartPage{
    page: Page
    constructor(page:Page){
        this.page = page;
    }
    async searchProduct(){
        //Busco el producto con la informacion del .env (Enter)

    }
    async selectProduct(){
        // Seleccionar el producto filtrado anteriormente
        // Elegir el color y el talle

    }
    async addCart(){
        // Se agrega al carrito (capaz lo cambie para que agregue al seleccionarlo)

    }
}



