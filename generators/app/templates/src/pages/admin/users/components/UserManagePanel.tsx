import React, { useState, useCallback, useEffect } from 'react'
import { FormattedMessage, useModel, useIntl } from 'umi'
import { Popover, Form, Input, Button, Radio } from 'antd'
import { UserOutlined, TeamOutlined, MailOutlined } from '@ant-design/icons'
import { isEmpty, pick } from '@/helpers'
import { IUser } from '@/types'

interface IUserManagePanelProps {
  children: React.ReactElement
  onFinished: () => Promise<any>
  value?: IUser
}

export default function UserManagePanel({ children, onFinished, value }: IUserManagePanelProps) {
  const [visible, setVisible] = useState(false)
  const { formatMessage } = useIntl()
  const [form] = Form.useForm()
  const { addUser, addUserRunning, updateUser, updateUserRunning } = useModel('useUserManagementModel', m =>
    pick(m, 'addUser', 'addUserRunning', 'updateUser', 'updateUserRunning')
  )

  const title = isEmpty(value) ? <FormattedMessage id="ADD_USER" /> : <FormattedMessage id="MODIFY_USER" />
  const isImportPanel = isEmpty(value)
  const loading = isImportPanel ? addUserRunning : updateUserRunning
  const doAction = isImportPanel ? addUser : updateUser

  const resetForm = useCallback(() => {
    form.setFieldsValue({
      name: undefined,
      email: undefined,
      team: undefined,
      status: undefined
    })
    setVisible(false)
  }, [form, setVisible])

  useEffect(() => {
    if (!isEmpty(value) && visible) {
      form.setFieldsValue(value)
    }
  }, [value, form, visible])

  return (
    <Popover
      placement="bottomLeft"
      content={
        <Form
          form={form}
          name="user_mgr"
          initialValues={value}
          onFinish={values => {
            doAction(values)
              .then(resetForm)
              .then(onFinished)
          }}
        >
          <Form.Item name="id" hidden>
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              { required: true, message: formatMessage({ id: 'USER_NAME_REQUIRED' }) },
              { max: 20, message: formatMessage({ id: 'NAME_MAX_LEN' }) }
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder={formatMessage({ id: 'NAME' })} />
          </Form.Item>
          <Form.Item
            name="team"
            rules={[
              { required: true, message: formatMessage({ id: 'TEAM_REQUIRED' }) },
              { max: 10, message: formatMessage({ id: 'TEAM_MAX_LEN' }) }
            ]}
          >
            <Input prefix={<TeamOutlined />} placeholder={formatMessage({ id: 'TEAM' })} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: formatMessage({ id: 'EMAIL_REQUIRED' }) },
              { max: 30, message: formatMessage({ id: 'EMAIL_MAX_LEN' }) }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder={formatMessage({ id: 'EMAIL' })} />
          </Form.Item>
          <Form.Item name="status" rules={[{ required: true, message: formatMessage({ id: 'STATUS_REQUIRED' }) }]}>
            <Radio.Group>
              <Radio value="INITIAL">
                <FormattedMessage id="INITIAL" />
              </Radio>
              <Radio value="ACTIVE">
                <FormattedMessage id="ACTIVE" />
              </Radio>
              <Radio value="DISABLED">
                <FormattedMessage id="DISABLED" />
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
                <FormattedMessage id="CONFIRM_BTN" />
              </Button>
              &nbsp;
              <Button onClick={resetForm}>
                <FormattedMessage id="CANCEL_BTN" />
              </Button>
            </div>
          </Form.Item>
        </Form>
      }
      title={title}
      visible={visible}
      trigger="click"
      onVisibleChange={setVisible}
    >
      {children}
    </Popover>
  )
}
