import React from 'react';
import Header from '../../src/components/HomePage/Header';

  <reference types="cypress" />;

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });
  it('Clicks hamburger menu', () => {
    cy.get('.hamburger').click();
  });
  it('Mobile menu shows up', () => {
    cy.get('.hamburger').click();
    cy.get('.menu')
      .should('be.visible')
      .should('have.text', 'HOMEABOUTPROJECTSCONTACT');
  });
  it('Mobile menu hidden when an option is selected', () => {
    cy.get('.hamburger').click();
    cy.get('.hamburger').click();
    cy.get('.menu').should('not.be.visible');
  });
});
