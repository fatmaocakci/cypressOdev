class Login2 {

url="https://www.edu.goit.global/account/login";
title='.next-10stgr7 > .next-c1vj7d';
email='[name="email"]';
password='[name="password"]';
loginButton='.next-1jphuq5';
forgetPassword='.next-1f1fv1i > .next-1qrvie4';


//bu method ilgili url gider.
 navigateUrl(){
cy.visit(this.url);
}

//navigateUrl(url){
//cy.visit("url");
//}

//bu method title alanın kontrolünü sağlar.
checkTitle(title){
cy.get(this.title).should("be.visible").and("have.text",title);
}



//bu method email alanın kontrolünü sağlar.
checkEmailField(){
cy.get(this.email).should("be.visible").and("exist");
}

  
//bu method password alanın kontrolünü sağlar.
checkPasswordField(){
    cy.get(this.password).should("be.visible").and("exist");
}


//bu method Login butonunun kontrolünü sağlar.
checkLoginButton(){
cy.get(this.loginButton).should("be.visible").and("exist");
}


//bu method forget password alanın kontrolünü sağlar.
forgetPassword(text){
cy.get(this.forgetPassword).should("be.visible").and("have.text",text);
}



}


export default new Login2();