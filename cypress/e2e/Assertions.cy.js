describe("Assertions demo", () =>{

    it("Implicit assertions", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')

        cy.title().should('include','Orange')
        .and('eq',"OrangeHRM")
        .and('contain',"HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')  
        .and('exist')       

        cy.xpath("//a").should('have.length','5') // number of links

        cy.get("input[placeholder='Username']").type("Admin")  // provide a value
        cy.get("input[placeholder='Username']").should('have.value',"Admin") // expect a value

    })

    it("Explicit assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="Payal Dixit";

        cy.get(".oxd-userdropdown-name").then( (x)=>{

            let actName=x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        })  


    })

})