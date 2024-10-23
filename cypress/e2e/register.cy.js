describe("Register at cermati", () => {
  it("passes", () => {
    cy.visit("https://www.cermati.com/gabung");
    cy.get("input[name='mobilePhone']").type("0895707370608");
    cy.get("input[name='email']").type("fatihabdi20@gmail.com");
    cy.get("input[name='firstName']").type("Abdi");
    cy.get("input[name='lastName']").type("Fatih");
    cy.get("button[data-button-name='register-new'").click();
  });
});
