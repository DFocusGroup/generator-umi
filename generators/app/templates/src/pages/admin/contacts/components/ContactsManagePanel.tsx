import React, { useState, useCallback, useEffect } from 'react'
import { FormattedMessage, useModel, useIntl } from 'umi'
import { Popover, Form, Input, Button, Radio } from 'antd'
import { UserOutlined, TeamOutlined, MailOutlined } from '@ant-design/icons'
import { isEmpty, isNotEmpty, pick } from '@/helpers'
import { UserTeamSelector } from '@/components'
import { IContacts } from '@/types'

interface IUserManagePanelProps {
  children: React.ReactElement
  onFinished: () => Promise<any>
  value?: IContacts
}

export default function ContactsManagePanel({ children, onFinished, value }: IUserManagePanelProps) {
  const [visible, setVisible] = useState(false)
  const { formatMessage } = useIntl()
  const [form] = Form.useForm<IContacts>()
  const { addContacts, addContactsRunning, updateContacts, updateContactsRunning } = useModel(
    'useContactsManagementModel',
    (m) => pick(m, 'addContacts', 'addContactsRunning', 'updateContacts', 'updateContactsRunning')
  )

  const title = isEmpty(value) ? <FormattedMessage id="ADD_CONTACTS" /> : <FormattedMessage id="MODIFY_CONTACTS" />
  const isImportPanel = isEmpty(value)
  const loading = isImportPanel ? addContactsRunning : updateContactsRunning
  const doAction = isImportPanel ? addContacts : updateContacts

  const resetForm = useCallback(() => {
    form.setFieldsValue({
      name: undefined,
      email: undefined,
      team: undefined,
      status: undefined,
    })
    setVisible(false)
  }, [form, setVisible])

  useEffect(() => {
    if (isNotEmpty<IContacts>(value) && visible) {
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
          onFinish={(values) => {
            doAction(values).then(resetForm).then(onFinished)
          }}
        >
          <Form.Item name="id" hidden>
            <Input type="text" />
          </Form.Item>
          <Form.Item name="name" rules={[{ required: true, message: formatMessage({ id: 'USER_REQUIRED_WARNING' }) }]}>
            <Input prefix={<UserOutlined />} placeholder={formatMessage({ id: 'NAME' })} />
          </Form.Item>
          <Form.Item
            name="team"
            rules={[{ required: true, message: formatMessage({ id: 'USER_TEAM_REQUIRED_WARNING' }) }]}
          >
            <UserTeamSelector prefix={<TeamOutlined />} placeholder={formatMessage({ id: 'SELECT_USER_TEAM' })} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: formatMessage({ id: 'USER_EMAIL_REQUIRED_WARNING' }) },
              { type: 'email', message: formatMessage({ id: 'USER_EMAIL_FORMAT_WARNING' }) },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder={formatMessage({ id: 'EMAIL' })} />
          </Form.Item>
          <Form.Item
            name="status"
            rules={[{ required: true, message: formatMessage({ id: 'USER_STATUS_REQUIRED_WARNING' }) }]}
          >
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
