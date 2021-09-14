describe('Validate Login', () => {
  beforeEach(() => {
    cy.visit('http://172.22.104.250/login')
  })

  it('test login', () => {
    cy.get('input:first').clear().type('useradminclient1')
    cy.get('input:last').clear().type('Aa123456!')
    cy.get(':nth-child(4) > .md-button > .md-ripple > .md-button-content').click()
    // cy.contains('h3', 'Home')
    // cy.get('h3').should('contain', 'Home')
    cy.url().should('include', '/home')
  })

  it('test login fail', () => {
    cy.get('input:first').clear().type('useradminclient1')
    cy.get('input:last').clear().type('Aa123456')
    cy.get(':nth-child(4) > .md-button > .md-ripple > .md-button-content').click()
    cy.contains('.alert > span', 'Fallo la Autenticación - Contacte a su administrador si en caso persiste el problema')
  })
})
