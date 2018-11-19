import { withMixin } from '../../helpers/dva'

import { getTodoList } from './service'

export default withMixin({
  namespace: 'overview',
  state: {
    todoList: []
  },
  subscriptions: {},
  effects: {
    *queryTodoList({ payload }, { put, call, all, select }) {
      const { success, data } = yield call(getTodoList)
      if (!success) {
        return
      }
      yield put({
        type: 'updateState',
        payload: {
          todoList: data || []
        }
      })
    }
  },
  reducers: {}
})
