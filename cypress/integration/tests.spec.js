describe('Ionic test', () => {

    it('Teste',() => {
        cy.visit('/')
    })

    it('Open product', () => {
        cy.get('.cardapio-item').first().click()
    })
})