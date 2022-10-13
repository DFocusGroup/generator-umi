import React, { useMemo } from 'react';
import {
  Outlet,
  useAccess,
  useAppData,
  useLocation,
  Navigate,
} from '@umijs/max';
import { useSize, useLocalStorageState } from 'ahooks';

import { Layout } from 'antd';

import { Exception403 } from '@/components';
import { isEmpty, isInvalidInitState } from '@/utils';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { findRoute } from './helper';

export default function ProLayout() {
  const access = useAccess();
  const { pathname } = useLocation();
  const size = useSize(window.document.body);
  const windowHeight = useMemo(
    () => (size && size.height ? size.height : 0),
    [size],
  );
  const { routes } = useAppData();

  const currentRoute = useMemo(
    () =>
      findRoute({
        routes,
        pathname,
      }),
    [routes, pathname],
  );

  const needSign = useMemo(() => isInvalidInitState(access), [access]);

  const canAccess = useMemo(() => {
    // @ts-ignore
    return isEmpty(currentRoute?.access) ? true : access[currentRoute?.access];
  }, [access, currentRoute]);

  const [sidebarCollapsed, setSidebarCollapsed] = useLocalStorageState(
    'sidebarCollapsed',
    {
      defaultValue: false,
    },
  );

  // redirect to login page if user has not login
  if (needSign) {
    return (
      <Navigate
        to={`/login?redirectTo=${encodeURIComponent(
          window.location.pathname + window.location.search,
        )}`}
      />
    );
  }

  let content = <Outlet />;

  if (!canAccess) {
    content = (
      <Exception403
        style={{
          height: windowHeight - 64 - 48,
        }}
      />
    );
  }

  return (
    <Layout>
      <Sidebar collapsed={sidebarCollapsed} />
      <Layout>
        <Navbar
          collapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed((b) => !b)}
        />
        <Layout.Content
          className="p-[24px] bg-[#f0f2f5]"
          style={{
            minHeight: windowHeight - 64,
          }}
        >
          <div
            className="bg-[#fff]"
            style={{
              minHeight: windowHeight! - 64 - 48,
            }}
          >
            {content}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
