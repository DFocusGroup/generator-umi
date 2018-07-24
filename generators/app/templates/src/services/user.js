import API from '../helpers/api'

export function getCurrentUser() {
  return API.get('/user')
}
