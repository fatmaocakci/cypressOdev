export class HomePage {

  openMenu() {
  cy.url().should('include', '/home');
  cy.get('#open-navigation-menu-mobile', { timeout: 30000 })
    .should('be.visible')
    .click({ force: true });
}



  logout() {
    cy.contains('Log out', { timeout: 20000 })
      .scrollIntoView()
      .should('be.visible')
      .click();
  }

  clickMenuItem(index) {
    cy.get(`:nth-child(${index}) > .next-bve2vl`, { timeout: 20000 })
      .should('be.visible')
      .click();
  }
}

//export default new HomePage();