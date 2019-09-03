import React from 'react'
import { shallow } from 'enzyme'

// Components
import { FormContainer } from './Form.container'

// Constants
import { CharactersRoutes } from '../../../constants/Routes'

// Data
import CharacterMock from '../../../services/Character/Character.mock'

describe('[Route][Character][FormContainer]', () => {
  const properties = {
    findById: jest.fn(id => id),
    update: jest.fn(id => id),
    character: CharacterMock.details.data.results[0],
    history: {
      push: jest.fn(location => location)
    },
    match: {
      params: {
        id: 10
      }
    }
  }

  const wrap = shallow(<FormContainer {...properties} />)
  const container = wrap.instance()

  it('load character details', () => {
    container.loadCharacterDetails(properties.match.params.id)
    expect(properties.findById).toHaveBeenCalled()
    expect(properties.findById).toHaveBeenCalledWith(expect.objectContaining({ id: properties.match.params.id }))
  })

  it('handle save character changes', async () => {
    const data = CharacterMock.details.data.results[0]
    data.name = 'Capitão Caverna'
    const path = CharactersRoutes.details.replace(':id', data.id)

    container.handleOnSave(data)
    expect(properties.history.push).toHaveBeenCalled()
    expect(properties.history.push).toHaveBeenCalledWith(expect.anything(path))
    expect(properties.update).toHaveBeenCalled()
    expect(properties.update).toHaveBeenCalledWith(expect.anything(data))
  })

  it('componentDidMount', async () => {
    container.componentDidMount()
    expect(properties.findById).toHaveBeenCalled()
    expect(properties.findById).toHaveBeenCalledWith(expect.objectContaining({ id: properties.match.params.id }))
  })
})
