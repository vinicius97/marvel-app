import React from 'react'
import { shallow } from 'enzyme'

// Components
import { DetailsContainer } from './Details.container'

// Data
import CharacterMock from '../../../services/Character/Character.mock'

describe('[Route][Character][DetailsContainer]', () => {
  const properties = {
    character: CharacterMock.details.data.results,
    loading: false,
    history: {
      push: jest.fn(location => location)
    },
    findById: jest.fn(id => id),
    match: {
      params: {
        id: 10
      }
    }
  }
  const wrap = shallow(<DetailsContainer {...properties} />)
  const container = wrap.instance()

  it('load character details', () => {
    container.loadCharacterDetails(properties.match.params.id)
    expect(properties.findById).toHaveBeenCalled()
    expect(properties.findById).toHaveBeenCalledWith(expect.objectContaining({ id: properties.match.params.id }))
  })

  it('navigates to location', async () => {
    const path = '/somepath'
    container.handleNavigateTo(path)
    expect(properties.history.push).toHaveBeenCalled()
    expect(properties.history.push).toHaveBeenCalledWith(expect.anything(path))
  })

  it('componentDidMount', async () => {
    container.componentDidMount()
    expect(properties.findById).toHaveBeenCalled()
    expect(properties.findById).toHaveBeenCalledWith(expect.objectContaining({ id: properties.match.params.id }))
  })
})
