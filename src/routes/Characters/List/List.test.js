import React from 'react'
import { shallow, mount } from 'enzyme'

// Components
import List from './List'
import { Paginator, Search } from '../../../components'

// Constants
import { prefix } from '../../../constants/Components'
import { CharactersRoutes } from '../../../constants/Routes'

// Data
import CharacterMock from '../../../services/Character/Character.mock'

describe('[Route][Character][List]', () => {
  const listMock = CharacterMock.list
  const onNavigateToMock = jest.fn().mockImplementation(value => value)
  const onNextPageMock = jest.fn().mockImplementation(value => value)
  const onPreviousPageMock = jest.fn().mockImplementation(value => value)
  const onSearchMock = jest.fn().mockImplementation(value => value)

  const properties = {
    characters: listMock.data.results,
    onSearch: onSearchMock,
    onNavigateToMock: onNavigateToMock,
    onResetSearch: onSearchMock,
    onNextPage: onNextPageMock,
    onPreviousPage: onPreviousPageMock,
    total: listMock.data.total
  }

  const wrap = mount(<List {...properties} />)
  const wrapEmpty = shallow(<List />)

  it('render list with empty state', () => {
    expect(wrapEmpty.find(`.${prefix}-characters-list__cards`).text()).toEqual('Não há resultados disponíveis para sua busca')
  })

  it('render list with data', () => {
    expect(wrap.contains(<Search />))
    expect(wrap.find(`.${prefix}-characters-list__cards`)).toBeDefined()
    expect(wrap.contains(<Paginator />))
  })
})
