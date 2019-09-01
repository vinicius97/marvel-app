import React from 'react'
import { shallow } from 'enzyme'

// Components
import Details from './Details'

// Constants
import { prefix } from '../../../constants/Components'
import { CharactersRoutes } from '../../../constants/Routes'

// Data
import CharacterMock from '../../../services/Character/Character.mock'

describe('[Route][Character][Details]', () => {
  const wrap = shallow(<Details character={CharacterMock.details.data.results[0]} />)

  it('render with character data', () => {
    expect(wrap.find(`.${prefix}-character-details`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-details__edit__button--back`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-details__header`)).toBeDefined()
    expect(wrap.find(`.${prefix}--card`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-details__edit`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-details__edit__button--edit`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-details__section`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-details__series`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-details__series > ul`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-details__series > ul > li`)).toBeDefined()

    expect(wrap.find(`.${prefix}-character-details__series > ul > li`)).toHaveLength(20)
  })

  it('navigates to edit form', () => {
    const navigateTo = jest.fn().mockImplementation(value => value)
    const editRoute = CharactersRoutes.edit.replace(':id', CharacterMock.id)

    wrap.setProps({ navigateTo })
    wrap.find(`.${prefix}-character-details__edit__button--edit`).simulate('click')

    expect(navigateTo).toHaveBeenCalled()
    expect(navigateTo.mock.calls[0][0] === editRoute)
  })

  it('navigates to characters list', () => {
    const navigateTo = jest.fn().mockImplementation(value => value)
    const listRoute = CharactersRoutes.list

    wrap.setProps({ navigateTo })
    wrap.find(`.${prefix}-character-details__edit__button--back`).simulate('click')

    expect(navigateTo).toHaveBeenCalled()
    expect(navigateTo.mock.calls[0][0] === listRoute)
  })
})
