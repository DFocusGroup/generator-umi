import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import withRouter from 'umi/withRouter'
import { Layout, BackTop } from 'antd'

import GlobalHeader from '../../components/GlobalHeader'
import { destoryGlobalSpinner } from '../../helpers/view'

import styles from './index.less'

class AuthRequiredLayout extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }),
    dispatch: PropTypes.func,
    children: PropTypes.any
  }

  constructor(props) {
    super(props)
    props.dispatch({
      type: 'users/initCurrentUser'
    })
  }

  render() {
    const { children, currentUser } = this.props

    if (!currentUser) {
      return null
    }

    destoryGlobalSpinner()

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
}

export default withRouter(
  connect(({ app, users }) => {
    return {
      currentUser: users.currentUser
    }
  })(AuthRequiredLayout)
)
