import { Row } from 'antd'
import { FormattedMessage } from 'umi/locale'

import styles from './index.less'

function GlobalFooter(props) {
  return (
    <div className={styles.footer}>
      <Row type="flex" justify="center">
        <FormattedMessage id="copyrights.TEXT" />
      </Row>
    </div>
  )
}

export default GlobalFooter
