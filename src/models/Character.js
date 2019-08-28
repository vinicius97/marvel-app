// Axios interceptor
import { http } from '../services/axios.interceptor'

// Constants
import { character } from '../constants/Endpoints'

const initialState = {
  list: null
}

export const Character = {
  state: initialState,
  reducers: {
    setList (state, payload) {
      return { ...state, list: payload }
    }
  },
  effects: (dispatch) => ({
    async list (payload, rootState) {
      const response = await http.get(character.list)
      this.setList(response.data)
    }
  })
}
