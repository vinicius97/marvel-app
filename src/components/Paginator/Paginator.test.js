import React from 'react'
import { shallow } from 'enzyme'
import { Paginator } from './Paginator'

// Constants
import { prefix } from '../../constants/Components'

describe('[Component][Paginator]', () => {
  const onNextPageMock = jest.fn(n => n * n)
  const onPreviousPageMock = jest.fn(n => n * n)
  const wrap = shallow(<Paginator onNextPage={onNextPageMock} onPreviousPage={onPreviousPageMock} />)

  it('render paginator', () => {
    expect(wrap.exists(`.${prefix}-paginator`)).toEqual(true)
  })

  it('render page number and next page button only', async () => {
    await wrap.setProps({
      total: 10,
      limit: 1,
      page: 0
    })

    expect(wrap.exists(`.${prefix}-paginator__nav-button--next`)).toBe(true)
    expect(wrap.exists(`.${prefix}-paginator__actual-page`)).toBe(true)
    expect(wrap.find(`.${prefix}-paginator__actual-page`).text()).toEqual('1')
  })

  it('page navigation', async () => {
    const nextPageButton = wrap.find(`.${prefix}-paginator__nav-button--next`)
    await nextPageButton.simulate('click')
    expect(wrap.find(`.${prefix}-paginator__actual-page`).text()).toEqual('1')
  })
})
