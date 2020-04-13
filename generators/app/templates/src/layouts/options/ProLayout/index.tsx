import React from 'react'
import { useModel } from 'umi'

import { Layout } from 'antd'

import { Exception403 } from '@/components'
import { pick } from '@/helpers'
import { ILayoutProps, ILayoutResolver, IERoute } from '@/types'

import SideBarTitle from './SideBarTitle'
import NavigationBar from './NavigationBar'
import SideBarMenu from './SideBarMenu'

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
      <Layout.Sider theme="dark" width={260} trigger={null} collapsible collapsed={sidebarCollapsed}>
        <SideBarTitle collapsed={sidebarCollapsed} />
        <SideBarMenu routes={routes!} />
      </Layout.Sider>
      <Layout>
        <Layout.Header className={styles.navigationBar}>
          <NavigationBar sidebarCollapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar} />
        </Layout.Header>
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
