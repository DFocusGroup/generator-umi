import React, { useCallback, useEffect } from 'react';
import { Table, Tag } from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import { EditOutlined } from '@ant-design/icons';

import {
  FormattedMessage,
  useIntl,
  useModel,
  useSearchParams,
} from '@umijs/max';

import {
  getColumnSearchProps,
  parsePaginationQuery,
  pick,
  convertAntdTableArgsToQuery,
} from '@/utils';
import {
  IAntdTableFilters,
  IAntdTableSorter,
  IContact,
  IUser,
  IAntdTableSorterOrder,
} from '@/types';

import ContactsManagePanel from './components/ContactsManagePanel';
import DeleteContactsPopconfirm from './components/DeleteContactsPopconfirm';
import ListAction from './components/ListAction';

const Contacts: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { contacts, loadingSearchContacts, doSearchContacts } = useModel(
    'contacts',
    (m) => pick(m, 'contacts', 'loadingSearchContacts', 'doSearchContacts'),
  );
  const { formatMessage } = useIntl();

  const query = parsePaginationQuery(searchParams, ['name', 'email']);

  const { pageSize, current, sortField, sortOrder, filters } = query;

  const { name: filterName, email: filterEmail } = filters;

  const refreshData = useCallback(() => {
    const sorter: IAntdTableSorter = {};
    const filters: IAntdTableFilters = {};

    if (sortField && sortOrder) {
      sorter.sortField = sortField;
      sorter.sortOrder = sortOrder as IAntdTableSorterOrder;
    }
    if (filterName) {
      filters.name = filterName;
    }
    if (filterEmail) {
      filters.email = filterEmail;
    }

    doSearchContacts({ pageSize, current, filters, sorter });
  }, [pageSize, current, sortField, sortOrder, filterName, filterEmail]);

  const { initialState } = useModel('@@initialState');

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 150,
    },
    {
      title: <FormattedMessage id="name" />,
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps(
        formatMessage(
          { id: 'filter_placeholder' },
          { field: formatMessage({ id: 'name' }) },
        ),
      ),
      filteredValue: filterName ? [filterName]: null,
      sorter: true,
      width: 180,
      render(val: string, record: IContact) {
        return (
          <div>
            <span>{val}</span>
            {(initialState as IUser).email === record.email ? (
              <Tag color="magenta" style={{ position: 'absolute', top: -1 }}>
                <FormattedMessage id="self" />
              </Tag>
            ) : null}
          </div>
        );
      },
    },
    {
      title: <FormattedMessage id="email" />,
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps(
        formatMessage(
          { id: 'filter_placeholder' },
          { field: formatMessage({ id: 'email' }) },
        ),
      ),
      filteredValue: filterEmail ? [filterEmail]: null,
    },
    {
      title: <FormattedMessage id="team" />,
      dataIndex: 'team',
      key: 'team',
      width: 120,
    },
    {
      title: <FormattedMessage id="status" />,
      dataIndex: 'status',
      key: 'status',
      sorter: true,
      width: 120,
    },
    {
      title: <FormattedMessage id="actions" />,
      key: 'action',
      width: 100,
      render(val: any, record: IContact) {
        return (
          <div>
            <ContactsManagePanel value={record} onFinished={refreshData}>
              <EditOutlined className="cursor-pointer hover:text-[16px]" />
            </ContactsManagePanel>
            &nbsp;
            <DeleteContactsPopconfirm
              value={`${record.id}`}
              onConfirm={refreshData}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-[15px]">
      <Table
        loading={loadingSearchContacts}
        size="small"
        rowKey="id"
        columns={columns}
        dataSource={contacts?.list}
        pagination={{
          current: current,
          pageSize: pageSize,
          total: contacts?.total,
          showSizeChanger: true,
        }}
        onChange={(pagination, filters, sorters) => {
          convertAntdTableArgsToQuery(
            setSearchParams,
            pagination,
            filters,
            sorters as SorterResult<IContact>,
          );
        }}
        title={() => <ListAction onRefresh={refreshData} />}
      />
    </div>
  );
};

export default Contacts;
