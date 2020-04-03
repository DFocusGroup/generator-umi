import {
  DashboardOutlined,
  RadarChartOutlined,
  MonitorOutlined,
  SolutionOutlined,
  UserOutlined
} from '@ant-design/icons'

import { IMenu } from '@/types'

export default [
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
] as IMenu[]
