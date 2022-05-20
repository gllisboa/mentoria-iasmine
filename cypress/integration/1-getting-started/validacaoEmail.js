/// <reference types="cypress" />

describe('First Scenario', () => {

    it('Email valdido', () => {
        cy.visit('?controller=authentication&back=my-account')
          .cadastraEmail("email@email.com")

  })
    it('Email invalido', () => {
        cy.visit('?controller=authentication&back=my-account')
          .cadastraEmail("emailemail.com",false,true)
          .parent()
          .should("have.class","form-error")


  })




})