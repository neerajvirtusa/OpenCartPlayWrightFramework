import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";

export class RegistrationPage extends BasePage {
    //1. private locators
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly telephone: Locator;
    private readonly password: Locator;
    private readonly passwordConfirm: Locator;
    private readonly subscribe: Locator;
    private readonly privacyPolicy: Locator;
    private readonly continueButton: Locator;


    // 2. constructor of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.firstName = page.getByRole('textbox', { name: '* First Name' })
        this.lastName = page.getByRole('textbox', { name: '* Last Name' });
        this.email = page.getByRole('textbox', { name: '* E-Mail' }); // * Telephone
        this.telephone = page.getByRole('textbox', { name: '* Telephone' });
        this.password = page.getByRole('textbox', { name: '* Password', exact: true });
        this.passwordConfirm = page.getByRole('textbox', { name: '* Password Confirm' });

        this.subscribe = page.getByRole('radio', { name: 'No' });
        this.privacyPolicy = page.getByRole('checkbox', { name: '' }).first();
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    //3. public page actions(methods) / behaviour: Encapsulation
    async goToLoginPage(): Promise<void> {
        await this.page.goto('opencart/index.php?route=account/register');
    }

    async getRegistrationPageTitle(): Promise<string> {
        return await this.page.title();
    }


    async registration(first_Name: string, last_Name: string, emailId: string, telephone: string, password: string, passwordConfirm: string): Promise<void> {
        console.log(`user creds: ${first_Name} - ${last_Name}`);
        await this.firstName.fill(first_Name);
        await this.lastName.fill(last_Name);
        await this.email.fill(emailId);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.passwordConfirm.fill(passwordConfirm);
        await this.subscribe.click();
        await this.privacyPolicy.click();

        await this.continueButton.click();
    }

    // async isInvalidLoginErrorDisplayed(): Promise<boolean> {
    //     return await this.loginErrorMessage.isVisible();
    // }
}
