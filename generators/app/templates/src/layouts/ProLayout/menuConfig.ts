import {
  DashboardOutlined,
  RadarChartOutlined,
  MonitorOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { defineAppUIConfig } from '@/types';

export default defineAppUIConfig({
  appTitle: 'Love UmiJS',
  appLogo: '/app_logo.svg',
  sideMenus: [
    {
      key: 'dashboard',
      icon: DashboardOutlined,
      title: 'dashboard_menu',
      children: [
        {
          icon: RadarChartOutlined,
          title: 'analysis_menu',
          path: '/dashboard/analysis',
        },
        {
          icon: MonitorOutlined,
          title: 'monitor_menu',
          path: '/dashboard/monitor',
        },
      ],
    },
    {
      key: 'admin',
      icon: SolutionOutlined,
      title: 'admin_menu',
      children: [
        {
          icon: UserOutlined,
          title: 'contacts_management_menu',
          path: '/admin/contacts',
        },
      ],
    },
  ],
  navMenus: [
    {
      key: 'dashboard',
      title: 'dashboard_menu',
      children: [
        {
          title: 'analysis_menu',
          path: '/dashboard/analysis',
        },
        {
          title: 'monitor_menu',
          path: '/dashboard/monitor',
        },
      ],
    },
    {
      title: 'contacts_management_menu',
      path: '/admin/contacts',
    },
  ],
});
