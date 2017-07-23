import React from 'react'
import { shallow } from 'enzyme'

import StyledEditor from './StyledEditor'

describe('StyledEditor', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<StyledEditor {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})