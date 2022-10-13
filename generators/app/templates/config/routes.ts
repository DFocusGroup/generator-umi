import { IRoute } from '../src/types';

export default [
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
  {
    path: '/login',
    component: './login',
  },
  {
    path: '/',
    component: '@/layouts/ProLayout',
    routes: [
      {
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
        access: 'canReadDashboardAnalysis',
      },
      {
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
        access: 'canReadDashboardMonitor',
      },
      {
        path: '/profile',
        component: './profile',
      },
      {
        path: '/admin/contacts',
        component: './admin/contacts',
        access: 'canReadAdminContactsManagement',
      },
    ],
  },
  {
    path: '*',
    component: './404',
  },
] as IRoute[];
