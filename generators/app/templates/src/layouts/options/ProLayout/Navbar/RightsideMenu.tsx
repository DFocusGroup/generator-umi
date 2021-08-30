import React, { useMemo } from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useIntl, history, useModel } from 'umi'

import { LangSwitch<% if (answers.useDynamicTheme) { %>, ThemeSwitch<% } %> } from '@/components'
import { pick } from '@/helpers'

import { IUser } from '@/types'

import styles from './navbar.less'

export default function RightsideMenu() {
  const { initialState } = useModel('@@initialState')
  const { logout } = useModel('useLoginModel', model => pick(model, 'logout'))
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
            logout()
          }}
        >
          <LogoutOutlined />
          {formatMessage({ id: 'LOGOUT_BTN' })}
        </Menu.Item>
      </Menu>
    ),
    [formatMessage, logout]
  )

  return (
    <div className={styles.rightMenuArea}>
      <Dropdown overlay={menu}>
        <div className={styles.profile}>
          <Avatar src={(initialState as IUser).avatar} />
          &nbsp;<span>{(initialState as IUser).name}</span>
        </div>
      </Dropdown>

      <LangSwitch className={styles.rightNavItem} />
<% if (answers.useDynamicTheme) { %><ThemeSwitch className={styles.rightNavItem} /><% } %>
    </div>
  )
}
