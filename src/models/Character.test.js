import { init } from '@rematch/core'
import { character } from './Character'

// Mocks
import CharacterMock from '../services/Character/Character.mock'

describe('[Model][Character]', () => {
  it('reducer: setActualCharacter should store the actual character', () => {
    const actualCharacter = CharacterMock.details.data.results[0]
    const result = character.reducers.setActualCharacter({}, actualCharacter)
    expect(result.actual).toEqual(actualCharacter)
  })

  it('reducer: setTotalCharacteres should store the total number of characters', () => {
    const result = character.reducers.setTotalCharacteres({}, CharacterMock.list.data.total)
    expect(result.total).toEqual(CharacterMock.list.data.total)
  })

  it('reducer: setList should store the list of characters', () => {
    const listOfCharacters = CharacterMock.list.data.results
    const result = character.reducers.setList({}, listOfCharacters)
    expect(result.list).toEqual(listOfCharacters)
  })

  it('reducer: setLoading should set loading value', () => {
    const result = character.reducers.setLoading({}, true)
    expect(result.loading).toEqual(true)
  })

  it('reducer: setCustomCharacter should persist client side customized characters', () => {
    const characterA = CharacterMock.list.data.results[0]
    const characterB = CharacterMock.list.data.results[1]
    const characterC = CharacterMock.list.data.results[2]

    let result = character.reducers.setCustomCharacter({ customCharacters: []}, characterA)
    result = character.reducers.setCustomCharacter({ customCharacters: result.customCharacters }, characterB)
    result = character.reducers.setCustomCharacter({ customCharacters: result.customCharacters }, characterC)

    expect(result.customCharacters).toEqual([characterA, characterB, characterC])
  })
})
