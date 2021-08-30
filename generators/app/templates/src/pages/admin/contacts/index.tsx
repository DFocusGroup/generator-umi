import React from 'react'
import { Button, Table, Tag } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import { FormattedMessage, useIntl, useModel } from 'umi'
import { useAntdTable } from 'ahooks'

import { getColumnSearchProps, pick } from '@/helpers'
import { IPageComponent, IPageComponentProps, IContacts, IUser } from '@/types'

import ContactsManagePanel from './components/ContactsManagePanel'
import DeleteContactsPopconfirm from './components/DeleteContactsPopconfirm'

import styles from './index.less'

const Contacts: IPageComponent = (props: IPageComponentProps) => {
  const { fetchContacts } = useModel('useContactsManagementModel', m => pick(m, 'fetchContacts'))
  const { formatMessage } = useIntl()
  const { tableProps, refresh } = useAntdTable(fetchContacts, {
    defaultPageSize: 10
  })

  const { initialState } = useModel('@@initialState')

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 150
    },
    {
      title: <FormattedMessage id="NAME" />,
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps(formatMessage({ id: 'FILTER_PLACEHOLDER' }, { field: formatMessage({ id: 'NAME' }) })),
      sorter: true,
      render(val: string, record: IContacts) {
        return (
          <div>
            <span>{val}</span>
            {(initialState as IUser).email === record.email ? (
              <Tag color="magenta" style={{ position: 'absolute', top: -1 }}>
                <FormattedMessage id="SELF" />
              </Tag>
            ) : null}
          </div>
        )
      }
    },
    {
      title: <FormattedMessage id="EMAIL" />,
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps(formatMessage({ id: 'FILTER_PLACEHOLDER' }, { field: formatMessage({ id: 'EMAIL' }) }))
    },
    {
      title: <FormattedMessage id="TEAM" />,
      dataIndex: 'team',
      key: 'team',
      width: 120
    },
    {
      title: <FormattedMessage id="STATUS" />,
      dataIndex: 'status',
      key: 'status',
      sorter: true,
      width: 120
    },
    {
      title: <FormattedMessage id="ACTIONS" />,
      key: 'action',
      width: 100,
      render(val: any, record: IContacts) {
        return (
          <div>
            <ContactsManagePanel value={record} onFinished={refresh}>
              <EditOutlined className={styles.iconBtn} />
            </ContactsManagePanel>
            &nbsp;
            <DeleteContactsPopconfirm value={record.id} onConfirm={refresh} />
          </div>
        )
      }
    }
  ]

  return (
    <div className={styles.container}>
      <Table
        {...tableProps}
        className={styles.tableReset}
        size="small"
        rowKey="id"
        columns={columns}
        pagination={{ showSizeChanger: true }}
        title={() => (
          <ContactsManagePanel onFinished={refresh}>
            <Button type="primary">
              <FormattedMessage id="ADD_CONTACTS_BTN" />
            </Button>
          </ContactsManagePanel>
        )}
      />
    </div>
  )
}

Contacts.title = 'CONTACTS_TITLE'
Contacts.layout = 'PRO_LAYOUT'
Contacts.requireSignin = true
Contacts.access = 'canReadAdminContactsManagement'

export default Contacts
