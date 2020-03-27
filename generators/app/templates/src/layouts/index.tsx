import React, { useEffect } from 'react'
import { useAccess, Redirect, useModel } from 'umi'

import { destoryGlobalSpinner, isNotEmpty, pick } from '@/helpers'
import { IERoute, ILocation } from '@/types'

import { resolveOpenPage, resolveAuthRequiredPage } from './options'

interface IEntryLayoutProps {
  children: JSX.Element
  route: IERoute
  location: ILocation
  history: History
}

export default function Layout({ children, location, route }: IEntryLayoutProps) {
  const accessState = useAccess()
  const { findMatchedRoute, isOpenPage, signRequired, canAccess } = useModel('useAppModel', m =>
    pick(m, 'findMatchedRoute', 'isOpenPage', 'signRequired', 'canAccess')
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

  if (signRequired(accessState)) {
    return <Redirect to={{ pathname: '/o/login', search: `?redirectTo=${location.pathname}` }} />
  }

  return resolveAuthRequiredPage({
    routes: route.routes!,
    children: children,
    route: matchedRoute!,
    canAccess: isNotEmpty<IERoute>(matchedRoute) ? canAccess(matchedRoute, accessState) : true
  })
}
