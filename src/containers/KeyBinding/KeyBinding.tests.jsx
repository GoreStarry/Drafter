import React from 'react'
import { shallow } from 'enzyme'

import KeyBinding from './KeyBinding'

describe('KeyBinding', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<KeyBinding {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})