describe("API testing", () =>{

it ("tc01_GET 03 isteği",() =>{
    const rq ={
method:"GET",
url:"https://httpbin.org",


failOnStatusCode:false

    }

cy.request(rq).then((response)=>{
//debugger;
assert.equal(200,response.status);
//debugger;
expect(response.status).to.eq(200);
//assert.equal("https://httpbin.org/get",response.body["url"])
//debugger;
assert.equal(response.body.url,"https://httpbin.org/get");
assert.equal("application/json",response.headers["content-type"])
assert.isTrue(response.duration <=20000);

})

});

});
