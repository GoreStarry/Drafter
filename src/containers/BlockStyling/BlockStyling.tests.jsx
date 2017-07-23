import React from 'react'
import { shallow } from 'enzyme'

import BlockStyling from './BlockStyling'

describe('BlockStyling', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<BlockStyling {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})