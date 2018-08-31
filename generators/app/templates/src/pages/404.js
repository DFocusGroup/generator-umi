import { Component } from 'react'
import { connect } from 'dva'
import { FormattedMessage } from 'umi/locale'
import { Link } from 'dva/router'
import PropTypes from 'prop-types'

import styles from './404.less'

class NotFoundPage extends Component {
  static propTypes = {
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
    return (
      <div className={styles.content}>
        <h1>404</h1>
        <p>
          <FormattedMessage id="errorInfo.LOAD_ERROR" />
        </p>
        <p className={styles.explanation}>
          <FormattedMessage id="errorInfo.PAGE_NOT_FOUND_ERROR" />
        </p>
        {this.getFromPath()}
        <Link to="/">
          <FormattedMessage id="errorInfo.BACK_TO_HOME" />
        </Link>
      </div>
    )
  }
}

export default connect(({ loading, app }) => {
  return {
    locationQuery: app.locationQuery
  }
})(NotFoundPage)
