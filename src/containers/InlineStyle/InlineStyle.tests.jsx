import React from 'react'
import { shallow } from 'enzyme'

import InlineStyle from './InlineStyle'

describe('InlineStyle', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<InlineStyle {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})