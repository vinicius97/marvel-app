import React from 'react'
import { shallow } from 'enzyme'

// Components
import { ListContainer } from './List.container'

describe('[Route][Character][FormContainer]', () => {
  const properties = {
    find: jest.fn(object => object),
    setSearchKey: jest.fn(searchKey => searchKey),
    history: {
      push: jest.fn(location => location)
    },
    list: [],
    total: 0,
    loading: false,
    searchKey: ''
  }

  const wrap = shallow(<ListContainer {...properties} />)
  const container = wrap.instance()

  it('load character list', () => {
    container.loadCharactersList()
    expect(properties.find).toHaveBeenCalled()
    expect(properties.find).toHaveBeenCalledWith(expect.objectContaining({ nameStartsWith: null, offset: null }))
  })

  it('handle reset serach key', async () => {
    container.handleResetSearch()
    expect(properties.setSearchKey).toHaveBeenCalled()
    expect(properties.setSearchKey).toHaveBeenCalledWith(expect.anything(''))
    expect(properties.find).toHaveBeenCalled()
    expect(properties.find).toHaveBeenCalledWith(expect.objectContaining({ nameStartsWith: null, offset: null }))
  })

  it('navigates to location', async () => {
    const path = '/somepath'
    container.handleNavigateTo(path)
    expect(properties.history.push).toHaveBeenCalled()
    expect(properties.history.push).toHaveBeenCalledWith(expect.anything(path))
  })

  it('handle change page', async () => {
    const offset = 10
    const page = 1
    container.handleChangePage(offset, page)

    expect(properties.find).toHaveBeenCalled()
    expect(properties.find).toHaveBeenCalledWith(expect.objectContaining({ nameStartsWith: null, offset }))
    expect(wrap.state('page')).toEqual(page)
  })

  it('componentDidMount', async () => {
    container.componentDidMount()
    expect(properties.find).toHaveBeenCalled()
    expect(properties.find).toHaveBeenCalledWith(expect.objectContaining({ nameStartsWith: null, offset: null }))
  })
})
