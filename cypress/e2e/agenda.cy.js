/// <reference types="cypress" />

describe('Testes para as funcionalidades da Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar um contato a lista', () => {
    cy.get('form > input').should('have.length', 3)
    cy.get('h2').first().should('have.text', '3 contatos na agenda')
    cy.get('input[type="text"]').type('Lucas Menezes')
    cy.get('input[type="email"]').type('lucasmenezes@gmail.com')
    cy.get('input[type="tel"]').type('41 987654321')
    cy.get('.adicionar').click()
    cy.get('h2').first().should('have.text', '4 contatos na agenda')
  })

  it('Deve editar um contato da lista', () => {
    cy.get('.edit').last().click()
    cy.get('input[type="text"]').clear().type('João Silva')
    cy.get('input[type="email"]').clear().type('joaosilva@gmail.com')
    cy.get('input[type="tel"]').clear().type('1198765432')
    cy.get('.alterar').click()
  })

  it('Deve remover um contato da lista', () => {
    cy.get('.delete').last().click()
    cy.get('h2').first().should('have.text', '3 contatos na agenda')
  })
})