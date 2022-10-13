import React from 'react';
import { Layout } from 'antd';

import SidebarTitle from './SidebarTitle';
import SidebarMenu from './SidebarMenu';

interface ISidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ collapsed }) => {
  return (
    <Layout.Sider
      theme="dark"
      width={260}
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="h-screen"
    >
      <SidebarTitle collapsed={collapsed} />
      <SidebarMenu />
    </Layout.Sider>
  );
};

export default Sidebar;
