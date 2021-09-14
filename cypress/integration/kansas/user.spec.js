describe('Validate User', () => {
  beforeEach(() => {
    cy.visit('http://172.22.104.250/login')
    cy.get('input:first').clear().type('useradminclient1')
    cy.get('input:last').clear().type('Aa123456!')
    cy.get(':nth-child(4) > .md-button > .md-ripple > .md-button-content').click()
  })

  it('Create User', () => {
    cy.get(':nth-child(10) > .sidebar-menu-item').click()
    cy.get(':nth-child(10) > div > .nav > :nth-child(2) > .nav-link > .sidebar-normal').click()
    cy.url().should('include', '/backoffice/cusers')
  })

  it('User List', () => {
    cy.get(':nth-child(10) > .sidebar-menu-item').click()
    cy.get(':nth-child(10) > div > .nav > :nth-child(1) > .nav-link > .sidebar-normal').click()
    cy.url().should('include', '/backoffice/users')
  })

  it('User Serch', () => {
    cy.get(':nth-child(10) > .sidebar-menu-item').click()
    cy.get(':nth-child(10) > div > .nav > :nth-child(1) > .nav-link > .sidebar-normal').click()
    cy.get('[type="search"]').clear().type('useradminclient2{enter}')
    cy.url().should('include', '/backoffice/users')
  })

  it('View User', () => {
    cy.get(':nth-child(10) > .sidebar-menu-item').click()
    cy.get(':nth-child(10) > div > .nav > :nth-child(1) > .nav-link > .sidebar-normal').click()
    cy.get('[type="search"]').clear().type('useradminclient2{enter}')
    cy.get(':nth-child(1) > :nth-child(4) > .md-table-cell-container > .md-success > .md-ripple > .md-button-content > .md-icon').click()
    cy.url().should('include', '/backoffice/vusers')
  })

  it('Edit User', () => {
    cy.get(':nth-child(10) > .sidebar-menu-item').click()
    cy.get(':nth-child(10) > div > .nav > :nth-child(1) > .nav-link > .sidebar-normal').click()
    cy.get('[type="search"]').clear().type('adminechavez{enter}')
    cy.get(':nth-child(1) > :nth-child(4) > .md-table-cell-container > .md-warning > .md-ripple > .md-button-content > .md-icon').click()
    cy.url().should('include', '/backoffice/cusers')
  })

  it('Delete User', () => {
    cy.get(':nth-child(10) > .sidebar-menu-item').click()
    cy.get(':nth-child(10) > div > .nav > :nth-child(1) > .nav-link > .sidebar-normal').click()
    cy.get('[type="search"]').clear().type('frontst{enter}')
    cy.get(':nth-child(1) > :nth-child(4) > .md-table-cell-container > .md-danger > .md-ripple > .md-button-content > .md-icon').click()
    cy.url().should('include', '/backoffice/users')
  })
})
