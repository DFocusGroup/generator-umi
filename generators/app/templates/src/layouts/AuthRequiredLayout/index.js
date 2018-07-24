import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import { LocaleProvider, Layout, BackTop } from 'antd'

import GlobalHeader from '../../components/GlobalHeader'
import { getTitle } from '../../helpers/text'
import { destoryGlobalSpinner } from '../../helpers/view'
import { ANT_DESIGN_LANGS } from '../../helpers/antd'

import logo from '../../assets/favicon.png'
import styles from './index.less'

class AuthRequiredLayout extends Component {
  static propTypes = {
    lang: PropTypes.string,
    locale: PropTypes.object,
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
    const { locale, titleKey, children, lang, currentUser } = this.props

    if (!currentUser) {
      return null
    }

    // 可能面临重定向回/login
    if (currentUser instanceof Error) {
      return children
    }

    destoryGlobalSpinner()

    return (
      <>
        <Helmet>
          <title>{getTitle(locale, titleKey)}</title>
          <link rel="icon" href={logo} type="image/x-icon" />
        </Helmet>
        <BackTop />
        <Layout className={styles.layout}>
          <GlobalHeader />

          <Layout>
            <Layout.Content className={styles.contentContainer}>
              <LocaleProvider locale={ANT_DESIGN_LANGS[lang]}>{children}</LocaleProvider>
            </Layout.Content>
          </Layout>
        </Layout>
      </>
    )
  }
}

export default withRouter(
  connect(({ app, users }) => {
    return {
      lang: app.lang,
      locale: app.locale,
      titleKey: app.pageTitle,
      currentUser: users.currentUser
    }
  })(AuthRequiredLayout)
)
