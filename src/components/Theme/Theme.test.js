import React from 'react'
import { shallow } from 'enzyme'
import { Theme } from './'

// Constants
import { prefix } from '../../constants/Components'

describe('[Component][Search]', () => {
  const wrap = shallow(<Theme />)

  it('render theme', () => {
    expect(wrap.exists(`.${prefix}`)).toEqual(true)
    expect(wrap.exists(`.${prefix}__logo`)).toEqual(true)
    expect(wrap.exists(`.${prefix}__page`)).toEqual(true)
  })
})
