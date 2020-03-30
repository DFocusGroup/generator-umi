import React from 'react'
import { useModel } from 'umi'

import { pick } from '@/helpers'

import { Exception403 } from '@/components'

import { ILayoutProps, ILayoutResolver, IERoute } from '@/types'

function Blank({ children, canAccess }: ILayoutProps) {
  console.count('Layout: BLANK')
  const { width, height } = useModel('useAppModel', m => pick(m, 'width', 'height'))

  if (!canAccess) {
    return <Exception403 style={{ width, height }} />
  }

  return children
}

const BlankResolver: ILayoutResolver = {
  is(route: IERoute): boolean {
    return route!.layout === 'BLANK'
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
