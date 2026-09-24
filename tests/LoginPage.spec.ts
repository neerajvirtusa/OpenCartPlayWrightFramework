// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../src/pages/LoginPage';

// let loginPage: LoginPage;

// test.beforeEach(async ({ page }) => {
//     loginPage = new LoginPage(page);
//     await loginPage.goToLoginPage();
// });

// test('login page title test', async ({ page }) => {
//     let pageTitle = await loginPage.getLoginPageTitle()
//     console.log('Login page title', pageTitle);
//     expect(pageTitle).toBe('Account Login');

// });

// test('forgot pwd link exist test', async () => {
//     expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
// });

// test('user is able to login to app', async () => {
//     await loginPage.doLogin('pwapril@pw.com', 'pw123');
// });