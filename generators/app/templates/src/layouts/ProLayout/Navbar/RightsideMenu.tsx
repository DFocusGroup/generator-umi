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
      <Menu className="w-[250px]">
        <Menu.Item
          key="profile"
          onClick={() => {
            history.push('/profile');
          }}
        >
          <UserOutlined className="mr-[5px]" />
          {formatMessage({ id: 'profile_btn' })}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key="logout"
          onClick={() => {
            logout();
          }}
        >
          <LogoutOutlined className="mr-[5px]" />
          {formatMessage({ id: 'logout_btn' })}
        </Menu.Item>
      </Menu>
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
