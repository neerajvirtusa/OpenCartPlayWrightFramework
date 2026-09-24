
import { test, expect } from '../src/fixtures/pagefixtures';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME, process.env.PASSWORD);
});


test('verify search results count', async ({ homePage, searchResultsPage }) => {
    await homePage.doSearch('macbook');
    let resultCount = await searchResultsPage.getProductSearchResultsCount();
    console.log('Search Results Count: ', resultCount);
    expect(resultCount).toBe(3);
});


test('verify user is able to land on the product page', async ({ homePage, searchResultsPage, page }) => {
    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    expect(await page.title()).toBe('MacBook Pro');
    await page.pause();
});