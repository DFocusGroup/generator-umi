import API from '../../helpers/api'

export function getTodoList(opts) {
  return API.get(`/todos`)
}
