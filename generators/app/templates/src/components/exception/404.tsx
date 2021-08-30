import React from 'react'
import { history, useIntl } from 'umi'
import { Button, Result } from 'antd'

import { IExceptionView } from '@/types'

export default function Exception404({ style }: IExceptionView) {
  const { formatMessage } = useIntl()
  return (
    <Result
      status={404}
      title={404}
      subTitle={formatMessage({ id: 'ERROR_404' })}
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
