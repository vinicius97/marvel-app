// Axios interceptos
import { http } from '../axios.interceptor'

// Constants
import { character as characterConstants, defaultRequestParameters } from '../../constants/Endpoints'

export const character = {
  list: async (parameters = {}) => {
    const queryParameters = {
      params: {
        ...defaultRequestParameters,
        ...parameters
      }
    }

    return http.get(characterConstants().list, queryParameters)
      .then(({ data }) => {
        const results = data.data.results
        const total = data.data.total

        return { results, total }
      })
      .catch(e => {
        throw e
      })
  },
  findById: (id) => {
    const queryParameters = {
      params: {
        id
      }
    }

    return http.get(characterConstants(id).details, queryParameters)
      .then(({ data }) => {
        return data.data.results[0]
      })
      .catch(e => {
        throw e
      })
  }
}
