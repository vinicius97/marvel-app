// Services
import { character as characterService } from '../services'

const initialState = {
  actual: null,
  list: [],
  customCharacters: []
}

export const character = {
  state: initialState,
  reducers: {
    setActualCharacter (state, payload) {
      return { ...state, actual: payload.data.results[0] }
    },
    setList (state, payload) {
      return { ...state, list: payload.data.results }
    },
    setCustomCharacter (state, payload) {
      return { ...state, customCharacters: [ ...state.customCharacters, payload] }
    }
  },
  effects: (dispatch) => ({
    async loadList ({ nameStartsWith }, rootState) {
      let parameters = {}

      if (nameStartsWith) {
        parameters = {
          ...parameters,
          nameStartsWith
        }
      }

      characterService.list(parameters)
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
    },
    async update (payload, rootSate) {
      const updatedCharacter = payload
      const customCharacters = rootSate.character.customCharacters
      const hasBeenUpdatedBefore = (customCharacters.filter(character => character.id === payload.id).length > 0)

      if (hasBeenUpdatedBefore) {
        customCharacters.filter((character, key) => {
          if (character.id === updatedCharacter.id) {
            customCharacters.splice(key, 1)
          }
        })
      }

      this.setCustomCharacter(updatedCharacter)
    }
  })
}
