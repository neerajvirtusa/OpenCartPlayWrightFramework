import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage {

    //private locators
    private readonly searchResults: Locator;

    //cons of the class... init the locators...
    constructor(page: Page) {
        super(page);
        this.searchResults = page.locator('div.product-layout');
    }

    //page actions:
    async getProductSearchResultsCount(): Promise<number> {
        return await this.searchResults.count();
    }

    async selectProduct(productName: string): Promise<void> {
        console.log('product name: ', productName);
        await this.page.getByRole('link', { name: productName, exact: true }).first().click();
    }

}