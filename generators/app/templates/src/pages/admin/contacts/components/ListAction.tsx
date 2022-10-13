import React from 'react';
import { Button } from 'antd';
import { FormattedMessage } from '@umijs/max';
import ContactsManagePanel from './ContactsManagePanel';

interface IListActionProps {
  onRefresh: () => void;
}

const ListAction: React.FC<IListActionProps> = ({ onRefresh }) => {
  return (
    <div className="flex items-center justify-between">
      <ContactsManagePanel onFinished={onRefresh}>
        <Button type="primary">
          <FormattedMessage id="add_contacts_btn" />
        </Button>
      </ContactsManagePanel>
      <Button onClick={onRefresh}>
        <FormattedMessage id="refresh_btn" />
      </Button>
    </div>
  );
};

export default ListAction;
