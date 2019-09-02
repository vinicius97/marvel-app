// Services
import { character as characterService } from '../services/Character'

const initialState = {
  actual: null,
  list: [],
  loading: false,
  customCharacters: [],
  searchKey: null,
  total: 0
}

export const character = {
  state: initialState,
  reducers: {
    setActualCharacter (state, payload) {
      return { ...state, actual: payload }
    },
    setTotalCharacters (state, payload) {
      return { ...state, total: payload }
    },
    setList (state, payload) {
      return { ...state, list: payload }
    },
    setLoading (state, payload) {
      return { ...state, loading: payload }
    },
    setSearchKey (state, payload) {
      return { ...state, searchKey: payload }
    },
    setCustomCharacter (state, payload) {
      return { ...state, customCharacters: [...state.customCharacters, payload] }
    }
  },
  effects: (dispatch) => ({
    async find ({ nameStartsWith, offset }, rootState) {
      this.setLoading(true)

      let parameters = {}
      if (nameStartsWith) {
        parameters = {
          ...parameters,
          nameStartsWith
        }
        this.setSearchKey(nameStartsWith)
      } else {
        const searchKey = rootState.character.searchKey
        if (searchKey) {
          parameters = {
            ...parameters,
            nameStartsWith: searchKey
          }
        }
      }

      if (offset) {
        parameters = {
          ...parameters,
          offset
        }
      }

      const list = await characterService.list(parameters)
      this.setTotalCharacters(list.total)

      // Replace if any character has already been edited on client side
      const customCharacters = rootState.character.customCharacters
      const customResults = list.results.reduce((result, character) => {
        const customCharacter = customCharacters.find(custom => (custom.id === character.id))

        if (customCharacter) {
          // Check if custom character match with search term
          if (nameStartsWith) {
            if (customCharacter.name.includes(nameStartsWith)) {
              result.push(customCharacter)
            }
          } else {
            result.push(customCharacter)
          }
        } else {
          result.push(character)
        }

        return result
      }, [])

      // Include all possible responses from client side custom characters
      customCharacters.forEach(character => {
        const hasCharacterInResults = list.results.find(c => c.id === character.id)
        if (!hasCharacterInResults) {
          if (character.name.includes(nameStartsWith)) {
            customResults.push(character)
          }
        }
      })

      this.setList(customResults)
      this.setLoading(false)
    },
    async findById ({ id }, rootState) {
      this.setLoading(true)

      const customCharacters = rootState.character.customCharacters
      const customCharacter = customCharacters.find(character => character.id === id)

      // Check if character has been edited on client side
      if (customCharacter) {
        this.setActualCharacter(customCharacter)
        this.setLoading(false)
      } else {
        const result = await characterService.findById(id)
        this.setActualCharacter(result)
        this.setLoading(false)
      }
    },
    async update (payload, rootState) {
      const updatedCharacter = payload
      const customCharacters = rootState.character.customCharacters
      const hasBeenUpdatedBefore = (customCharacters.filter(character => character.id === payload.id).length > 0)

      if (hasBeenUpdatedBefore) {
        customCharacters.forEach((character, key) => {
          if (character.id === updatedCharacter.id) {
            customCharacters.splice(key, 1)
          }
        })
      }

      this.setCustomCharacter(updatedCharacter)
    }
  })
}
