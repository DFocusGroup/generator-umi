import React from 'react'
import { useModel } from 'umi'

import { Layout } from 'antd'

import { Exception403 } from '@/components'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

import { pick } from '@/helpers'
import { ILayoutProps, ILayoutResolver, IERoute } from '@/types'

import proLayoutConfig from './proLayoutConfig'

import styles from './index.less'

interface IProlayoutProps {
  children: JSX.Element
  routes: IERoute[]
  canAccess: boolean
}

const ProLayout = React.memo(function({ children, routes, canAccess }: IProlayoutProps) {
  console.count('Layout: PRO_LAYOUT')
  const { height } = useModel('useAppModel', m => pick(m, 'height'))

  const { sidebarCollapsed, toggleSidebar } = useModel('useProLayoutModel', m =>
    pick(m, 'sidebarCollapsed', 'toggleSidebar')
  )

  let content = children

  if (!canAccess) {
    content = (
      <Exception403
        style={{
          height: height! - 64 - 48
        }}
      />
    )
  }
  return (
    <Layout>
      {proLayoutConfig.sideMenus && (
        <Sidebar
          routes={routes}
          sideMenus={proLayoutConfig.sideMenus}
          sidebarCollapsed={sidebarCollapsed}
          appLogo={proLayoutConfig.appLogo}
          appTitle={proLayoutConfig.appTitle}
        />
      )}

      <Layout>
        <Navbar
          routes={routes}
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={toggleSidebar}
          appLogo={proLayoutConfig.appLogo}
          appTitle={proLayoutConfig.appTitle}
        />
        <Layout.Content
          className={styles.content}
          style={{
            minHeight: height! - 64
          }}
        >
          <div
            className={styles.contentInner}
            style={{
              minHeight: height! - 64 - 48
            }}
          >
            {content}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
})

const ProLayoutResolver: ILayoutResolver = {
  is(route: IERoute): boolean {
    return route.layout === 'PRO_LAYOUT'
  },
  get({ routes, children, route, canAccess }: ILayoutProps) {
    if (!route.requireSignin) {
      throw new Error(`Route: ${route.path}, [requireSignin] must be true while layout === PRO_LAYOUT`)
    }
    return (
      <ProLayout routes={routes!} canAccess={canAccess}>
        {children}
      </ProLayout>
    )
  }
}

export default ProLayoutResolver
