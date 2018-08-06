<% if (answers.mobileOnly) { %>import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.less'

function LanguageSwitch(props) {
  const { onLangChange, currentLang } = props
  return (
    <div>
      <span
        className={classnames(styles.switch, { [styles.active]: currentLang === 'zh' })}
        onClick={() => onLangChange('zh')}
      >
        中
      </span>{' '}
      |{' '}
      <span
        className={classnames(styles.switch, { [styles.active]: currentLang === 'en' })}
        onClick={() => onLangChange('en')}
      >
        En
      </span>
    </div>
  )
}

LanguageSwitch.propTypes = {
  currentLang: PropTypes.string,
  onLangChange: PropTypes.func
}

export default LanguageSwitch
<% } else { %>import { Select } from 'antd'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.less'

const ConnectedDropdownSwitch = connect(({ app }) => {
  return {
    screenWidth: app.screenWidth
  }
})(DropdownSwitch)

function LanguageSwitch(props) {
  if (!props.useDropdown) {
    return PlainSwitch(props)
  }

  return <ConnectedDropdownSwitch {...props} />
}

LanguageSwitch.propTypes = {
  currentLang: PropTypes.string,
  onLangChange: PropTypes.func,
  useDropdown: PropTypes.bool
}

function PlainSwitch(props) {
  const { onLangChange, currentLang } = props
  return (
    <div>
      <span
        className={classnames(styles.switch, { [styles.active]: currentLang === 'zh' })}
        onClick={() => onLangChange('zh')}
      >
        简体中文
      </span>{' '}
      |{' '}
      <span
        className={classnames(styles.switch, { [styles.active]: currentLang === 'en' })}
        onClick={() => onLangChange('en')}
      >
        English
      </span>
    </div>
  )
}

PlainSwitch.propTypes = {
  currentLang: PropTypes.string,
  onLangChange: PropTypes.func
}

function DropdownSwitch(props) {
  const { onLangChange, currentLang, screenWidth } = props
  if (screenWidth > 800) {
    return (
      <Select defaultValue={currentLang} style={{ width: 120 }} className={styles.select} onChange={onLangChange}>
        <Select.Option value="zh">简体中文</Select.Option>
        <Select.Option value="en">English</Select.Option>
      </Select>
    )
  }
  return (
    <Select defaultValue={currentLang} style={{ width: 50 }} className={styles.select} onChange={onLangChange}>
      <Select.Option value="zh">中</Select.Option>
      <Select.Option value="en">En</Select.Option>
    </Select>
  )
}

DropdownSwitch.propTypes = {
  currentLang: PropTypes.string,
  onLangChange: PropTypes.func,
  screenWidth: PropTypes.number
}

export default LanguageSwitch
<% } %>