const loginPage = require('../pages/LoginPage');
const { assertMessage } = require('../support/assert-message');

describe('Feature: Authorization', () => {
  it('Login using valid credentials', () => {

    loginPage.visit();

    loginPage.loginWith('test@gmail.com', 'test');

    assertMessage("The password must be at least 6 characters.");
  })
})