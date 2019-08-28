import axios from 'axios'

// Constants
import { marvel } from '../constants/Keys'

let instance = axios.create()

instance.interceptors.request.use((config) => {
  const apikey = marvel.public

  config.params = {
    ...config.params,
    apikey
  }

  return config
}, error => {
  return Promise.reject(error)
})

export const http = instance
