describe('CSSLocators', () => {

it("csslocators", () => {

    cy.visit("https://www.amazon.com/")

    cy.get("#twotabsearchtextbox").type("T-Shirts")

    cy.get("[value='Go']").click()

    cy.get(".a-color-state.a-text-bold").contains("T-Shirts")

})

})
