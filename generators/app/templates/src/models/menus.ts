import { DashboardOutlined, RadarChartOutlined, MonitorOutlined } from '@ant-design/icons'

import { IMenu } from '@/types'

export default [
  {
    key: 'dashboard',
    icon: DashboardOutlined,
    title: 'Dashboard',
    children: [
      {
        icon: RadarChartOutlined,
        title: 'Analysis',
        path: '/dashboard/analysis'
      },
      {
        icon: MonitorOutlined,
        title: 'Monitor',
        path: '/dashboard/monitor'
      }
    ]
  }
] as IMenu[]
