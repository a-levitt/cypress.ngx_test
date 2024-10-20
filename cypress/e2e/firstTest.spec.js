/// <reference types="cypress" />

describe('First test suit', () => {

  it('first test', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.get('#inputEmail3')
          .parents('form')
          .find('button')
          .should('contain', 'Sign in')
          .parents('form')
          .find('nb-checkbox')
          .click()

  })

})
