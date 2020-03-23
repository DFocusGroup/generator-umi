import { DashboardOutlined, RadarChartOutlined, MonitorOutlined } from '@ant-design/icons'

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
  }
] as IMenu[]
