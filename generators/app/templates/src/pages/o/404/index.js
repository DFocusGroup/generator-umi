import { Component } from 'react'
import { FormattedMessage } from 'umi-plugin-react/locale'
import Link from 'umi/link'
import PropTypes from 'prop-types'

import styles from './index.less'

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
          <FormattedMessage id="ERROR_LOAD_ERROR" />
        </p>
        <p className={styles.explanation}>
          <FormattedMessage id="ERROR_PAGE_NOT_FOUND_ERROR" />
        </p>
        {this.getFromPath()}
        <Link to="/">
          <FormattedMessage id="ERROR_BACK_TO_HOME" />
        </Link>
      </div>
    )
  }
}

export default NotFoundPage
