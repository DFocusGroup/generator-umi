import React, { useMemo } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useIntl, history, useModel, SelectLang } from '@umijs/max';

import { pick } from '@/utils';

import { IUser } from '@/types';

const RightsideMenu: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { logout } = useModel('login', (model) => pick(model, 'logout'));
  const { formatMessage } = useIntl();

  const menu = useMemo(
    () => (
      <Menu className="w-[250px]" items={[
        {
          key: 'profile',
          onClick: () => {
            history.push('/profile');
          },
          label: (
            <>
              <UserOutlined className="mr-[5px]" />
              {formatMessage({ id: 'profile_btn' })}
            </>
          ),
        },
        {
          key: 'divider',
          type: 'divider',
        },
        {
          key: 'logout',
          label: (
            <>
              <LogoutOutlined className="mr-[5px]" />
              {formatMessage({ id: 'logout_btn' })}
            </>
          ),
          onClick: logout,
        },
      ]} />
    ),
    [formatMessage, logout],
  );

  return (
    <div className="float-right flex items-center justify-center">
      <Dropdown overlay={menu}>
        <div className="px-[20px] cursor-pointer hover:bg-[#e4e4e4]">
          <Avatar src={(initialState as IUser).avatar} />
          &nbsp;<span>{(initialState as IUser).name}</span>
        </div>
      </Dropdown>

      <SelectLang className="w-[40px] flex items-center justify-center h-[64px] cursor-pointer hover:bg-[#e4e4e4]" />
    </div>
  );
};

export default RightsideMenu;
