/// <reference types="cypress" />

describe('First Scenario', () => {

  before(() => {
    cy.visit('?controller=authentication&back=my-account')
  })

    it('Informo um email para cadastro', () => {
        cy.get('#email_create')
          .type(`teste_iasmine${Math.random(20)}@example.com`)
          .type("{enter}")
  })

    it('Preencho o formulario', () => {
        cy.get("#id_gender1",{timeout:20000})
          .check()

          .get("#days")
           .select(2)

          .get("#newsletter")
            .check()

          .get(`[type="checkbox"]#optin`)
            .uncheck()

          .get("#id_state")
            .select(3)
          .get("#id_state")
            .select("Alabama")
  })


})