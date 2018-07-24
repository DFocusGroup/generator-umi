import { connect } from 'dva'
import { Row } from 'antd'
import PropTypes from 'prop-types'

import styles from './index.less'

function GlobalFooter(props) {
  return (
    <div className={styles.footer}>
      <Row type="flex" justify="center">
        {props.locale.TEXT}
      </Row>
    </div>
  )
}

GlobalFooter.propTypes = {
  locale: PropTypes.shape({
    TEXT: PropTypes.string
  })
}

export default connect(({ app }) => {
  return {
    locale: app.locale.copyrights
  }
})(GlobalFooter)
