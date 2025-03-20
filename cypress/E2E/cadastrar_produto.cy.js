/// <reference types="cypress"/>

describe("Cadastrar Produto", () => {
  it("cadastrar produto", () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: {
        name: "Apple MacBook Pro 20",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      const produtoId = response.body.id;
      cy.writeFile("cypress/fixtures/produtoId.json", { id: produtoId });
    });
  });

  it("cadastrar produto sem o name", () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: {
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      },
      failOnCodeStatus: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
