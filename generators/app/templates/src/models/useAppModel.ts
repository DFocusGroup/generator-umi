import { useCallback } from 'react'
import { useSize } from '@umijs/hooks'
import { matchPath } from 'umi'

import { flattenTree, isEmpty, isInvalidInitState, clearAll } from '@/helpers'
import { IERoute, IAccessState, IInvalidInitState } from '@/types'

export default function useAppModel() {
  const [{ width, height }] = useSize(document.body)

  const findMatchedRoute = useCallback((pathname: string, routes: IERoute[]) => {
    return flattenTree(routes, r => r.routes)
      .filter(route => !!route.path)
      .find(m => matchPath(pathname, m as any))
  }, [])

  const isOpenPage = useCallback((pathname: string) => pathname.startsWith('/o/') || pathname === '/', [])

  const signRequired = useCallback((accessState): accessState is IInvalidInitState => {
    // means not signin
    if (isInvalidInitState(accessState)) {
      clearAll()
      return true
    }
    return false
  }, [])

  const canAccess = useCallback((route: IERoute, accessState?: IAccessState) => {
    return isEmpty(route.access) || (accessState as IAccessState)[route.access!]
  }, [])

  return {
    width,
    height,
    findMatchedRoute,
    isOpenPage,
    signRequired,
    canAccess
  }
}
