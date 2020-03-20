import { useCallback } from 'react'
import { useLocalStorageState } from '@umijs/hooks'
import pathToRegexp from 'path-to-regexp'

import { isEmptyArray, isEmpty, isNotEmpty } from '@/helpers/object'
import { flattenTree } from '@/helpers/object'

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

interface IMenuMatcher {
  menu: IMenu
  matcher: pathToRegexp.PathRegExp
}

let cachedMenuMathers: IMenuMatcher[]

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

    // init  cachedMenuMathers
    cachedMenuMathers = flattenTree(menus, m => m.children)
      .filter(menu => isNotEmpty(menu.path))
      .map(menu => ({
        menu,
        matcher: pathToRegexp(menu.path!)
      }))

    return finalMenus
  }, [])

  const getMatchedMenu = useCallback((pathname: string) => {
    const matchedMatcher = cachedMenuMathers.find(matcher => matcher.matcher.exec(pathname))
    if (isNotEmpty<IMenuMatcher>(matchedMatcher)) {
      return matchedMatcher.menu
    }
    return undefined
  }, [])

  return {
    sidebarCollapsed,
    toggleSidebar,
    getAuthedMenus,
    getMatchedMenu
  }
}
