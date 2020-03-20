import React, { useCallback, useEffect } from 'react'
import { useAccess, Redirect, useModel } from 'umi'

import { destoryGlobalSpinner } from '@/helpers/view'
import { isNotEmpty, isString, pick } from '@/helpers/object'
import { IERoute, IAccessState, ILayoutProps } from '@/types'

import { resolveOpenPage, resolveAuthRequiredPage } from './options'
import { clearAll } from '@/helpers/storage'

export default function Layout({ children, location, route }: ILayoutProps) {
  const accessState = useAccess()
  const { findMatchedRoute, isOpenPage } = useModel('useAppModel', m => pick(m, 'findMatchedRoute', 'isOpenPage'))

  const signRequired = useCallback(() => {
    // means not signin
    if (isString(accessState)) {
      clearAll()
      return true
    }
    return false
  }, [accessState])

  const canAccess = useCallback(
    (route: IERoute) => {
      return isString(route.access) && (accessState as IAccessState)[route.access]
    },
    [accessState]
  )

  const matchedRoute = findMatchedRoute(location.pathname, route.routes!)

  useEffect(() => {
    destoryGlobalSpinner()
  }, [])

  if (isOpenPage(location.pathname)) {
    return resolveOpenPage({
      routes: route.routes!,
      children: children,
      route: matchedRoute!,
      canAccess: true
    })
  }

  if (signRequired()) {
    return <Redirect to={{ pathname: '/o/login', search: `?redirectTo=${location.pathname}` }} />
  }

  return resolveAuthRequiredPage({
    routes: route.routes!,
    children: children,
    route: matchedRoute!,
    canAccess: isNotEmpty<IERoute>(matchedRoute) ? canAccess(matchedRoute) : true
  })
}
