// Axios interceptos
import { http } from './axios.interceptor'

// Constants
import { character as characterConstants } from '../constants/Endpoints'

export const defaultRequestParameters = {
  limit: 9,
  offset: 0
}

export const character = {
  list: (parameters = {}) => {
    const queryParameters = {
      params: {
        ...defaultRequestParameters,
        ...parameters
      }
    }

    return http.get(characterConstants().list, queryParameters)
  }
}
