import React from 'react'

import styles from './index.less'

interface ISidebarTitleProps {
  collapsed: boolean
}

export default function SideBarTitle({ collapsed }: ISidebarTitleProps) {
  return (
    <div className={styles.titleArea}>
      <a href="/" className={styles.title}>
        <img src="/app_logo.svg" alt="logo" />
        {collapsed ? null : <h1>Test UMI</h1>}
      </a>
    </div>
  )
}
