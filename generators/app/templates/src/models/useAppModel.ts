import { useCallback } from 'react'
import { useSize } from '@umijs/hooks'
import pathToRegexp from 'path-to-regexp'

import { isEmptyArray, flattenTree } from '@/helpers/object'
import { IERoute } from '@/types'

interface IERouteMatcher {
  route: IERoute
  matcher: pathToRegexp.PathRegExp
}

const cachedRouteMathers: IERouteMatcher[] = []

export default function useAppModel() {
  const [{ width, height }] = useSize(document.body)

  const findMatchedRoute = useCallback((pathname: string, routes: IERoute[]) => {
    if (isEmptyArray(cachedRouteMathers)) {
      cachedRouteMathers.push(
        ...flattenTree(routes, r => r.routes)
          .filter(route => !!route.path)
          .map(route => {
            return {
              route,
              matcher: pathToRegexp(route.path!)
            }
          })
      )
    }
    const routeMatcher = cachedRouteMathers.find(m => m.matcher.exec(pathname))

    return routeMatcher ? routeMatcher.route : undefined
  }, [])

  const isOpenPage = useCallback((pathname: string) => pathname.startsWith('/o/') || pathname === '/', [])

  return {
    width,
    height,
    findMatchedRoute,
    isOpenPage
  }
}
