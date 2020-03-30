import { useMemo } from 'react'

import { isNotEmpty } from '@/helpers'

import { ILayoutResolver, IERoute } from '@/types'

import { LAYOUT_RESOLVERS } from './layoutResolvers'

interface ILayoutSelectorProps {
  children: JSX.Element
  route: IERoute
  routes: IERoute[]
  canAccess: boolean
}

export default function LayoutSelector({ route, routes, children, canAccess }: ILayoutSelectorProps) {
  console.count('LayoutSelector')
  const resolver = useMemo(() => LAYOUT_RESOLVERS.find(r => r.is(route)), [route])
  const layout = useMemo(() => {
    if (isNotEmpty<ILayoutResolver>(resolver)) {
      return resolver.get({ routes: routes!, children, route, canAccess })
    }
    return null
  }, [route, routes, children, canAccess, resolver])

  if (isNotEmpty<JSX.Element>(layout)) {
    return layout
  }

  throw new Error(`no proper layout found for ${route.path}, please check your code`)
}
