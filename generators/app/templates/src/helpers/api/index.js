import axios from 'axios'

import { API_HOST } from '../../config'
import { getToken } from '../../helpers/storage'

const API = axios.create({
  baseURL: API_HOST
})

API.interceptors.request.use(config => {
  config.headers.Authorization = getToken()
  return config
})

API.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default API
