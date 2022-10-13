import React from 'react';
import { useIntl, useModel } from '@umijs/max';
import { Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { pick } from '@/utils';

interface IDeleteContactsPopconfirmProps {
  onConfirm: () => void;
  value: string;
}

const DeleteContactsPopconfirm: React.FC<IDeleteContactsPopconfirmProps> = ({
  onConfirm,
  value,
}) => {
  const { deleteContacts } = useModel('contacts', (m) =>
    pick(m, 'deleteContacts'),
  );
  const { formatMessage } = useIntl();
  return (
    <Popconfirm
      title={formatMessage({ id: 'confirm_delete_contacts' })}
      onConfirm={() => {
        deleteContacts(value).then(onConfirm);
      }}
      okText={formatMessage({ id: 'confirm_btn' })}
      cancelText={formatMessage({ id: 'cancel_btn' })}
    >
      <DeleteOutlined className="cursor-pointer hover:text-[16px]" />
    </Popconfirm>
  );
};

export default DeleteContactsPopconfirm;
