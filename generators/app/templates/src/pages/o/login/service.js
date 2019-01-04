import API from '../../../helpers/api'

export function login(data) {
  return API.post('/login', data)
}
