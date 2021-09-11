describe('Validate', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/webtables')
  })
  it('add registry', function () {
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').clear().type('pruebas')
    cy.get('#lastName').clear().type('apellido')
    cy.get('#userEmail').clear().type('ed@t.com')
    cy.get('#age').clear().type('30')
    cy.get('#salary').clear().type('5')
    cy.get('#department').clear().type('GT')
    cy.get('#submit').click()
  })
})
