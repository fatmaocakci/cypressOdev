

describe("Standart Test Yazma",() => {
    
it ("tc01_standart Test",()  => {

//1.url git
//2.Title nin gorunur olup olmadığını kontrol et ve text in Login olup olmadığını kontrol et.
//3.Email alanının gorunur olup olmadığını kontrol et ve var olup olmadığını kontrol et.
//4.Password alanının gorunur olup olmadığını kontrol et ve var olup olmadığını kontrol et.
//5.Login butonunun gorunur olup olmadığını kontrol et ve var olup olmadığını kontrol et.
//6.I can't remember the password alanının gorunur olup olmadığını kontrol et ve text in I can't remember the password olup olmadığını kontrol et.
cy.visit("https://www.edu.goit.global/account/login");
cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login");
cy.get('[name="email"]').should("be.visible").and("exist");
cy.get('[name="password"]').should("be.visible").and("exist");
cy.get('.next-1jphuq5').should("be.visible").and("exist");
cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text","I can't remember the password");

});







});