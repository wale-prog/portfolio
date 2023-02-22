import React from 'react'
import Intro from '../../src/components/HomePage/Intro'

describe('<Intro />', () => {
  it('renders', () => {
    cy.mount(<Intro />)
  })
})