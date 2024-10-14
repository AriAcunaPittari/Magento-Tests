//Se agrega a la wishlist sin la sesion iniciada para que redireccione 
//a la pantalla de login y muestre un mensaje indicando que es necesario el logueo

import { Locator, Page } from "playwright-core";

export class AddToWishPage{
    page: Page
    selectWish: Locator;
    product: Locator;
    constructor(page:Page){
        this.page = page;
        this.product = this.page.getByText('Fusion Backpack');
        this.selectWish= this.page.locator('li').filter({ hasText: 'Fusion Backpack Rating: 67% 3' }).getByRole('link').nth(3);
    }

    async addFromHomePage(){
        // Scrollea buscando el producto y lo agrega a la wishlist
        await this.product.hover();
        await this.selectWish.waitFor({state:"visible"});
        await this.selectWish.click();
    }
}




