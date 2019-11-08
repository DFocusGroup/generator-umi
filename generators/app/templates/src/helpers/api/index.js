import { extend } from 'umi-request'

import { API_HOST } from '@/config'
import { getToken } from '@/helpers/storage'

const API = extend({
  prefix: API_HOST
})

API.interceptors.request.use((url, options) => {
  return {
    url,
    options: {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: getToken()
      }
    }
  }
})

export default API
