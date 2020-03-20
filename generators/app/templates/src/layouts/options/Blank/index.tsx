import React from 'react'
import { useModel } from 'umi'

import { isEmpty, pick } from '@/helpers/object'

import Exception403 from '@/components/exception/403'
import Exception404 from '@/components/exception/404'

import { IERoute } from '@/types'

interface IBlankLayoutProps {
  children: JSX.Element
  route: IERoute
  canAccess: boolean
}

export default function Blank({ children, route, canAccess }: IBlankLayoutProps) {
  const { width, height } = useModel('useAppModel', m => pick(m, 'width', 'height'))

  if (isEmpty(route)) {
    return <Exception404 style={{ width, height }} />
  }

  if (!canAccess) {
    return <Exception403 style={{ width, height }} />
  }

  return children
}
