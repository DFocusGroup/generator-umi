import React from 'react';
import { Form, Button, Input, Checkbox, Tooltip } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useModel, useIntl } from '@umijs/max';
import { pick } from '@/utils';
import { ILoginForm } from '@/types';

export default function AccountPane() {
  const { formatMessage } = useIntl();
  const { isRememberme, toggleRememberme, login, loadingLogin } = useModel(
    'login',
    (m) => pick(m, 'isRememberme', 'toggleRememberme', 'login', 'loadingLogin'),
  );

  return (
    <Form
      name="account_login"
      onFinish={(vals: ILoginForm) => {
        login(vals);
      }}
    >
      <Form.Item
        name="account"
        rules={[
          {
            required: true,
            message: formatMessage({ id: 'login_account_required_msg' }),
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder={formatMessage({ id: 'login_account_placeholder' })}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: formatMessage({ id: 'login_password_required_msg' }),
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          visibilityToggle
          placeholder={formatMessage({ id: 'login_password_placeholder' })}
        />
      </Form.Item>
      <Form.Item className="flex">
        <Checkbox onChange={toggleRememberme} checked={isRememberme}>
          {formatMessage({ id: 'login_remember' })}
        </Checkbox>

        <Tooltip title={formatMessage({ id: 'login_forget_password_tip' })}>
          <span className="float-right cursor-pointer text-primary">
            {formatMessage({ id: 'login_forget_password' })}
          </span>
        </Tooltip>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          loading={loadingLogin}
        >
          {formatMessage({ id: 'login_signin_btn' })}
        </Button>
      </Form.Item>
    </Form>
  );
}
