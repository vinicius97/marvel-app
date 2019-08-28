// Services
import { character as characterService } from '../services'

const initialState = {
  list: []
}

export const character = {
  state: initialState,
  reducers: {
    setList (state, payload) {
      return { ...state, list: payload }
    }
  },
  effects: (dispatch) => ({
    async loadList (payload, rootState) {
      characterService.list()
        .then(response => this.setList(response.data.data.results))
        .catch(e => console.error(e))
    }
  })
}
