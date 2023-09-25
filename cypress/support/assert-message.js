function assertMessage(message) {
    const xpathExpression = `//*[text()="${message}"]`;
    cy.xpath(xpathExpression).should("be.visible");
}

module.exports = {
    assertMessage
};
