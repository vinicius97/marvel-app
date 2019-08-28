// Services
import { character as characterService } from '../services'

const initialState = {
  list: []
}

export const character = {
  state: initialState,
  reducers: {
    setList (state, payload) {
      return { ...state, list: payload.data.results }
    }
  },
  effects: (dispatch) => ({
    async loadList (payload, rootState) {
      characterService.list()
        .then(({ data }) => {
          this.setList(data)
        })
        .catch(e => console.error(e))
    }
  })
}
