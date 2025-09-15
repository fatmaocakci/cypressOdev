describe('Login olma Testi',function(){

it('tc01_yönetici ile login olma testi',function(){

    cy.login('user888@gmail.com','1234567890')
    cy.wait(30000);
    cy.get('#open-navigation-menu-mobile').click();
    cy.wait(10000);
    cy.scrollTo('bottom');
    cy.wait(20000);
    cy.contains('Log out').scrollIntoView().should('be.visible').click();
    cy.wait(20000);

});

it('tc02_kullanici ile login olma testi',function(){

    cy.login('testowyqa@qa.team','QA!automation-1')
    cy.wait(30000);
    cy.get('#open-navigation-menu-mobile').click();
    cy.wait(10000);
    cy.get(':nth-child(8) > .next-bve2vl').click();
    cy.wait(20000);
});

});
