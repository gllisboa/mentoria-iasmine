/// <reference types="cypress" />

describe('First Scenario', () => {

  it('acess site', () => {
      cy.visit('?id_category=3&controller=category')
  })

})



