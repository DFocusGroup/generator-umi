import React, { useCallback, useEffect } from 'react'
import { useAccess, Redirect, useModel } from 'umi'

import { destoryGlobalSpinner } from '@/helpers/view'
import { isEmpty, isNotEmpty, isString, pick } from '@/helpers/object'
import { IERoute, IAccessState, ILocation } from '@/types'

import { resolveOpenPage, resolveAuthRequiredPage } from './options'
import { clearAll } from '@/helpers/storage'

interface IEntryLayoutProps {
  children: JSX.Element
  route: IERoute
  location: ILocation
  history: History
}

export default function Layout({ children, location, route }: IEntryLayoutProps) {
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
      return isEmpty(route.access) || (accessState as IAccessState)[route.access!]
    },
    [accessState]
  )

  const matchedRoute = findMatchedRoute(location.pathname, route.routes!)

  useEffect(() => {
    destoryGlobalSpinner()
  }, [])

  if (isOpenPage(location.pathname)) {
    return resolveOpenPage({
      routes: route.routes,
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
