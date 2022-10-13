import React, { useState, useCallback, useEffect } from 'react';
import { FormattedMessage, useModel, useIntl } from '@umijs/max';
import { Popover, Form, Input, Button, Radio } from 'antd';
import { UserOutlined, TeamOutlined, MailOutlined } from '@ant-design/icons';
import { isEmpty, isNotEmpty, pick } from '@/utils';
import { UserTeamSelect } from '@/components';
import { IContact } from '@/types';

interface IUserManagePanelProps {
  children: React.ReactElement;
  onFinished: () => void;
  value?: IContact;
}

const ContactsManagePanel: React.FC<IUserManagePanelProps> = ({
  children,
  onFinished,
  value,
}) => {
  const [visible, setVisible] = useState(false);
  const { formatMessage } = useIntl();
  const [form] = Form.useForm<IContact>();
  const {
    addContacts,
    addContactsRunning,
    updateContacts,
    updateContactsRunning,
  } = useModel('contacts', (m) =>
    pick(
      m,
      'addContacts',
      'addContactsRunning',
      'updateContacts',
      'updateContactsRunning',
    ),
  );

  const title = isEmpty(value) ? (
    <FormattedMessage id="add_contacts" />
  ) : (
    <FormattedMessage id="modify_contacts" />
  );
  const isImportPanel = isEmpty(value);
  const loading = isImportPanel ? addContactsRunning : updateContactsRunning;
  const doAction = isImportPanel ? addContacts : updateContacts;

  const resetForm = useCallback(() => {
    form.setFieldsValue({
      name: undefined,
      email: undefined,
      team: undefined,
      status: undefined,
    });
    setVisible(false);
  }, [form, setVisible]);

  useEffect(() => {
    if (isNotEmpty<IContact>(value) && visible) {
      form.setFieldsValue(value);
    }
  }, [value, form, visible]);

  return (
    <Popover
      placement="bottomLeft"
      content={
        <Form
          form={form}
          name="user_mgr"
          initialValues={value}
          onFinish={(values) => {
            doAction(values).then(resetForm).then(onFinished);
          }}
        >
          <Form.Item name="id" hidden>
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'user_required_warning' }),
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={formatMessage({ id: 'name' })}
            />
          </Form.Item>
          <Form.Item
            name="team"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'user_team_required_warning' }),
              },
            ]}
          >
            <UserTeamSelect
              prefix={<TeamOutlined />}
              placeholder={formatMessage({ id: 'select_user_team' })}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'user_email_required_warning' }),
              },
              {
                type: 'email',
                message: formatMessage({ id: 'user_email_format_warning' }),
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder={formatMessage({ id: 'email' })}
            />
          </Form.Item>
          <Form.Item
            name="status"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'user_status_required_warning' }),
              },
            ]}
          >
            <Radio.Group>
              <Radio value="INITIAL">
                <FormattedMessage id="initial" />
              </Radio>
              <Radio value="ACTIVE">
                <FormattedMessage id="active" />
              </Radio>
              <Radio value="DISABLED">
                <FormattedMessage id="disabled" />
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                disabled={loading}
              >
                <FormattedMessage id="confirm_btn" />
              </Button>
              &nbsp;
              <Button onClick={resetForm}>
                <FormattedMessage id="cancel_btn" />
              </Button>
            </div>
          </Form.Item>
        </Form>
      }
      title={title}
      open={visible}
      trigger="click"
      onOpenChange={setVisible}
    >
      {children}
    </Popover>
  );
};

export default ContactsManagePanel;
