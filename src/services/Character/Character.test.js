import mockAxios from 'axios'
import { character as characterService } from './Character'
import { character as characterEndpoint, defaultRequestParameters } from '../../constants/Endpoints'

describe('[Characters]: All scopes', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset()
  })

  it('[CharactersService]: fetches data with limit and offset', async () => {
    const fetchCharacters = characterService.list
    fetchCharacters()
      .then(response => {
        expect(response).toEqual({
          data: {}
        })
      })

    expect(mockAxios.get).toHaveBeenCalledWith(
      characterEndpoint().list, { params: defaultRequestParameters }
    )
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })
})
