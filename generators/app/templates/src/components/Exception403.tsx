import React from 'react';
import { history, useIntl } from '@umijs/max';
import { Button, Result } from 'antd';

import { IExceptionView } from '@/types';

export default function Exception403({ style, className }: IExceptionView) {
  const { formatMessage } = useIntl();
  return (
    <Result
      status={403}
      title={403}
      subTitle={formatMessage({ id: 'error_403' })}
      style={style}
      className={className}
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.push('/');
          }}
        >
          {formatMessage({
            id: 'back_to_home',
          })}
        </Button>
      }
    />
  );
}
