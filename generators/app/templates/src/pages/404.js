import { Component } from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import PropTypes from 'prop-types'

import styles from './404.less'

class NotFoundPage extends Component {
  static propTypes = {
    locale: PropTypes.object,
    locationQuery: PropTypes.object
  }

  getFromPath = () => {
    const { locationQuery } = this.props
    if (!locationQuery || !locationQuery.from) {
      return null
    }
    const prefix = window.location.protocol + '//' + window.location.host
    return <p className={styles.errorlink}>{prefix + locationQuery.from}</p>
  }

  render() {
    const { locale } = this.props
    return (
      <div className={styles.content}>
        <h1>404</h1>
        <p>{locale.LOAD_ERROR}</p>
        <p className={styles.explanation}>{locale.PAGE_NOT_FOUND_ERROR}</p>
        {this.getFromPath()}
        <Link to="/">{locale.BACK_TO_HOME}</Link>
      </div>
    )
  }
}

export default connect(({ loading, app }) => {
  return {
    locale: app.locale.errorInfo,
    locationQuery: app.locationQuery
  }
})(NotFoundPage)
