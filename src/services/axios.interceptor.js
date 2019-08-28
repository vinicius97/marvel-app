import axios from 'axios'

// Constants
import { marvel } from '../constants/Keys'

let instance = axios.create()

instance.interceptors.request.use((config) => {
  config.apiKey = marvel.public
  return config
}, error => {
  return Promise.reject(error)
})

export const http = instance
