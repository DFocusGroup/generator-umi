import React, { useEffect } from 'react'
import { useAccess, Redirect, useModel } from 'umi'

import { Exception404 } from '@/components'
import { destoryGlobalSpinner, pick, isEmpty, clearAll } from '@/helpers'
import { IEntryLayoutProps } from '@/types'

import LayoutSelector from './options/LayoutSelector'

export default function Layout({ children, location, route }: IEntryLayoutProps) {
  console.count('Layout')
  const accessState = useAccess()
  const { findMatchedRoute, signRequired, canAccess, width, height, routeCheck } = useModel('useAppModel', m =>
    pick(m, 'findMatchedRoute', 'signRequired', 'canAccess', 'width', 'height', 'routeCheck')
  )

  const matchedRoute = findMatchedRoute(location.pathname, route.routes!)

  useEffect(() => {
    destoryGlobalSpinner()
  }, [])

  // 404
  if (isEmpty(matchedRoute)) {
    return <Exception404 style={{ width, height }} />
  }

  // validate attributes specified at route
  routeCheck(matchedRoute!)

  if (signRequired(matchedRoute!, accessState)) {
    clearAll()
    return <Redirect to={{ pathname: '/login', search: `?redirectTo=${location.pathname}` }} />
  }

  return (
    <LayoutSelector route={matchedRoute!} routes={route.routes!} canAccess={canAccess(matchedRoute!, accessState)}>
      {children}
    </LayoutSelector>
  )
}
