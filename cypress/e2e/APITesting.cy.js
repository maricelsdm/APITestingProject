describe('API Testing',()=>{

    it('GET',()=>{

        cy.request({

            method : 'GET',
            url : 'https://api.tmsandbox.co.nz/v1/Categories/6329/Details.json?catalogue=false',

        }).then((response)=>{

            expect(response.body).have.property("Name","Home & garden");
            expect(response.body).have.property("CanRelist",true);

            expect({promotions: {name: 'Features'}}).to.have.nested.property('promotions.name');
                }).and((response)=>{
                expect({promotions: {description: 'Better position in category'}}).to.have.nested.property('promotions.description');
             });
      });
});