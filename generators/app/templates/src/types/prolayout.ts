import type { AntdIconProps } from '@ant-design/icons/es/components/AntdIcon';

export interface IBaseMenu<T> {
  key?: string;
  path?: string;
  title: string;
  children?: T[];
}

export interface ISideMenu extends IBaseMenu<ISideMenu> {
  icon: React.ForwardRefExoticComponent<
    AntdIconProps & React.RefAttributes<HTMLSpanElement>
  >;
}

export type INavMenu = IBaseMenu<INavMenu>;

interface IAppUIConfig {
  sideMenus: ISideMenu[];
  navMenus: INavMenu[];
  appLogo: string;
  appTitle: string;
}

export function defineAppUIConfig(config: IAppUIConfig) {
  return config;
}
