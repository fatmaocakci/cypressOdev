export class LoginPage {
  navigate() {
    cy.visit('https://www.edu.goit.global/account/login');
    cy.wait(20000);
  }

  typeEmail(email) {
    cy.get('[name="email"]').should('be.visible').type(email);
    
  }

  typePassword(password) {
    cy.get('[name="password"]').should('be.visible').type(password);
    
  }

  clickLogin() {
    cy.get('.eckniwg2').should('be.visible').click(); // login butonu
    cy.wait(20000);
  }

  login(email, password) {
    this.typeEmail(email);
    this.typePassword(password);
    this.clickLogin();
  }
}

//export default new LoginPage();