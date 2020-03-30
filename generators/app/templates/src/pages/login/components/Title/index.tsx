import React from 'react'
import { useIntl } from 'umi'

import styles from './index.less'

export default function Title() {
  const { formatMessage } = useIntl()
  return (
    <div className={styles.titleHeader}>
      <div className={styles.appLogo}>
        <img src="/app_icon.jpeg" alt="applogo" />
      </div>
      <div className={styles.bar}></div>
      <div className={styles.appTitle}>{formatMessage({ id: 'APP_TITLE' })}</div>
    </div>
  )
}
