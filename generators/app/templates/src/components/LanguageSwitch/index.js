import { Select } from 'antd'
import { setLocale, getLocale } from 'umi-plugin-react/locale'
import PropTypes from 'prop-types'
import { useSize } from '@umijs/hooks'
import classnames from 'classnames'

import styles from './index.less'

const currentLang = getLocale()

function LanguageSwitch(props) {
  const [state] = useSize(document.body)

  if (!props.useDropdown) {
    return PlainSwitch(props)
  }

  return <DropdownSwitch {...props} screenWidth={state.width} />
}

LanguageSwitch.propTypes = {
  useDropdown: PropTypes.bool
}

function PlainSwitch(props) {
  return (
    <div>
      <span
        className={classnames(styles.switch, { [styles.active]: currentLang === 'zh-CN' })}
        onClick={() => setLocale('zh-CN')}
      >
        简体中文
      </span>{' '}
      |{' '}
      <span
        className={classnames(styles.switch, { [styles.active]: currentLang === 'en-US' })}
        onClick={() => setLocale('en-US')}
      >
        English
      </span>
    </div>
  )
}

function DropdownSwitch(props) {
  const { screenWidth } = props
  if (screenWidth > 800) {
    return (
      <Select defaultValue={currentLang} style={{ width: 120 }} className={styles.select} onChange={setLocale}>
        <Select.Option value="zh-CN">简体中文</Select.Option>
        <Select.Option value="en-US">English</Select.Option>
      </Select>
    )
  }
  return (
    <Select defaultValue={currentLang} style={{ width: 60 }} className={styles.select} onChange={setLocale}>
      <Select.Option value="zh-CN">中</Select.Option>
      <Select.Option value="en-US">En</Select.Option>
    </Select>
  )
}

DropdownSwitch.propTypes = {
  screenWidth: PropTypes.number
}

export default LanguageSwitch
