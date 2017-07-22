import React from 'react'
import { shallow } from 'enzyme'

import DraftTestPlayground from './DraftTestPlayground'

describe('DraftTestPlayground', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<DraftTestPlayground {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})