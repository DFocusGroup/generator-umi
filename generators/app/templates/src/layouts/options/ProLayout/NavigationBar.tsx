import React, { useMemo } from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useModel, useIntl, history } from 'umi'

import { MenuFoldButton, LangSwitch } from '@/components'
import { redirectToLogin } from '@/helpers'
import { IUser } from '@/types'

import styles from './index.less'

interface INavigationBarProps {
  sidebarCollapsed: boolean
  onToggleSidebar: (e: React.MouseEvent<HTMLElement>) => void
}

export default function NavigationBar({ sidebarCollapsed, onToggleSidebar }: INavigationBarProps) {
  const { initialState } = useModel('@@initialState')
  const { formatMessage } = useIntl()

  const menu = useMemo(
    () => (
      <Menu className={styles.profileMenu}>
        <Menu.Item
          key="profile"
          onClick={() => {
            history.push('/profile')
          }}
        >
          <UserOutlined />
          {formatMessage({ id: 'PROFILE_BTN' })}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key="logout"
          onClick={() => {
            redirectToLogin(true)
          }}
        >
          <LogoutOutlined />
          {formatMessage({ id: 'LOGOUT_BTN' })}
        </Menu.Item>
      </Menu>
    ),
    [formatMessage]
  )
  return (
    <>
      <MenuFoldButton collapsed={sidebarCollapsed} onToggle={onToggleSidebar} />
      <div className={styles.rightMenuArea}>
        <Dropdown overlay={menu}>
          <div className={styles.profile}>
            <Avatar src={(initialState as IUser).avatar} />
            <span>{(initialState as IUser).title}</span>
          </div>
        </Dropdown>

        <LangSwitch className={styles.lang} />
      </div>
    </>
  )
}
