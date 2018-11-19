import { routerRedux } from 'dva/router'

export function withMixin(model) {
  if (!model) {
    throw new Error('model cannot be empty')
  }

  const mixed = {}

  if (model.namespace) {
    mixed.namespace = model.namespace
  }
  mixed.state = model.state
  mixed.subscriptions = model.subscriptions
  mixed.effects = Object.assign(
    {
      *redirectTo({ payload }, { put }) {
        if (!payload.from) {
          return yield put(routerRedux.push(payload.to))
        }
        return yield put(
          routerRedux.push({
            pathname: payload.to,
            query: {
              from: payload.from
            }
          })
        )
      },
      *goBack(payload, { put }) {
        yield put(routerRedux.goBack())
      }
    },
    model.effects
  )
  mixed.reducers = Object.assign(
    {
      // 更新状态
      updateState(state, { payload }) {
        return {
          ...state,
          ...payload
        }
      }
    },
    model.reducers
  )

  return mixed
}
