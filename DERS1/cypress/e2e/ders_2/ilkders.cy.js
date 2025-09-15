describe('ilk dersimiz',function(){

it ("TC01 ilk test senaryomuz",function(){

//1. cy cypress test kütüphanesinin temel komutudur.
//2. visit()--> url gider
cy.visit('https://www.edu.goit.global/account/login')

    //3. get() --< locate
    //4.type() -->metin göndermek için kullanılır.
cy.get('#user_email').type("Deneme");
//5.clear() -->metin silmeye yarar
//6.as() -->allias olarak bir elemente isim verebiliriz
//cy.get('#user_email').as('email');
//cy.get('@email').clear();

// locate-selectors
/*
1.id #
2.class .
3.atr=value --[name='email']
*/
cy.get('[name="password"]').type("1234567890");

//7.click() -->sol click yapar
cy.get('.next-1jphuq5').click();

//8.contains() -->locate almak için kullanılır,text içermesine göre locate alabiliriz
//contains('email')

//9.url() -->sayfanın url bize verecektir.
cy.url().should('include','www.edu.goit.global')


//10.title() -->sayfanın başlığını alır
cy.title().should('include','Log in')

//11.wait(2000) -->milisaniye kadar bekler.
cy.wait(3000);

//12.dblclick() -->cift click yapar
cy.get('.next-1jphuq5').dblclick();
cy.wait(3000);

//13.rightclick() -->sag click yapar
cy.get('.next-1jphuq5').rightclick();

//14.should()  and()
//should('have.text','expected')
//be.visible--gorunur olup olmadığını doğrular
//should('not.be.visible');
//should('not.exist');elementin var olmadığını doğrular
//should('have.value','myUsername');
//should('have.class','active');
//should('be.checked');
//should('not.be.checked');
cy.get('.eckniwg2').
should('have.text','Log in').
and('be.visible').
and('exist')
cy.get(':nth-child(1) > .next-kg6b5i > .next-bdn3jy').should('equal','Email');

//15. check()
//cy.get().check().should(be.checked);

//hover() -->bir elementin üstüne fareyi götürür.
//cy.get().hover();




})


it('TC02 login butonunun doğrulanmasi',function(){

cy.visit('https://www.edu.goit.global/account/login')
//cy.get('.eckniwg2').should('have.text','Log in').and('have.css','background-color','rgb(255,107,10)')
cy.contains('button', 'Log in')
  .should('have.css', 'background-color')
  .and('include', '255, 107, 10')

cy.get('[name="email"]').type('user888@gmail.com')
cy.get('[name="password"]').type('1234567890').screenshot();
cy.screenshot();
cy.get('.eckniwg2').click();
cy.wait(5000);

//scrollIntoView() -->bir element gorunur olana kadar sayfayı kaydırır
//cy.get('#go-to-the-course-homepage-widget > .next-1jphuq5',{timeout:50000}).scrollIntoView();


//scroll(0,1000); //sayfayı 1000px aşagı kaydırır.
cy.scrollTo('bottom',{timeout:50000}); //sayfanın en altına kaydırır.
cy.wait(10000);
cy.scrollTo('center',{timeout:50000}); // sayfanın ortasına kaydırır.

//cy.scrennshot();
cy.screenshot();
    
})




})