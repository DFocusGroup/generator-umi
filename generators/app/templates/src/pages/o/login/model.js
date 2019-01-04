import router from 'umi/router'
import { message } from 'antd'
import { formatMessage } from 'umi-plugin-react/locale'

import { withMixin } from '../../../helpers/dva'
import * as loginService from './service'

import { setToken } from '../../../helpers/storage'

export default withMixin({
  namespace: 'login',
  state: {},
  subscriptions: {},
  effects: {
    *login({ payload }, { put, call, select }) {
      const { locationQuery } = yield select(_ => _.app)
      const { data, errorCode } = yield call(loginService.login, payload)

      const { from } = locationQuery
      if (errorCode === 200) {
        yield put({
          type: 'users/updateState',
          payload: {
            currentUser: data
          }
        })
        setToken(data.token)
        if (!from || from === '/') {
          return router.push('/')
        } else if (from.startsWith('/')) {
          return router.push(from)
        }
        return (window.location.href = from)
      }

      if (errorCode === 501) {
        // 账号或密码错误，
        message.error(
          formatMessage({
            id: 'LOGIN_ACCOUNT_PWD_ERROR'
          })
        )
      }
    }
  },
  reducers: {}
})
