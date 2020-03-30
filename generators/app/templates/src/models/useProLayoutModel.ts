import { useCallback } from 'react'
import { useLocalStorageState } from '@umijs/hooks'
import pathToRegexp from 'path-to-regexp'

import { flattenTree, isEmptyArray, isEmpty, isNotEmpty } from '@/helpers'

import { IMenu, IERoute, IAccessState } from '@/types'

import menus from './menus'

function toFinalMenus(menus: IMenu[], routes: IERoute[], accessState: IAccessState) {
  const targets: IMenu[] = []

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

      const targetMenu: IMenu = { ...menu, children: undefined }
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

  const getAuthedMenus = useCallback((routes: IERoute[], accessState: IAccessState) => {
    const finalMenus = toFinalMenus(
      menus,
      flattenTree(routes, r => r.routes),
      accessState as IAccessState
    )

    return finalMenus
  }, [])

  const getMatchedMenu = useCallback((flattenMenus: IMenu[], pathname: string) => {
    return flattenMenus.find(menu => isNotEmpty<string>(menu.path) && pathToRegexp(menu.path).exec(pathname))
  }, [])

  return {
    sidebarCollapsed,
    toggleSidebar,
    getAuthedMenus,
    getMatchedMenu
  }
}
