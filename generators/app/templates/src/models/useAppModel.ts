import { useCallback } from 'react'
import { useSize } from '@umijs/hooks'
import { matchPath } from 'umi'

import { flattenTree, isEmpty, isNotEmpty, isBoolean, isInvalidInitState, isString } from '@/helpers'
import { IERoute, IAccessState, IInvalidInitState } from '@/types'

export default function useAppModel() {
  const [{ width, height }] = useSize(document.body)

  const findMatchedRoute = useCallback((pathname: string, routes: IERoute[]) => {
    return flattenTree(routes, r => r.routes)
      .filter(route => !!route.path)
      .find(m => matchPath(pathname, m as any))
  }, [])

  const routeCheck = useCallback((route: IERoute) => {
    if (!isBoolean(route.requireSignin)) {
      throw new Error(`Route: ${route.path}, [requireSignin] must be boolean`)
    }
    if (!isString(route.layout)) {
      throw new Error(`Route: ${route.path}, [layout] must be string`)
    }
    if (!route.requireSignin && isNotEmpty(route.access)) {
      throw new Error(`Route: ${route.path}, [access] should be removed if requireSignin === false`)
    }
    if (route.requireSignin && isNotEmpty(route.access) && !isString(route.access)) {
      throw new Error(`Route: ${route.path}, [access] must be string`)
    }
  }, [])

  const signRequired = useCallback((route: IERoute, accessState): accessState is IInvalidInitState => {
    // means not signin
    return !!(route.requireSignin && isInvalidInitState(accessState))
  }, [])

  const canAccess = useCallback((route: IERoute, accessState?: IAccessState) => {
    return isEmpty(route.access) || (accessState as IAccessState)[route.access!]
  }, [])

  return {
    width,
    height,
    routeCheck,
    findMatchedRoute,
    signRequired,
    canAccess
  }
}
