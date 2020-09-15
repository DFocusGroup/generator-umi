import {
  DashboardOutlined,
  RadarChartOutlined,
  MonitorOutlined,
  SolutionOutlined,
  UserOutlined
} from '@ant-design/icons'

import { defineProLayoutConfig } from '@/types'

export default defineProLayoutConfig({
  appTitle: 'Love UmiJS',
  appLogo: '/app_logo.svg',
  sideMenus: [
    {
      key: 'dashboard',
      icon: DashboardOutlined,
      title: 'DASHBOARD_MENU',
      children: [
        {
          icon: RadarChartOutlined,
          title: 'ANAKYSIS_MENU',
          path: '/dashboard/analysis'
        },
        {
          icon: MonitorOutlined,
          title: 'MONITOR_MENU',
          path: '/dashboard/monitor'
        }
      ]
    },
    {
      key: 'admin',
      icon: SolutionOutlined,
      title: 'ADMIN_MENU',
      children: [
        {
          icon: UserOutlined,
          title: 'USER_MANAGEMENT_MENU',
          path: '/admin/users'
        }
      ]
    }
  ],
  navMenus: [
    {
      key: 'dashboard',
      title: 'DASHBOARD_MENU',
      children: [
        {
          title: 'ANAKYSIS_MENU',
          path: '/dashboard/analysis'
        },
        {
          title: 'MONITOR_MENU',
          path: '/dashboard/monitor'
        }
      ]
    },
    {
      title: 'USER_MANAGEMENT_MENU',
      path: '/admin/users'
    }
  ]
})
