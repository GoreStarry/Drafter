import React from 'react'
import { shallow } from 'enzyme'

import Decorator from './Decorator'

describe('Decorator', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Decorator {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})