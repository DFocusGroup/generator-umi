import { routerRedux } from 'dva/router'

export default {
  effects: {
    *redirectTo({ payload }, { put }) {
      if (!payload.from) {
        yield put(routerRedux.push(payload.to))
      } else {
        yield put(
          routerRedux.push({
            pathname: payload.to,
            search: `?from=${encodeURIComponent(payload.from)}`
          })
        )
      }
    }
  },
  reducers: {
    // 更新状态
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
