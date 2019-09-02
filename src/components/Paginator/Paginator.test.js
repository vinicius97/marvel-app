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
      total: 1,
      limit: 0
    })

    expect(wrap.exists(`.${prefix}-paginator__nav-button--next`)).toBe(true)
    expect(wrap.exists(`.${prefix}-paginator__actual-page`)).toBe(true)
    expect(wrap.find(`.${prefix}-paginator__actual-page`).text()).toEqual('1')
  })

  it('render page number and next page button and previous page button', async () => {
    await wrap.setState({
      page: 1
    })

    await wrap.setProps({
      total: 20,
      limit: 5
    })

    expect(wrap.exists(`.${prefix}-paginator__nav-button--previous`)).toBe(true)
    expect(wrap.exists(`.${prefix}-paginator__nav-button--next`)).toBe(true)
    expect(wrap.exists(`.${prefix}-paginator__actual-page`)).toBe(true)
  })

  it('render page number and previous page button only', async () => {
    await wrap.setState({
      page: 1
    })

    await wrap.setProps({
      total: 20,
      limit: 20
    })

    expect(wrap.exists(`.${prefix}-paginator__nav-button--previous`)).toBe(true)
    expect(wrap.exists(`.${prefix}-paginator__nav-button--next`)).toBe(true)
    expect(wrap.exists(`.${prefix}-paginator__actual-page`)).toBe(true)
  })

  it('page number match assertion', async () => {
    await wrap.setState({
      page: 2
    })

    await wrap.setProps({
      total: 20,
      limit: 10
    })

    expect(wrap.find(`.${prefix}-paginator__actual-page`).text()).toEqual('3')
  })
})
