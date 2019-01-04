import { Row } from 'antd'
import { FormattedMessage } from 'umi-plugin-react/locale'

import styles from './index.less'

function GlobalFooter(props) {
  return (
    <div className={styles.footer}>
      <Row type="flex" justify="center">
        <FormattedMessage id="COPYRIGHTS_TEXT" />
      </Row>
    </div>
  )
}

export default GlobalFooter
