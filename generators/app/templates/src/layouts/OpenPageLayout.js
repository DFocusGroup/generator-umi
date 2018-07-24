import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import { LocaleProvider } from 'antd'

import { getTitle } from '../helpers/text'
import { destoryGlobalSpinner } from '../helpers/view'
import { ANT_DESIGN_LANGS } from '../helpers/antd'

import logo from '../assets/favicon.png'

function OpenPageLayout(props) {
  const { locale, titleKey, children, lang } = props

  destoryGlobalSpinner()

  return (
    <>
      <Helmet>
        <title>{getTitle(locale, titleKey)}</title>
        <link rel="icon" href={logo} type="image/x-icon" />
      </Helmet>
      <LocaleProvider locale={ANT_DESIGN_LANGS[lang]}>{children}</LocaleProvider>
    </>
  )
}

OpenPageLayout.propTypes = {
  lang: PropTypes.string,
  locale: PropTypes.object,
  titleKey: PropTypes.string
}

export default withRouter(
  connect(({ app }) => {
    return {
      lang: app.lang,
      locale: app.locale,
      titleKey: app.pageTitle
    }
  })(OpenPageLayout)
)
