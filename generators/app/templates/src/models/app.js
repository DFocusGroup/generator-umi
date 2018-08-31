<% if (answers.mobileOnly) { %>import queryString from 'query-string'
import moment from 'moment'

import extend from 'dva-model-extend'

import commonModel from '../helpers/commonModel'

export default extend(commonModel, {
  namespace: 'app',
  state: {
    locationPathname: '',
    locationQuery: {},
    pageTitle: ''
  },
  subscriptions: {
    setHistory({ dispatch, history }) {
      return history.listen(location => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search)
          }
        })
      })
    }
  },
  reducers: {}
})
<% } else { %>import queryString from 'query-string'
import moment from 'moment'
import throttle from 'lodash/throttle'

import extend from 'dva-model-extend'

import commonModel from '../helpers/commonModel'
import { clearAll } from '../helpers/storage'

export default extend(commonModel, {
  namespace: 'app',
  state: {
    locationPathname: '',
    locationQuery: {},
    pageTitle: '',
    screenWidth: window.innerWidth
  },
  subscriptions: {
    setHistory({ dispatch, history }) {
      return history.listen(location => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search)
          }
        })
      })
    },
    screenResize({ dispatch, history }) {
      const screenResizeHandler = () => {
        const { innerWidth } = window
        dispatch({
          type: 'updateState',
          payload: {
            screenWidth: innerWidth
          }
        })
      }
      const handler = throttle(screenResizeHandler, 250)
      handler()

      window.addEventListener('resize', handler)
      return () => {
        window.removeEventListener('resize', handler)
      }
    }
  },
  effects: {
    *signout({ payload }, { put, call, select }) {
      clearAll()
      const { locationPathname } = yield select(_ => _.app)

      yield put({
        type: 'users/updateState',
        payload: {
          currentUser: null
        }
      })

      yield put({
        type: 'redirectTo',
        payload: {
          to: '/login',
          from: locationPathname
        }
      })
    }
  },
  reducers: {}
})
<% } %>