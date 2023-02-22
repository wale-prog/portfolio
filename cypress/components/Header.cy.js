import React from 'react';
import Header from '../../src/components/HomePage/Header';

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(<Header />);
  })
  it('Clicks hamburger menu', () => {
    cy.get('.hamburger').click()
  });
  it('Mobile menu shows up', () => {
    cy.get('.hamburger').click()
    cy.get('.menu')
    .should('have.class', 'active')
    .should('have.text', 'HOMEABOUTPROJECTSCONTACT')
  })
}); 
