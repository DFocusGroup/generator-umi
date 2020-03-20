import React from 'react'

import { useIntl } from 'umi'

import styles from './index.less'

interface ISidebarTitleProps {
  collapsed: boolean
}

export default function SideBarTitle({ collapsed }: ISidebarTitleProps) {
  const { formatMessage } = useIntl()
  return (
    <div className={styles.titleArea}>
      <a href="/" className={styles.title}>
        <img src="/app_logo.svg" alt="logo" />
        {collapsed ? null : <h1>{formatMessage({ id: 'APP_TITLE' })}</h1>}
      </a>
    </div>
  )
}
