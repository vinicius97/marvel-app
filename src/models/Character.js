// Axios interceptor
import { http } from '../services/axios.interceptor'

// Constants
import { character } from '../constants/Endpoints'

const initialState = {
  list: []
}

export const Character = {
  state: initialState,
  reducers: {
    setList (state, payload) {
      return { ...state, list: payload }
    }
  },
  effects: (dispatch) => ({
    async loadList (payload, rootState) {
      await http.get(character().list)
        .then(response => this.setList(response.data.data.results))
        .catch(e => console.error(e))
    }
  })
}
