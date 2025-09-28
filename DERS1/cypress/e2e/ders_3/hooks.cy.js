import Login2 from "../../pages/login";

describe("Hooks",() => {

     //1.before:bütün testlerden önce 1 kere çalışır.
    //2.after :bütün testlerden sonra 1 kere çalışır.
    //3.beforeEach:her testten önce 1 kere çalışır.
    //4.afterEach:her testten sonra 1 kere çalışır.

before(() =>{
cy.log(":::::::before metod calisti");

});

after(() =>{
cy.log(":::::::after metod calisti");

}); 


beforeEach(() =>{
cy.log(":::::::beforeEach metod calisti");

}); 


afterEach(() =>{
cy.log(":::::::afterEach metod calisti");

}); 





it ("tc01",()  => {
cy.log(":::::::tc01 metod calisti");


});

it ("tc02",()  => {
cy.log(":::::::tc02 metod calisti");


});






});