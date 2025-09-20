class Login {




//bu method ilgili url gider.
 navigateUrl(){
cy.visit("https://www.edu.goit.global/account/login");
}

//navigateUrl(url){
//cy.visit("url");
//}

//bu method title alanın kontrolünü sağlar.
checkTitle(title){
cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text",title);
}



//bu method email alanın kontrolünü sağlar.
checkEmailField(){
cy.get('[name="email"]').should("be.visible").and("exist");
}

  
//bu method password alanın kontrolünü sağlar.
checkPasswordField(){
    cy.get('[name="password"]').should("be.visible").and("exist");
}


//bu method Login butonunun kontrolünü sağlar.
checkLoginButton(){
cy.get('.next-1jphuq5').should("be.visible").and("exist");
}


//bu method forget password alanın kontrolünü sağlar.
forgetPassword(text){
cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text",text);
}



}


export default new Login();