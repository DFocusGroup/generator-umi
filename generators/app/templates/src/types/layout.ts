import React from 'react'
import { IRouteProps, IRouteComponentProps } from 'umi'
import { IAccessState } from './access'

type LAYOUTS = 'BLANK' | 'PRO_LAYOUT'

export interface IERoute extends IRouteProps {
  title?: string
  layout?: LAYOUTS
  access?: keyof IAccessState
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

export type IPageComponentProps = ILayoutProps

export interface IPageComponent {
  (props: IPageComponentProps, context?: any): React.ReactElement<any, any> | null
  title?: string
  layout?: LAYOUTS
  access?: string
  requireSignin?: boolean
}
