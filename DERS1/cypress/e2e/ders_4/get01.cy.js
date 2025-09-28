describe("API testing", () =>{

it ("tc01_GET isteği",() =>{

cy.request("https://httpbin.org").then((response)=>{

assert.equal(response.status,200);
expect(response.status).to.eq(200);

})

});

it ("tc02_GET isteği",() =>{
    const rq ={
method:"GET",
url:"https://httpbin.org",

failOnStatusCode:false

    }

cy.request(rq).then((response)=>{

assert.equal(response.status,200);
expect(response.status).to.eq(200);
console.log("response :::::::",response);
cy.log("response body :::::::",JSON.stringify(response.body))
cy.log("response headers:::::::",JSON.stringify(response.headers))
cy.log("response status:::::::",JSON.stringify(response.status))
cy.log("response statusText:::::::",JSON.stringify(response.statusText))
cy.log("response duration:::::::",JSON.stringify(response.duration))
})

});


it ("tc03_GET isteği QS",() =>{
    const rq ={
method:"GET",
url:"https://httpbin.org",
qs:{
    id:"1",
    name:"Mr"

},

failOnStatusCode:false

    }

cy.request(rq).then((response)=>{

assert.equal(response.status,200);
expect(response.status).to.eq(200);
cy.log("response body :::::::",JSON.stringify(response.body))
})

});

//POST isteği body gönderme
it ("tc04_POST isteği body",() =>{
    const rq ={
method:"POST",
url:"https://httpbin.org/post",
body:{
    
    name:"Mr",
    role:"QA",
    age:30

},

failOnStatusCode:false

    }

cy.request(rq).then((response)=>{

assert.equal(response.status,200);
expect(response.status).to.eq(200);
cy.log("response body :::::::",JSON.stringify(response.body))
})

});

//post with body ::::::2
it ("tc05_POST isteği body_2",() =>{

const body ={

    name:"Mr",
    role:"QA",
    age:30

}

    const rq ={
method:"POST",
url:"https://httpbin.org/post",
body:body,

failOnStatusCode:false

    }

cy.request(rq).then((response)=>{

assert.equal(response.status,200);
expect(response.status).to.eq(200);
cy.log("response body :::::::",JSON.stringify(response.body))
})

});


//post with body with headers :::::::2
it ("tc06_POST isteği body_2 with headers",() =>{

const body ={

    name:"Mr",
    role:"QA",
    age:30

}

    const rq ={
method:"POST",
url:"https://httpbin.org/post",
body:body,
headers:{
"content-type" :"application/json",
"connection":"keep-alive",
"user-agent":"PostmanRuntime/7.47.1",

},

failOnStatusCode:false

    }

cy.request(rq).then((response)=>{

assert.equal(response.status,200);
expect(response.status).to.eq(200);
cy.log("response body :::::::",JSON.stringify(response.body))
cy.log("response body :::::::",JSON.stringify(response.headers))
})

});





})