import React, { useMemo } from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useIntl, history, useModel } from 'umi'

import { LangSwitch, ThemeSwitch } from '@/components'

import { IUser } from '@/types'

import styles from './navbar.less'

const BACKOFFICE_LOGOUT_URL = 'https://auth.coupangdev.com/logout?returnUrl='

export default function RightsideMenu() {
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
            window.location.href = BACKOFFICE_LOGOUT_URL + encodeURIComponent(window.location.href)
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
    <div className={styles.rightMenuArea}>
      <Dropdown overlay={menu}>
        <div className={styles.profile}>
          <Avatar src={(initialState as IUser).avatar} />
          <span>{(initialState as IUser).title}</span>
        </div>
      </Dropdown>

      <LangSwitch className={styles.rightNavItem} />
      <ThemeSwitch className={styles.rightNavItem} />
    </div>
  )
}
