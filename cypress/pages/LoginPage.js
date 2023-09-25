class LoginPage {
    get usernameField() {
        return cy.get("input[type='email']");
    }

    get passwordField() {
        return cy.get("input[type='password']");
    }

    get loginButton() {
        return cy.get("button[type='submit']")
    }

    get loader(){
        return cy.get(".text-loading")
    }

    visit() {
        return cy.visit('/login');
        // return cy.visit('/login', { 'failOnStatusCode': false });
    }

    loginWith(username, password) {
        this.usernameField.type(username);
        this.passwordField.type(password);
        this.loginButton.click()
    }
}

module.exports = new LoginPage();