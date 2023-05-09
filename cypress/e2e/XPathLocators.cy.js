describe('XPathLocators', () =>{

    it('find number of products', () =>{
        cy.visit("https://www.amazon.com/")
        cy.xpath("//div[@id='gw-card-layout']/div").should('have.length',9)
    })

    it('find number of chained products', () =>{
        cy.visit("https://www.amazon.com/")
        cy.xpath("//div[@id='gw-card-layout']").xpath("div").should('have.length',9)
    })



})