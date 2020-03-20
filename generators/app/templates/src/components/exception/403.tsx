import React from 'react'
import { history, useIntl } from 'umi'
import { Button } from 'antd'

import Base, { IExceptionView } from './Base'

export default function Exception403({ style }: IExceptionView) {
  const { formatMessage } = useIntl()
  return (
    <Base
      img="/errors/403.png"
      title={403}
      description="Sorry, you don't have access to this page."
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
