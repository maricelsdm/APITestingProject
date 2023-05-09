it ("Coding Test", () => {

    cy.visit('https://api.tmsandbox.co.nz/v1/Categories/6329/Details.json?catalogue=false')

    cy.get("body pre").should('inclide.text',"Home & garden")

})