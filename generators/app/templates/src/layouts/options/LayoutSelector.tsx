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

  const resolver = LAYOUT_RESOLVERS.find(r => r.is(route))

  if (isNotEmpty<ILayoutResolver>(resolver)) {
    return resolver.get({ routes: routes!, children, route, canAccess })
  }

  throw new Error(`no proper layout found for ${route.path}, please check your code`)
}
