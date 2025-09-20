import { LoginPage } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";

describe('Login Testleri - Page Object + Fixture', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  it('tc01_yönetici ile login olma testi', () => {
    loginPage.navigate();
    loginPage.login(users.admin.email, users.admin.password);

    homePage.openMenu();
    cy.wait(20000);
    cy.scrollTo('bottom');
    homePage.logout();
  });

  it('tc02_kullanici ile login olma testi', () => {
    loginPage.navigate();
    loginPage.login(users.user.email, users.user.password);

    homePage.openMenu();
    homePage.clickMenuItem(8);
  });
});

