import React from 'react'

import styles from './sidebar.less'

interface ISidebarTitleProps {
  collapsed: boolean
  appLogo: string
  appTitle: string
}

export default function SideBarTitle({ collapsed, appLogo, appTitle }: ISidebarTitleProps) {
  return (
    <div className={styles.titleArea}>
      <a href="/" className={styles.title}>
        {collapsed ? null : <img src={appLogo} alt="logo" />}
        <h1>{collapsed ? appTitle.slice(0, 1) : appTitle}</h1>
      </a>
    </div>
  )
}
