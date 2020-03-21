import { IRoute } from 'umi'
import { Location } from 'history'

export interface IERoute extends IRoute {
  layout?: string
  access?: string
  routes?: IERoute[]
}

export interface ILayoutProps {
  children: JSX.Element
  route: IERoute
  routes?: IERoute[]
  canAccess: boolean
}

export interface ILayoutResolver {
  is(route?: IERoute): boolean
  get(options: ILayoutProps): JSX.Element
}

export interface ILocation extends Location {
  query: { [key: string]: string }
}
