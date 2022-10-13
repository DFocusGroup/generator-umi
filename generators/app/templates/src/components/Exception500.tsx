import React from 'react';
import { history, useIntl } from '@umijs/max';
import { Button, Result } from 'antd';

import { IExceptionView } from '@/types';

export default function Exception500({ style, className }: IExceptionView) {
  const { formatMessage } = useIntl();
  return (
    <Result
      status={500}
      title={500}
      subTitle={formatMessage({ id: 'error_500' })}
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
