// Axios interceptos
import { http } from '../axios.interceptor'

// Constants
import { character as characterConstants, defaultRequestParameters } from '../../constants/Endpoints'

export const character = {
  list: (parameters = {}) => {
    const queryParameters = {
      params: {
        ...defaultRequestParameters,
        ...parameters
      }
    }

    return http.get(characterConstants().list, queryParameters)
  },
  get: (id) => {
    const queryParameters = {
      params: {
        id
      }
    }

    return http.get(characterConstants(id).details, queryParameters)
  }
}
