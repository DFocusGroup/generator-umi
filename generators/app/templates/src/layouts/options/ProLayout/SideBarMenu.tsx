import React, { useMemo } from 'react'

import { useModel, history, useLocation, useAccess, useIntl } from 'umi'
import { Menu } from 'antd'

import { isEmptyArray, isNotEmptyArray, pick, flattenTree } from '@/helpers'

import { IMenu, IERoute, IAccessState } from '@/types'

interface ISideBarMenuProps {
  routes: IERoute[]
}

export default function SideBarMenu({ routes }: ISideBarMenuProps) {
  const location = useLocation()
  const { formatMessage } = useIntl()
  const { getAuthedMenus, getMatchedMenu } = useModel('useProLayoutModel', m =>
    pick(m, 'getAuthedMenus', 'getMatchedMenu')
  )
  const accessState = useAccess()

  const finalMenus = useMemo(() => getAuthedMenus(routes, accessState as IAccessState), [
    routes,
    accessState,
    getAuthedMenus
  ])

  const flattenFinalMenus = useMemo(() => flattenTree(finalMenus, m => m.children), [finalMenus])

  const matchedMenu = getMatchedMenu(flattenFinalMenus, location.pathname)
  const openKeys = useMemo(() => {
    return matchedMenu
      ? flattenFinalMenus
          .filter(m => isNotEmptyArray<IMenu[]>(m.children) && m.children.some(m1 => m1.path === matchedMenu.path))
          .map<string>(m => m.key || m.path!)
      : []
  }, [flattenFinalMenus, matchedMenu])

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={openKeys}
      selectedKeys={matchedMenu ? [matchedMenu.path!] : []}
      onSelect={({ item, key, keyPath, selectedKeys }) => {
        history.push(key)
      }}
    >
      {finalMenus.map(menu => {
        if (isEmptyArray(menu.children)) {
          return (
            <Menu.Item key={menu.path}>
              {<menu.icon />}
              <span>{formatMessage({ id: menu.title })}</span>
            </Menu.Item>
          )
        }
        return (
          <Menu.SubMenu
            key={menu.key}
            title={
              <span>
                <menu.icon />
                <span>{formatMessage({ id: menu.title })}</span>
              </span>
            }
          >
            {isNotEmptyArray<IMenu[]>(menu.children) &&
              menu.children.map(subMenu => {
                return (
                  <Menu.Item key={subMenu.path}>
                    {<subMenu.icon />}
                    <span>{formatMessage({ id: subMenu.title })}</span>
                  </Menu.Item>
                )
              })}
          </Menu.SubMenu>
        )
      })}
    </Menu>
  )
}
