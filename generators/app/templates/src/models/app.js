<% if (answers.mobileOnly) { %>import queryString from 'query-string'

import { withMixin } from '../helpers/dva'

export default withMixin({
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
import throttle from 'lodash/throttle'

import { withMixin } from '../helpers/dva'
import { redirectTo } from '../helpers/view'
import { clearAll } from '../helpers/storage'

export default withMixin({
  state: {
    locationPathname: '',
    locationQuery: {},
    pageTitle: '',
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
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
        const { innerWidth, innerHeight } = window
        dispatch({
          type: 'updateState',
          payload: {
            screenWidth: innerWidth,
            screenHeight: innerHeight
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

      redirectTo('/login', locationPathname)
    }
  },
  reducers: {}
})
<% } %>