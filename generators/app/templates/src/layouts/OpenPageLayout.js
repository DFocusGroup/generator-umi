import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'

import { getTitle } from '../helpers/text'
import { destoryGlobalSpinner } from '../helpers/view'

import logoSrc from '../assets/favicon.png'

function OpenPageLayout(props) {
  const { titleKey, children } = props

  destoryGlobalSpinner()

  return (
    <React.Fragment>
      <Helmet>
        <title>{getTitle(titleKey)}</title>
        <link rel="icon" href={logoSrc} type="image/x-icon" />
      </Helmet>
      {children}
    </React.Fragment>
  )
}

OpenPageLayout.propTypes = {
  titleKey: PropTypes.string,
  children: PropTypes.any
}

export default withRouter(
  connect(({ app }) => {
    return {
      titleKey: app.pageTitle
    }
  })(OpenPageLayout)
)
