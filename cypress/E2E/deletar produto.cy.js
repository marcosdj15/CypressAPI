/// <reference types="cypress"/>


describe('Cadastrar Produto', ()=>{

    it('DELETAR UM PRODUTO', ()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://api.restful-api.dev/objects/ff808181923ed5e201927ef24bc001f2',
        
        })
         .then((response)=> {
           expect(response.status).to.equal(200)
           expect(response.body.message).to.equal('Object with id = ff808181923ed5e201927ef24bc001f2 has been deleted.')
         })
      })

      
    it('DELETAR UM PRODUTO INEXISTENTE', ()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://api.restful-api.dev/objects/00323231463',
             failOnCodeStatus:false
        })
         .then((response)=> {
           expect(response.status).to.equal(404)
           
         })
      })

})
