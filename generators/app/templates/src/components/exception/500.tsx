import React from 'react'
import { history, useIntl } from 'umi'
import { Button, Result } from 'antd'

import { IExceptionView } from '@/types'

export default function Exception500({ style }: IExceptionView) {
  const { formatMessage } = useIntl()
  return (
    <Result
      status={500}
      title={500}
      subTitle={formatMessage({ id: 'ERROR_500' })}
      style={style}
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.push('/')
          }}
        >
          {formatMessage({
            id: 'BACK_TO_HOME',
          })}
        </Button>
      }
    />
  )
}
