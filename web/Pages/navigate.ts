import { Page } from "playwright-core";
import { InfoNeeded } from "./infoNeeded";

export class NavigatePage{
    page: Page;
    infoNeeded: InfoNeeded;
    constructor(page:Page){
        this.page = page;
        this.infoNeeded = new InfoNeeded(this.page);

    }
    async home(){
        await this.page.goto(this.infoNeeded.infoURL);
    }
}