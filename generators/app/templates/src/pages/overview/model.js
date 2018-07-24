import extend from 'dva-model-extend'

import commonModel from '../../helpers/commonModel'

import { getTodoList } from './service'

export default extend(commonModel, {
  namespace: 'overview',
  state: {
    todoList: []
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(location => {
        if (location.pathname !== '/overview') {
          return
        }

        dispatch({
          type: 'app/updateState',
          payload: {
            pageTitle: 'overview.PAGE_TITLE'
          }
        })
      })
    }
  },
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
