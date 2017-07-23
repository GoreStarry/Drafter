import React from 'react'
import { shallow } from 'enzyme'

import DraftConsolePanel from './DraftConsolePanel'

describe('DraftConsolePanel', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<DraftConsolePanel {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})