import React, { useCallback, useState, useEffect, useMemo } from 'react'

import { history, useIntl, useLocation, useAppData, useAccess } from '@umijs/max'
import { Menu } from 'antd'
import { useSize } from 'ahooks'
import type { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems'

import { isNotEmptyArray, isNotEmpty, isEmptyArray } from '@/utils'

import { INavMenu } from '@/types'

import menuConfig from '../menuConfig'
import { findSelectedMenu, findRoute } from '../helper'

const { navMenus } = menuConfig

interface INavMenuProps {
  collapsed: boolean
}

const NavMenu: React.FC<INavMenuProps> = ({ collapsed }) => {
  const { formatMessage } = useIntl()
  const { pathname } = useLocation()
  const { routes } = useAppData()
  const access = useAccess()
  const size = useSize(window.document.body)
  const windowWidth = useMemo(() => (size && size.width ? size.width : 0), [size])

  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    findSelectedMenu(location.pathname, navMenus)?.path as string,
  ])

  const renderMenus = useCallback(
    (menus: INavMenu[]): ItemType[] => {
      return menus
        .map<ItemType>((menu) => {
          if (!isNotEmptyArray<INavMenu[]>(menu.children)) {
            const route = findRoute({ routes, pathname: menu.path! })
            // @ts-ignore
            if (isNotEmpty<string>(route?.access) && !access[route?.access]) {
              return null
            }
            return {
              label: formatMessage({ id: menu.title }),
              key: menu.path,
            } as MenuItemType
          }

          const children = renderMenus(menu.children).filter((m) => m)
          if (isEmptyArray(children)) {
            return null
          }
          return {
            label: formatMessage({ id: menu.title }),
            key: menu.key,
            children,
          } as MenuItemType
        })
        .filter((m) => m)
    },
    [formatMessage]
  )

  const menus = useMemo(() => renderMenus(navMenus), [renderMenus])

  useEffect(() => {
    setSelectedKeys([findSelectedMenu(location.pathname, navMenus)?.path as string])
  }, [pathname, setSelectedKeys])

  return (
    <Menu
      theme="light"
      mode="horizontal"
      onSelect={({ key }) => {
        history.push(key)
      }}
      selectedKeys={selectedKeys}
      className="inline-block align-top"
      style={{
        width: collapsed ? windowWidth - 390 : windowWidth - 580,
      }}
      items={menus}
    />
  )
}

export default NavMenu
