describe('Validate', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('test login', () => {
    cy.get('#user-name').clear().type('standard_user')
    cy.get('#password').clear().type('secret_sauce')
    cy.get('#login-button').click()
    cy.contains('span', 'Productss')
  })

  it('test login fail', () => {
    cy.get('#user-name').clear().type('standard_user11')
    cy.get('#password').clear().type('secret_sauce')
    cy.get('#login-button').click()
    cy.contains('Epic sadface: Username and password do not match any user in this service')
  })
})
