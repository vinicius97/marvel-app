import React from 'react'
import { mount } from 'enzyme'
import { Loader } from './Loader'

// Constants
import { prefix } from '../../constants/Components'

describe('[Component][Loader]', () => {
  const wrap = mount(<Loader />)

  it('not render', async () => {
    expect(wrap.exists(`.${prefix}-loader__wrap`)).toEqual(false)
  })

  it('render in wrap mode', async () => {
    wrap.setProps({
      show: true
    })
    expect(wrap.find(`.${prefix}-loader__wrap`)).toBeDefined()
    expect(wrap.find(`.${prefix}-loader__wrap__img`)).toBeDefined()
  })
})
