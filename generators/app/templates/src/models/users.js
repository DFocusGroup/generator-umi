import { message } from 'antd'
import extend from 'dva-model-extend'
import { formatMessage } from 'umi/locale'

import commonModel from '../helpers/commonModel'
import { getCurrentUser } from '../services/user'
import { clearAll, getToken } from '../helpers/storage'

export default extend(commonModel, {
  namespace: 'users',
  state: {
    currentUser: null
  },

  effects: {
    *initCurrentUser({ payload }, { put, call, select }) {
      if (!getToken()) {
        message.warn(
          formatMessage({
            id: 'app.TOKEN_EXPIRED'
          })
        )
        yield put({
          type: 'updateState',
          payload: {
            currentUser: new Error()
          }
        })
        return yield put({
          type: 'redirectTo',
          payload: {
            to: '/login'
          }
        })
      }
      const { currentUser } = yield select(_ => _.users)
      if (currentUser) {
        return currentUser
      }
      yield put({
        type: 'queryCurrentUser'
      })
    },
    *queryCurrentUser({ payload }, { put, call, select }) {
      const { success, data } = yield call(getCurrentUser)
      if (!success || !data) {
        message.warn(
          formatMessage({
            id: 'app.TOKEN_EXPIRED'
          })
        )
        clearAll()
        return yield put({
          type: 'app/redirectTo',
          payload: {
            to: '/login'
          }
        })
      }
      yield put({
        type: 'updateState',
        payload: {
          currentUser: data
        }
      })
    }
  },
  reducers: {}
})
