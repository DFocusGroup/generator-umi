import React, { useState, useMemo } from 'react'
import { useIntl, useRequest } from 'umi'

import { Select, Spin } from 'antd'

import { IRawUser } from '@/types'

interface ILdapUserSelectProps {
  onChange: (user: IRawUser) => void
  style?: React.CSSProperties
  classNames?: string
  disabled: boolean
}

export default function LdapUserSelect({ onChange, style, classNames, disabled }: ILdapUserSelectProps) {
  const [value, setValue] = useState<string>()
  const { formatMessage } = useIntl()
  const { loading, run, data = [] } = useRequest<IRawUser[], string[]>(
    name => {
      return {
        url: '/apis/ldapusers',
        method: 'get',
        params: { name }
      }
    },
    { manual: true, debounceInterval: 700 }
  )

  const options = useMemo(() => {
    if (loading) {
      return []
    }
    return (data as IRawUser[]).map(u => {
      return (
        <Select.Option key={u.email} value={u.email}>
          {u.name}
        </Select.Option>
      )
    })
  }, [loading, data])

  return (
    <Select
      disabled={disabled}
      showSearch
      value={value}
      placeholder={formatMessage({ id: 'SEARCH_USER' })}
      style={style}
      className={classNames}
      showArrow={false}
      filterOption={false}
      onSearch={txt => {
        setValue(txt ? txt : undefined)
        if (txt) {
          run(txt)
        }
      }}
      onChange={e => {
        onChange((data as IRawUser[]).find(u => u.email === e)!)
        setValue(undefined)
      }}
      notFoundContent={loading ? <Spin spinning size="small" /> : null}
    >
      {options}
    </Select>
  )
}
