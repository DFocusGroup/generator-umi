import extend from 'dva-model-extend'

import commonModel from '../helpers/commonModel'

export default extend(commonModel, {
  namespace: 'errorInfo',
  state: {
    detail: null
  },
  subscriptions: {},
  reducers: {}
})
