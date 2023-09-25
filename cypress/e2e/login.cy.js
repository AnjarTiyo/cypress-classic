
const loginPage = require('../pages/LoginPage');
const { assertMessage } = require('../support/assert-message');
// const env = require('dotenv');
// env.configDotenv({ path: '.env' })

const validUsername = Cypress.env('VALID_USERNAME');
const validPassword = Cypress.env('VALID_PASSWORD');

describe('Feature: Authorization', () => {
  it('Login using valid credentials', () => {

    console.log(validUsername, validPassword)

    loginPage.visit();

    loginPage.loginWith(validUsername, validPassword);

    loginPage.loader.should('not.exist');
    cy.url().should('not.include', '/login');
  })
})