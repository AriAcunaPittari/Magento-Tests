
import { Page } from "playwright-core";

export class AddToCartChecker{
    page: Page
    //Agregar el locator que necesitamos corroborar
    constructor(page:Page){
        this.page = page;
    }
    async checkColorChange(){
        // Expect que la imagen se haya cambiado al color indicado.
        
    }
    async checkAddCart(){
        // Expect que se haya agregado exitosamente al carrito
    }
}