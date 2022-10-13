import React, { useState, useEffect, useCallback, useMemo } from 'react';

import {
  history,
  useLocation,
  useIntl,
  useAccess,
  useAppData,
} from '@umijs/max';
import { Menu } from 'antd';
import type { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';

import { isEmptyArray, isNotEmpty, isNotEmptyArray } from '@/utils';

import { ISideMenu } from '@/types';
import menuConfig from '../menuConfig';
import { findSelectedMenu, findRoute } from '../helper';

const { sideMenus } = menuConfig;

export default function SideBarMenu() {
  const { pathname } = useLocation();
  const { routes } = useAppData();
  const access = useAccess();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    findSelectedMenu(location.pathname, sideMenus)?.path as string,
  ]);
  const { formatMessage } = useIntl();

  const renderMenus = useCallback(
    (menus: ISideMenu[]): ItemType[] => {
      return menus
        .map<ItemType>((menu) => {
          if (!isNotEmptyArray<ISideMenu[]>(menu.children)) {
            const route = findRoute({ routes, pathname: menu.path! });
            // @ts-ignore
            if (isNotEmpty<string>(route?.access) && !access[route?.access]) {
              return null;
            }
            return {
              label: formatMessage({ id: menu.title }),
              key: menu.path,
              icon: <menu.icon />,
            } as MenuItemType;
          }

          const children = renderMenus(menu.children).filter((m) => m);
          if (isEmptyArray(children)) {
            return null;
          }

          return {
            label: formatMessage({ id: menu.title }),
            key: menu.key,
            icon: <menu.icon />,
            children,
          } as MenuItemType;
        })
        .filter((m) => m);
    },
    [formatMessage, routes],
  );

  const menus = useMemo(() => renderMenus(sideMenus), [renderMenus]);

  useEffect(() => {
    setSelectedKeys([
      findSelectedMenu(location.pathname, sideMenus)?.path as string,
    ]);
  }, [pathname, setSelectedKeys]);

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={menus.map((menu) => menu?.key as string)}
      selectedKeys={selectedKeys}
      onSelect={({ key }) => {
        history.push(key);
      }}
      items={menus}
    />
  );
}
