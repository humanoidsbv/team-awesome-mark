/* eslint-disable no-undef */
describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.visit("http://localhost:3000");
    cy.viewport("iphone-6");
    cy.get("[data-cy=hamburger-icon]").click();
    cy.get("[data-cy=team-members-link]").click();
  });
});
