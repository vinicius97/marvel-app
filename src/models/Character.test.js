import MockAdapter from 'axios-mock-adapter'
import { character } from './Character'
import { http } from '../services/axios.interceptor'

// Constants
import { character as characterEndpoints } from '../constants/Endpoints'

// Mocks
import CharacterMock from '../services/Character/Character.mock'
const mockAxios = new MockAdapter(http)

describe('[Model][Character]', () => {
  const listCharactersEndpoint = characterEndpoints().list
  const responseCharactersList = {
    data: {
      results: CharacterMock.list.data.results,
      total: CharacterMock.list.data.total
    }
  }

  mockAxios.onGet(listCharactersEndpoint).reply(200, responseCharactersList)

  it('reducer: setActualCharacter should store the actual character', () => {
    const actualCharacter = CharacterMock.details.data.results[0]
    const result = character.reducers.setActualCharacter({}, actualCharacter)
    expect(result.actual).toEqual(actualCharacter)
  })

  it('reducer: setTotalCharacters should store the total number of characters', () => {
    const result = character.reducers.setTotalCharacters({}, CharacterMock.list.data.total)
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

    let result = character.reducers.setCustomCharacter({ customCharacters: [] }, characterA)
    result = character.reducers.setCustomCharacter({ customCharacters: result.customCharacters }, characterB)
    result = character.reducers.setCustomCharacter({ customCharacters: result.customCharacters }, characterC)

    expect(result.customCharacters).toEqual([characterA, characterB, characterC])
  })

  it('effect: find should get the list of characters', async () => {
    const setLoadingMock = jest.fn()
    const setSearchKeyMock = jest.fn()
    const setTotalCharactersMock = jest.fn()
    const setListMock = jest.fn()
    const customCharacters = []

    await character.effects().find.call({
      setLoading: setLoadingMock,
      setSearchKey: setSearchKeyMock,
      setTotalCharacters: setTotalCharactersMock,
      setList: setListMock
    }, {}, {
      character: {
        customCharacters,
        searchKey: null
      }
    })

    expect(setLoadingMock).toHaveBeenCalledTimes(2)
    expect(setSearchKeyMock).not.toHaveBeenCalled()
    expect(setTotalCharactersMock).toHaveBeenCalled()
    expect(setListMock).toHaveBeenCalled()
  })

  it('effect: find should get the list of characters with searchKey parameter', async () => {
    const setLoadingMock = jest.fn()
    const setSearchKeyMock = jest.fn()
    const setTotalCharactersMock = jest.fn()
    const setListMock = jest.fn()
    const customCharacters = []

    await character.effects().find.call({
      setLoading: setLoadingMock,
      setSearchKey: setSearchKeyMock,
      setTotalCharacters: setTotalCharactersMock,
      setList: setListMock
    }, { nameStartsWith: 'a' }, {
      character: {
        customCharacters,
        searchKey: null
      }
    })

    expect(setLoadingMock).toHaveBeenCalledTimes(2)
    expect(setSearchKeyMock).toHaveBeenCalled()
    expect(setTotalCharactersMock).toHaveBeenCalled()
    expect(setListMock).toHaveBeenCalled()
  })

  it('effect: find one character by id', async () => {
    const characterA = CharacterMock.list.data.results[0]
    const findByIdCharactersEndpoint = characterEndpoints(characterA.id).details
    const responseCharacterById = {
      data: {
        results: [characterA]
      }
    }

    mockAxios.onGet(findByIdCharactersEndpoint).reply(200, responseCharacterById)

    const setLoadingMock = jest.fn()
    const setActualCharacterMock = jest.fn()
    const customCharacters = []

    await character.effects().findById.call({
      setLoading: setLoadingMock,
      setActualCharacter: setActualCharacterMock
    }, { id: characterA.id }, {
      character: {
        customCharacters
      }
    })

    expect(setLoadingMock).toHaveBeenCalledTimes(2)
    expect(setActualCharacterMock).toHaveBeenCalled()
  })

  it('effect: update character on client side', async () => {
    const characterA = CharacterMock.list.data.results[0]
    const setCustomCharacterMock = jest.fn()
    const customCharacters = []

    await character.effects().update.call({
      setCustomCharacter: setCustomCharacterMock
    }, { id: characterA.id }, {
      character: {
        customCharacters
      }
    })

    expect(setCustomCharacterMock).toHaveBeenCalledTimes(1)
  })
})
