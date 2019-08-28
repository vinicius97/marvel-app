// Axios interceptos
import { http } from './axios.interceptor'

// Constants
import { character as characterConstants } from '../constants/Endpoints'

export const character = {
  list: (parameters = {}) => {
    const defaultParameters = {
      limit: 9,
      offset: 0
    }

    const queryParameters = {
      params: {
        ...defaultParameters,
        ...parameters
      }
    }

    return http.get(characterConstants().list, queryParameters)
  }
}
