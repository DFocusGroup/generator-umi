import { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon'

export interface IBaseMenu<T> {
  key?: string
  path?: string
  title: string
  children?: T[]
}

export interface ISideMenu extends IBaseMenu<ISideMenu> {
  icon: React.ForwardRefExoticComponent<AntdIconProps & React.RefAttributes<HTMLSpanElement>>
}

export interface INavMenu extends IBaseMenu<INavMenu> {}

interface IProLayoutConfig {
  sideMenus: false | ISideMenu[]
  navMenus: false | INavMenu[]
  appLogo: string
  appTitle: string
}

export function defineProLayoutConfig(config: IProLayoutConfig) {
  return config
}
