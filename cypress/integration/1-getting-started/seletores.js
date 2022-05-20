/// <reference types="cypress" />

describe('First Scenario', () => {

  it('Seletores filhos', () => {
      cy.visit('?id_category=3&controller=category')
        .get("#left_column")
          .find("form") // Faz a busca com seletor CSS
           .contains("Orange") // Faz a busca com o Texto entre as TAGS
            .click()

  })
    it('Navegando em Listagens', () => {
          cy.get("#left_column")
            .find('#ul_layered_id_attribute_group_3 li')
            .first() // Seleciona o pprimeiro
            .next() // proximo item da lista
            .prev() // volta ao item anterior
            .end() // vai ao ultimo
    })
  only('Filtros Listagem', () => {
      cy.get("#left_column")
        .find('#ul_layered_id_feature_5 li')
        .filter(':contains("Cotton")')

  })




})



