import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import qs from 'qs'

import { useModel, Redirect, useIntl, useLocation } from 'umi'

import LangSwitch from '@/components/buttons/LangSwitch'
import Title from './components/Title'
import AccountPane from './components/AccountPane'

import { isInvalidInitState, isNotEmpty, pick } from '@/helpers'

import styles from './index.less'

function Login() {
  const { initialState } = useModel('@@initialState')
  const { initBackground } = useModel('useLoginModel', m => pick(m, 'initBackground'))
  const { formatMessage } = useIntl()
  const { search } = useLocation()

  useEffect(() => {
    initBackground()
  }, [initBackground])

  if (isNotEmpty<string>(initialState) && !isInvalidInitState(initialState)) {
    const query = qs.parse(search ? search.slice(1) : '')
    if (query.redirectTo) {
      return <Redirect to={{ pathname: query.redirectTo }} />
    }
    return <Redirect to="/" />
  }

  return (
    <>
      <div id="bg-animate" className={styles.bgContainer}></div>
      <div className={styles.loginContainer}>
        <Title />
        <Tabs defaultActiveKey="accountway" className={styles.signinContainer}>
          <Tabs.TabPane
            tab={formatMessage({ id: 'LOGIN_TAB_ACCOUNT' })}
            key="accountway"
            className={styles.signinInnerContainer}
          >
            <AccountPane />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <LangSwitch className={styles.lang} />
    </>
  )
}

Login.title = 'LOGIN_TITLE'
Login.layout = 'BLANK'

export default Login
