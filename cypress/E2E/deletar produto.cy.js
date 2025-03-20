/// <reference types="cypress"/>

describe("Deletar Produto", () => {
  it("DELETAR UM PRODUTO", () => {
    cy.readFile("cypress/fixtures/produtoId.json").then((data) => {
      cy.request({
        method: "DELETE",
        url: `https://api.restful-api.dev/objects/${data.id}`,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal(
          `Object with id = ${data.id} has been deleted.`
        );
      });
    });
  });

  it("DELETAR UM PRODUTO INEXISTENTE", () => {
    cy.request({
      method: "DELETE",
      url: "https://api.restful-api.dev/objects/00323231463",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.statusText).to.equal('Not Found')
    });
  });
});
