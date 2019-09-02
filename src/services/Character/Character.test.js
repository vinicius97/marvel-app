import MockAdapter from 'axios-mock-adapter'

import { character as characterService } from './Character'
import { character as characterEndpoint } from '../../constants/Endpoints'
import { http } from '../../services/axios.interceptor'

const mockAxios = new MockAdapter(http)

describe('[Characters]', () => {
  it('fetches list characters with limit and offset', async () => {
    const response = {
      data: {
        results: [],
        total: 0
      }
    }

    mockAxios.onGet(characterEndpoint().list).reply(200, response)

    const fetchCharacters = characterService.list
    await fetchCharacters()
      .then(result => {
        expect(result).toEqual({ results: [], total: 0 })
      })
  })
})
