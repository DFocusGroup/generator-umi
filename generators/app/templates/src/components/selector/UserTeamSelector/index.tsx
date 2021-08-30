import React from 'react'
import { useIntl } from 'umi'

import { Select } from 'antd'

import styles from './index.less'

interface IUserTeamSelectorProps {
  value?: string
  onChange?: (team: string) => void
  style?: React.CSSProperties
  classNames?: string
  disabled?: boolean
  prefix: React.ReactElement
  placeholder: string
}

export default function UserTeamSelector({ value, prefix, onChange, disabled, placeholder }: IUserTeamSelectorProps) {
  const { formatMessage } = useIntl()

  return (
    <div className={styles.teamSelector}>
      <div className={styles.prefix}>{prefix}</div>
      <Select
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        showArrow={false}
        filterOption
        onChange={(e) => {
          onChange && onChange(e)
        }}
      >
        <Select.Option value="QA">{formatMessage({ id: 'TEAM_QA' })}</Select.Option>
        <Select.Option value="DEV">{formatMessage({ id: 'TEAM_DEV' })}</Select.Option>
        <Select.Option value="DATA">{formatMessage({ id: 'TEAM_DATA' })}</Select.Option>
      </Select>
    </div>
  )
}
