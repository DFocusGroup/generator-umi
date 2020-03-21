import React from 'react'

import Blank from './Blank'
import ProLayout from './ProLayout'
import { isEmpty, isNotEmpty } from '@/helpers/object'

import { IERoute, ILayoutResolver, ILayoutProps } from '@/types'

const BlankResolver: ILayoutResolver = {
  is(route?: IERoute): boolean {
    return isEmpty(route) || route!.layout === 'BLANK' || route?.path === '/'
  },
  get({ routes, children, route, canAccess }: ILayoutProps) {
    return (
      <Blank route={route} canAccess={canAccess}>
        {children}
      </Blank>
    )
  }
}

const ProLayoutResolver: ILayoutResolver = {
  is(route?: IERoute): boolean {
    return isEmpty(route) || route!.layout === 'PRO_LAYOUT'
  },
  get({ routes, children, route, canAccess }: ILayoutProps) {
    return (
      <ProLayout routes={routes!} route={route} canAccess={canAccess}>
        {children}
      </ProLayout>
    )
  }
}

export const OPEN_LAYOUTS = [BlankResolver]
export const AUTH_REQUIRED_LAYOUTS = [ProLayoutResolver, BlankResolver]

export function resolveOpenPage({ routes, children, route, canAccess }: ILayoutProps) {
  const layout = OPEN_LAYOUTS.find(r => r.is(route))
  if (isNotEmpty<ILayoutResolver>(layout)) {
    return layout.get({ routes: routes!, children, route, canAccess })
  }
  throw new Error(`no proper layout found for ${route!.path}, please check your code`)
}

export function resolveAuthRequiredPage({ routes, children, route, canAccess }: ILayoutProps) {
  const layout = AUTH_REQUIRED_LAYOUTS.find(r => r.is(route))
  if (isNotEmpty<ILayoutResolver>(layout)) {
    return layout.get({ routes: routes!, children, route, canAccess })
  }
  throw new Error(`no proper layout found for ${route!.path}, please check your code`)
}
