import React from 'react'
import { Form, Button, Input, Checkbox, Tooltip } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { useModel, useIntl } from 'umi'
import { pick } from '@/helpers'

import styles from './index.less'

export default function AccountPane() {
  const { formatMessage } = useIntl()
  const { isRememberme, toggleRememberme, login } = useModel('useLoginModel', m =>
    pick(m, 'isRememberme', 'toggleRememberme', 'login')
  )

  return (
    <Form
      name="account_login"
      initialValues={{ remember: isRememberme }}
      onFinish={vals => {
        login(vals.account, vals.password)
      }}
    >
      <Form.Item
        name="account"
        rules={[{ required: true, message: formatMessage({ id: 'LOGIN_ACCOUNT_REQUIRED_MSG' }) }]}
      >
        <Input prefix={<UserOutlined />} placeholder={formatMessage({ id: 'LOGIN_ACCOUNT_PLACEHOLDER' })} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: formatMessage({ id: 'LOGIN_PASSWORD_REQUIRED_MSG' }) }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder={formatMessage({ id: 'LOGIN_PASSWORD_PLACEHOLDER' })}
        />
      </Form.Item>
      <Form.Item className={styles.rememberContainer}>
        <Checkbox onChange={toggleRememberme}>{formatMessage({ id: 'LOGIN_REMEMBER' })}</Checkbox>

        <Tooltip title={formatMessage({ id: 'LOGIN_FORGET_PASSWORD_TIP' })}>
          <span className={styles.forgetPwd}>{formatMessage({ id: 'LOGIN_FORGET_PASSWORD' })}</span>
        </Tooltip>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.signinBtn}>
          {formatMessage({ id: 'LOGIN_SIGNIN_BTN' })}
        </Button>
      </Form.Item>
    </Form>
  )
}
