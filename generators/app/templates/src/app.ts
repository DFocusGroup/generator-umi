import { RequestConfig, request as API } from 'umi'

import { API_HOST } from '@/config'
import { getToken } from '@/helpers'
import { IInvalidInitState, IUser } from '@/types'

// powered by https://umijs.org/plugins/plugin-initial-state
// IInvalidInitState will be used to redirect page in layout
export function getInitialState(): Promise<IInvalidInitState | IUser> {
  if (!getToken()) {
    Promise.resolve('LOGIN_REQUIRED')
  }

  return API('/user', {
    method: 'get'
  }).then(
    res => {
      if (res.success) {
        return res.data
      }
      return 'LOGIN_REQUIRED'
    },
    () => 'LOGIN_REQUIRED'
  )
}

interface APPHeaders {
  Authorization: string
}

// powered by https://umijs.org/plugins/plugin-request
// have token specifid in custom header
export const request: RequestConfig = {
  prefix: API_HOST,
  middlewares: [
    (ctx, next) => {
      const token = getToken()
      if (!token) {
        return next()
      }
      if (!ctx.req.options.headers) {
        ctx.req.options.headers = {}
      }
      ;(ctx.req.options.headers as APPHeaders & HeadersInit).Authorization = token

      return next()
    }
  ]
}
