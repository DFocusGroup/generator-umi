import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import { Layout, BackTop } from 'antd'

import GlobalHeader from '../../components/GlobalHeader'
import { getTitle } from '../../helpers/text'
import { destoryGlobalSpinner } from '../../helpers/view'

import logo from '../../assets/favicon.png'
import styles from './index.less'

class AuthRequiredLayout extends Component {
  static propTypes = {
    titleKey: PropTypes.string,
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
    const { titleKey, children, currentUser } = this.props

    if (!currentUser) {
      return null
    }

    // 可能面临重定向回/login
    if (currentUser instanceof Error) {
      return children
    }

    destoryGlobalSpinner()

    return (
      <React.Fragment>
        <Helmet>
          <title>{getTitle(titleKey)}</title>
          <link rel="icon" href={logo} type="image/x-icon" />
        </Helmet>
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
      titleKey: app.pageTitle,
      currentUser: users.currentUser
    }
  })(AuthRequiredLayout)
)
