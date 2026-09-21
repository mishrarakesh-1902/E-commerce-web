describe("products page", () => {
  it("should navigate to products view and display products list", () => {
    cy.visit("/products");
    cy.location("pathname").should("equal", "/products");
    cy.dataCy("products-view").should("exist");
    cy.dataCy("product-card").should("have.length.at.least", 1);
  });
});

export {};
