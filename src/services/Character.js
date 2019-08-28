// Axios interceptos
import { http } from './axios.interceptor'

// Constants
import { character as characterConstants } from '../constants/Endpoints'

export const character = {
  list: (parameters = '') => {
    const queryString = '?' + parameters
    return http.get(characterConstants().list + queryString)
  }
}
