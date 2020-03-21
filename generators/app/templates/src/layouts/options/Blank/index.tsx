import React from 'react'
import { useModel } from 'umi'

import { isEmpty, pick } from '@/helpers/object'

import Exception403 from '@/components/exception/403'
import Exception404 from '@/components/exception/404'

import { ILayoutProps, ILayoutResolver, IERoute } from '@/types'

function Blank({ children, route, canAccess }: ILayoutProps) {
  const { width, height } = useModel('useAppModel', m => pick(m, 'width', 'height'))

  if (isEmpty(route)) {
    return <Exception404 style={{ width, height }} />
  }

  if (!canAccess) {
    return <Exception403 style={{ width, height }} />
  }

  return children
}

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

export default BlankResolver
