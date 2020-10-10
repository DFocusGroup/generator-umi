import React from 'react'
import { Button, Table, Tag } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import { FormattedMessage, useIntl, useModel } from 'umi'
import { useAntdTable } from 'ahooks'

import { getColumnSearchProps, pick } from '@/helpers'
import { ILdapUser, IPageComponent, IPageComponentProps, IUser } from '@/types'

import UserManagePanel from './components/UserManagePanel'
import DeleteUserPopconfirm from './components/DeleteUserPopconfirm'

import styles from './index.less'

const Users: IPageComponent = (props: IPageComponentProps) => {
  const { fetchUsers } = useModel('useUserManagementModel', m => pick(m, 'fetchUsers'))
  const { formatMessage } = useIntl()
  const { tableProps, refresh } = useAntdTable(fetchUsers, {
    defaultPageSize: 10
  })

  const { initialState } = useModel('@@initialState')

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: <FormattedMessage id="NAME" />,
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps(formatMessage({ id: 'FILTER_PLACEHOLDER' }, { field: formatMessage({ id: 'NAME' }) })),
      sorter: true,
      render(val: string, record: IUser) {
        return (
          <div>
            <span>{val}</span>
            {(initialState as ILdapUser).email === record.email ? (
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
      key: 'team'
    },
    {
      title: <FormattedMessage id="STATUS" />,
      dataIndex: 'status',
      key: 'status',
      sorter: true
    },
    {
      title: <FormattedMessage id="ACTIONS" />,
      key: 'action',
      render(val: any, record: IUser) {
        if ((initialState as ILdapUser).email === record.email) {
          return null
        }
        return (
          <div>
            <UserManagePanel value={record} onFinished={refresh}>
              <EditOutlined className={styles.iconBtn} />
            </UserManagePanel>
            &nbsp;
            <DeleteUserPopconfirm value={record.id} onConfirm={refresh} />
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
          <UserManagePanel onFinished={refresh}>
            <Button type="primary">
              <FormattedMessage id="ADD_USER_BTN" />
            </Button>
          </UserManagePanel>
        )}
      />
    </div>
  )
}

Users.title = 'USERS_TITLE'
Users.layout = 'PRO_LAYOUT'
Users.requireSignin = true
Users.access = 'canReadAdminUserManagement'

export default Users
