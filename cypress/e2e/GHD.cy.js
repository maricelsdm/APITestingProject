describe("GHD technical exam", () =>{

    it("Verify that the Cebu office popup will display in the map",() =>{
        cy.visit("https://www.ghd.com/")
        cy.title().should('include','GHD - A company offering engineering, architecture, environmental & construction services')
        cy.xpath("//a[contains(text(),'Contact')]").click()
        cy.url().should('eq','https://www.ghd.com/en/contact/contact.aspx')
        cy.get("[data-country='Philippines']").click({ multiple: true, force: true }).should('have.attr', 'href')
        cy.xpath("//button[@title='Zoom in']").click()      
        cy.xpath("//div[@title='Cebu City']//img").click()
        cy.wait(500)
        cy.xpath("//button[@title='Close']").click()
    })

    it("Verify that user can submit an inquiry or feedback via the feedback form in Contact page",() =>{
        cy.visit("https://www.ghd.com/")
        cy.xpath("//a[contains(text(),'Contact')]").realHover()
        cy.xpath("//a[contains(text(),'Feedback Form')]").click()
        cy.url().should('contain',"https://feedback.ghd.com/forms/message.aspx?id=ghdwebsitefeedback")
        cy.get("#ctl00_ContentPlaceHolder1_txtName").type("Test User")
        cy.get("#ctl00_ContentPlaceHolder1_txtCountry").type("Philippines")
        cy.get("#ctl00_ContentPlaceHolder1_txtEmail").type("testuser@gmail.com")
        cy.xpath("//input[@id='ctl00_ContentPlaceHolder1_fuAttachment']").selectFile("DummySample.pdf")
        cy.xpath("//input[@id='ctl00_ContentPlaceHolder1_btnSubmit']").click()
        cy.contains("Thank you for your interest in GHD. Please fill out the form below to ask a question.")
        .log("Thank you for your interest in GHD. Please fill out the form below to ask a question.")
        close()
    })
})