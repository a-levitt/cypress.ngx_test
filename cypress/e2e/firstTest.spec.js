/// <reference types="cypress" />

describe('First test suit', () => {

  it('first test', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.get('#inputEmail1').type('Hello');

  })

})
