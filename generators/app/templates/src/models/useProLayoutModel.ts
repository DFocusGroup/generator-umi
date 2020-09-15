import * as H from 'history'
import { useCallback } from 'react'
import { useLocalStorageState } from 'ahooks'
import pathToRegexp from 'path-to-regexp'

import { flattenTree, isEmptyArray, isEmpty, isNotEmpty, isNotEmptyArray } from '@/helpers'

import { IBaseMenu, IERoute, IAccessState } from '@/types'

function toFinalMenus(menus: IBaseMenu<any>[], routes: IERoute[], accessState: IAccessState) {
  const targets: IBaseMenu<any>[] = []

  menus.forEach(menu => {
    if (isEmpty(menu.path)) {
      if (isEmptyArray(menu.children)) {
        console.warn(`no children specified for menu = ${menu.title}`)
        return
      }
      if (isEmpty(menu.key)) {
        console.warn(`no key specified for menu = ${menu.title}`)
        return
      }

      const targetMenu: IBaseMenu<any> = { ...menu, children: undefined }
      targetMenu.children = toFinalMenus(menu.children!, routes, accessState)
      if (isEmptyArray(targetMenu.children)) {
        return
      }
      return targets.push(targetMenu)
    }

    const foundRoute = routes.find(route => route.path === menu.path)
    if (isEmpty(foundRoute)) {
      console.warn(`invalid menu path = ${menu.path}`)
      return
    }
    if (isEmpty(foundRoute?.access) || accessState[foundRoute?.access!]) {
      targets.push(menu)
      return
    }
  })

  return targets
}

export default function useProLayoutModel() {
  const [sidebarCollapsed, setSidebarCollapsed] = useLocalStorageState('SIDE_BAR_COLLAPSED', false)

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(bool => !bool)
  }, [setSidebarCollapsed])

  const getMatchedMenu = useCallback((flattenMenus: IBaseMenu<any>[], pathname: string) => {
    return flattenMenus.find(menu => isNotEmpty<string>(menu.path) && pathToRegexp(menu.path).exec(pathname))
  }, [])

  const getMenuInfo = useCallback(
    (routes: IERoute[], sideMenus: IBaseMenu<any>[], accessState: IAccessState, location: H.Location) => {
      const finalMenus = toFinalMenus(
        sideMenus,
        flattenTree(routes, r => r.routes),
        accessState as IAccessState
      )
      const flattenFinalMenus = flattenTree(finalMenus, m => m.children)
      const matchedMenu = getMatchedMenu(flattenFinalMenus, location.pathname)
      const openKeys = matchedMenu
        ? flattenFinalMenus
            .filter(
              m => isNotEmptyArray<IBaseMenu<any>[]>(m.children) && m.children.some(m1 => m1.path === matchedMenu.path)
            )
            .map<string>(m => m.key || m.path!)
        : []

      return {
        menus: finalMenus,
        matchedRoutePaths: matchedMenu ? [matchedMenu.path!] : [],
        matchedFolders: openKeys
      }
    },
    [getMatchedMenu]
  )

  return {
    sidebarCollapsed,
    toggleSidebar,
    getMenuInfo
  }
}
