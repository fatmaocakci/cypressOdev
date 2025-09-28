describe("API Test Suite", () => {
  const CAT_BASE = "https://catfact.ninja";
  const JSON_PLACEHOLDER = "https://jsonplaceholder.typicode.com";

  // ------------------------
  // 1. GET: Cat Facts
  // ------------------------
  it("GET /fact → rastgele kedi bilgisi dönmeli", () => {
    cy.request(`${CAT_BASE}/fact`).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.have.property("fact");
      expect(resp.body.fact).to.be.a("string").and.not.be.empty;
      expect(resp.body.length).to.eq(resp.body.fact.length);
      expect(resp.duration).to.be.lessThan(1000); // performans testi
    });
  });

  // ------------------------
  // 2. GET: query param (dinamik limit)
  // ------------------------
  it("GET /facts?limit=N → dinamik limit ile veri gelmeli", () => {
    const randomLimit = Math.floor(Math.random() * 5) + 1; // 1-5 arası
    cy.request(`${CAT_BASE}/facts?limit=${randomLimit}`).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body.data).to.have.length(randomLimit);
    });
  });

  // ------------------------
  // 3. GET: özel header ile
  // ------------------------
  it("GET /fact → özel header ile istek", () => {
    cy.request({
      method: "GET",
      url: `${CAT_BASE}/fact`,
      headers: {
        "User-Agent": "CypressTestClient/1.0",
        Accept: "application/json",
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.headers["content-type"]).to.include("application/json");
    });
  });

  // ------------------------
  // 4. GET: geçersiz endpoint
  // ------------------------
  it("GET /cats → 404 dönmeli", () => {
    cy.request({
      url: `${CAT_BASE}/cats`,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(404);
    });
  });

  // ------------------------
  // 5. POST: yeni post oluşturma
  // ------------------------
  it("POST /posts → yeni post oluşturulmalı", () => {
    cy.request("POST", `${JSON_PLACEHOLDER}/posts`, {
      title: "foo",
      body: "bar",
      userId: 1,
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      expect(resp.body).to.include({
        title: "foo",
        body: "bar",
        userId: 1,
      });
      expect(resp.body).to.have.property("id");
    });
  });

  // ------------------------
  // 6. PUT: post güncelleme
  // ------------------------
  it("PUT /posts/1 → post güncellenmeli", () => {
    cy.request("PUT", `${JSON_PLACEHOLDER}/posts/1`, {
      id: 1,
      title: "updated title",
      body: "updated body",
      userId: 1,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body.title).to.eq("updated title");
      expect(resp.body.body).to.eq("updated body");
    });
  });

  // ------------------------
  // 7. PATCH: kısmi güncelleme
  // ------------------------
  it("PATCH /posts/1 → başlık güncellenmeli", () => {
    cy.request("PATCH", `${JSON_PLACEHOLDER}/posts/1`, {
      title: "patched title",
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body.title).to.eq("patched title");
    });
  });

  // ------------------------
  // 8. DELETE: post silme
  // ------------------------
  it("DELETE /posts/1 → başarılı olmalı", () => {
    cy.request("DELETE", `${JSON_PLACEHOLDER}/posts/1`).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

  // ------------------------
  // 9. Yanıt gövdesi format kontrolü
  // ------------------------
  it("GET /facts → JSON formatında dönmeli", () => {
    cy.request(`${CAT_BASE}/facts`).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.headers["content-type"]).to.include("application/json");
      expect(resp.body).to.have.property("data");
      expect(resp.body.data[0]).to.have.property("fact");
      expect(resp.body.data[0]).to.have.property("length");
    });
  });

  // ------------------------
  // 10. Performans testi
  // ------------------------
  it("GET /breeds → yanıt süresi 1000ms altında olmalı", () => {
    cy.request(`${CAT_BASE}/breeds`).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.duration).to.be.lessThan(1000);
    });
  });
});
