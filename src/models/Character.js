// Services
import { character as characterService } from '../services'

const initialState = {
  actual: {},
  list: []
}

export const character = {
  state: initialState,
  reducers: {
    setActualCharacter (state, payload) {
      return { ...state, actual: payload.data.results[0] }
    },
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
    },
    async loadById ({ id }, rootState) {
      characterService.get(id)
        .then(({ data }) => {
          this.setActualCharacter(data)
        })
        .catch(e => console.error(e))
    }
  })
}
