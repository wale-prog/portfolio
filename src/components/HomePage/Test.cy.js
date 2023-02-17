import React from 'react'
import Test from './Test'

describe('<Test />', () => {
  it('renders', () => {
    cy.mount(<Test />)
  })
  it('Test should start from 0', () => {
    cy.mount(<Test />)
    cy.get('[data-cy=counter]').should('have.text', 'Here is the count 0')
  })
  it('Test should increment', () => {
    cy.mount(<Test />)
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=counter]').should('have.text', 'Here is the count 1')
  })
  it('Test should decrement', () => {
    cy.mount(<Test />)
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text', 'Here is the count -1')
  })
})