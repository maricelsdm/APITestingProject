describe("Promotexter registration", () =>{

    it("Verify that user can register a new account", () =>{

        cy.visit("https://promotexter.com/signup")
        cy.get('.signup-app-logo > img').should('exist')

        cy.xpath("//h4[@class='text-center']").should('contain','Sign up for free')

        cy.get('#email_address').type("testuser@gmail.com")
        cy.get('#mobile').type("09991234567")
        cy.get('#password').type("P@ssword1234")
        cy.xpath("//span[@id='recaptcha-anchor']/div").click()
        cy.get('#getstarted').click()
        cy.url().should('eq','https://promotexter.com/home')
        cy.title().should('inlcude','Welcome')
    })

})





