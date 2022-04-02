describe('CodeBreaker E2E Test', () => {
   describe('set Secret', () => {
      it('setSecret from CodeBreaker', () => {
         cy.visit('/');
         cy.get('#codeBreaker').should('not.be.visible');
         cy.get('#setValue').click();
         cy.get('#stateValue').should('contain', 'Secret has been set');
         cy.get('#codeBreaker').should('be.visible')
      });

      it('getSecret from CodeBreaker', () => {
      cy.visit('/');
      cy.request('POST','http://localhost:3000/secret').then(
         (response) => {
           // response.body is automatically serialized into JSON
           expect(response.body).to.have.property('result', 'Secret has been set') // true
         })
      });
   })

   describe('match', ()=> {
      it('match from CodeBreaker', () => {
         cy.visit('/');
         cy.get('#setValue').click();
         cy.get('#codeValue').type('0123').should('have.value', '0123');
         cy.get('#resValue').should('not.be.visible');
         cy.get('#tryValue').click();
         cy.request('http://localhost:3000/match?val=0123').as('match')

         cy.get('@match').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('result')
            expect(response.body).to.have.property('attempts')
         })
         cy.get('#resValue').should('be.visible');
      });
   })
   
});