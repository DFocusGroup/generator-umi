import { routerRedux } from 'dva/router'
import { message } from 'antd'
import extend from 'dva-model-extend'
import { formatMessage } from 'umi/locale'

import commonModel from '../../helpers/commonModel'
import * as loginService from './service'

import { setToken, getToken } from '../../helpers/storage'

export default extend(commonModel, {
  namespace: 'login',
  state: {
    captchaDataURL: ''
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(location => {
        if (location.pathname !== '/login') {
          return
        }

        if (getToken()) {
          return dispatch({
            type: 'redirectTo',
            payload: {
              to: '/'
            }
          })
        }

        dispatch({
          type: 'app/updateState',
          payload: {
            pageTitle: 'login.PAGE_TITLE'
          }
        })
      })
    }
  },
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
          yield put(routerRedux.push('/'))
        } else if (from.startsWith('/')) {
          yield put(routerRedux.push(from))
        } else {
          window.location.href = from
        }
        return
      }

      if (errorCode === 501) {
        // 账号或密码错误，
        message.error(
          formatMessage({
            id: 'login.ACCOUNT_PWD_ERROR'
          })
        )
      }
    }
  },
  reducers: {}
})
