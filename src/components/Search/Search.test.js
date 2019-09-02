import React from 'react'
import { shallow } from 'enzyme'
import { Search } from './Search'

// Constants
import { prefix } from '../../constants/Components'

describe('[Component][Search]', () => {
  const onResetSearchMock = jest.fn()
  const onSearchMock = jest.fn()

  const wrap = shallow(<Search onResetSearch={onResetSearchMock} onSearch={onSearchMock} />)

  it('render search', () => {
    expect(wrap.exists(`.${prefix}-search`)).toEqual(true)
    expect(wrap.exists(`.${prefix}-search__input`)).toEqual(true)
    expect(wrap.exists(`.${prefix}-search__button--submit`)).toEqual(true)
    expect(wrap.exists(`.${prefix}-search__button--submit__img`)).toEqual(true)
    expect(wrap.exists(`.${prefix}-search__button--reset`)).toEqual(false)
  })

  it('show reset button', () => {
    const inputSearch = wrap.find(`.${prefix}-search__input`)
    inputSearch.simulate('change', { target: { name: 'search', value: 'Search value' } })
    expect(wrap.exists(`.${prefix}-search__button--reset`)).toEqual(true)
  })

  it('do search term', () => {
    const inputSearch = wrap.find(`.${prefix}-search__input`)
    const submitButton = wrap.find(`.${prefix}-search__button--submit`)

    inputSearch.simulate('change', { target: { name: 'search', value: 'Search value' } })
    submitButton.simulate('click')

    expect(onSearchMock).toHaveBeenCalled()
    expect(wrap.exists(`.${prefix}-search__button--reset`)).toEqual(true)
  })

  it('reset value', () => {
    const inputSearch = wrap.find(`.${prefix}-search__input`)
    const resetButton = wrap.find(`.${prefix}-search__button--reset`)
    inputSearch.simulate('change', { target: { name: 'search', value: 'Search value' } })
    resetButton.simulate('click')

    expect(onResetSearchMock).toHaveBeenCalled()
    expect(wrap.exists(`.${prefix}-search__button--reset`)).toEqual(false)
    expect(inputSearch.text()).toBe('')
  })
})
