import React from 'react'
import { history, useIntl } from 'umi'
import { Button } from 'antd'

import Base, { IExceptionView } from './Base'

export default function Exception404({ style }: IExceptionView) {
  const { formatMessage } = useIntl()
  return (
    <Base
      img="/errors/404.png"
      title={404}
      description={formatMessage({ id: 'ERROR_404' })}
      style={style}
      action={
        <Button
          type="primary"
          onClick={() => {
            history.push('/')
          }}
        >
          {formatMessage({
            id: 'BACK_TO_HOME'
          })}
        </Button>
      }
    />
  )
}
