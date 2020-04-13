import { IRouteProps, IRouteComponentProps } from 'umi'

export interface IERoute extends IRouteProps {
  title?: string
  layout?: string
  access?: string
  requireSignin?: boolean
  routes?: IERoute[]
}

export interface IEntryLayoutProps extends IRouteComponentProps {
  route: IERoute
}

export interface ILayoutProps {
  route: IERoute
  routes: IERoute[]
  children: JSX.Element
  canAccess: boolean
}

export interface ILayoutResolver {
  is(route?: IERoute): boolean
  get(options: ILayoutProps): JSX.Element
}

export interface ILocation extends Location {
  query: { [key: string]: string }
}
