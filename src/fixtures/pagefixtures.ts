import { test as baseTest } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { SearchResultPage } from '../pages/SearchResultPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { CsvHelper } from '../utils/CsvHelper';

type pageFixtures = {
    basePage: BasePage,
    loginPage: LoginPage,
    homePage: HomePage
    searchResultsPage: SearchResultPage,
    productInfoPage: ProductInfoPage,
    registrationPage: RegistrationPage,
    testData: Record<string, string>[];
    testData1: Record<string, string>[];
};

//extend the playright test: using baseTest.extend: inheritance
export let test = baseTest.extend<pageFixtures>({

    basePage: async ({ page }, use) => {
        let basePage = new BasePage(page);
        await use(basePage);
    },

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },
    searchResultsPage: async ({ page }, use) => {
        let searchResultsPage = new SearchResultPage(page);
        await use(searchResultsPage);
    },

    productInfoPage: async ({ page }, use) => {
        let productInfoPage = new ProductInfoPage(page);
        await use(productInfoPage);
    },

    registrationPage: async ({ page }, use) => {
        let registraionPage = new RegistrationPage(page);
        await use(registraionPage);
    },

    testData: async ({ }, use) => {
        let testCSVData = CsvHelper.readCsv('src/testdata/logindata.csv');
        await use(testCSVData);
    },

    testData1: async ({ }, use) => {
        let testCSVData1 = CsvHelper.readCsv('src/testdata/registration.csv');
        await use(testCSVData1);
    }
});



export { expect } from '@playwright/test';



