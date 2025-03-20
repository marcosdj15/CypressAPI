/// <reference types="cypress"/>

describe("Buscar produto", () => {
  it("consultar produto", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("consultar produto Id", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/ff808181923ed5e201927d0559647ef7",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("consultar produto Id Inexistente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/888888888888888888",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.statusText).to.equal('Not Found')
    });
  });
});
