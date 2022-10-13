import React from 'react'
import { Layout } from 'antd'

import { MenuFoldButton } from '@/components'
import { isEmptyArray, isNotEmptyArray } from '@/utils'

import RightsideMenu from './RightsideMenu'
import NavMenu from './NavMenu'

import menuConfig from '../menuConfig'

interface INavigationbarProps {
  collapsed: boolean
  onToggleSidebar: (e: any) => void
}

function Logo({ appLogo }: { appLogo: string }) {
  return (
    <div className="inline-block h-[64px] p-0">
      <a href="/" className="flex items-center h-[64px]">
        <img src={appLogo} alt="logo" className="inline-block h-[32px] align-middle" />
      </a>
    </div>
  )
}

const { appLogo, appTitle, sideMenus, navMenus } = menuConfig

const Navbar: React.FC<INavigationbarProps> = ({ collapsed, onToggleSidebar }) => {
  return (
    <Layout.Header className="!bg-[#fff] px-[24px]">
      {isEmptyArray(sideMenus) && <Logo appLogo={appLogo} />}
      {isEmptyArray(sideMenus) && <h1 className="ml-[5px] inline-block align-top">{appTitle}</h1>}
      {isNotEmptyArray(sideMenus) && <MenuFoldButton collapsed={collapsed} onToggle={onToggleSidebar} />}
      {isNotEmptyArray(navMenus) && <NavMenu collapsed={collapsed} />}
      <RightsideMenu />
    </Layout.Header>
  )
}

export default Navbar
