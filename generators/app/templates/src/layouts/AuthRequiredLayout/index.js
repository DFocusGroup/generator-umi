import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import withRouter from 'umi/withRouter'
import { Layout, BackTop } from 'antd'
import useAuthModel from '@/hooks/useAuthModel'

import GlobalHeader from '@/components/GlobalHeader'
import { destoryGlobalSpinner } from '@/helpers/view'

import styles from './index.less'

function AuthRequiredLayout({ children }) {
  const { currentUser } = useAuthModel()

  // remove spinner while signin
  useEffect(() => {
    if (currentUser) {
      destoryGlobalSpinner()
    }
  }, [currentUser])

  if (!currentUser) {
    return null
  }

  return (
    <React.Fragment>
      <BackTop />
      <Layout className={styles.layout}>
        <GlobalHeader />

        <Layout>
          <Layout.Content className={styles.contentContainer}>{children}</Layout.Content>
        </Layout>
      </Layout>
    </React.Fragment>
  )
}

AuthRequiredLayout.propTypes = {
  children: PropTypes.any
}

export default withRouter(AuthRequiredLayout)
