# 路由

脚手架使用[约定式路由](https://umijs.org/docs/convention-routing)，并对其功能进行了扩展。并通过内置的布局处理器做最终渲染确定。

## 路由扩展属性

扩展属性使用方法：只要在页面组件中，设置静态属性即可。完整示例如下：

```typescript
import React from 'react'

function Analysis() {
  return <div>analysis</div>
}

Analysis.title = 'ANALYSIS_TITLE'
Analysis.layout = 'PRO_LAYOUT'
Analysis.requireSignin = true
Analysis.access = 'canReadDashboardAnalysis'

export default Analysis
```

> 静态属性：指 直接赋值的 属性，例如：`Login.title = 'LOGIN_TITLE'`。~~变量赋值则不支持，如：`Login.title = titleName`~~

如需使用配置式路由，可以参考如下配置：

```typescript
import { defineConfig } from 'umi'

import theme from './theme'

export default defineConfig({
  hash: true,
  mock: {
    exclude: ['mock/**/_*.[jt]s']
  },
  antd: {},
  theme,
  locale: {
    antd: true,
    title: true
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
          requireSignin: false,
          layout: 'BLANK'
        },
        {
          component: '@/pages/admin/users/index',
          path: '/admin/users',
          title: 'USERS_TITLE',
          layout: 'PRO_LAYOUT',
          requireSignin: true,
          access: 'canReadAdminUserManagement'
        },
        {
          component: '@/pages/dashboard/analysis/index',
          path: '/dashboard/analysis',
          title: 'ANALYSIS_TITLE',
          layout: 'PRO_LAYOUT',
          requireSignin: true,
          access: 'canReadDashboardAnalysis'
        },
        {
          component: '@/pages/dashboard/monitor/index',
          path: '/dashboard/monitor',
          title: 'MONITOR_TITLE',
          layout: 'PRO_LAYOUT',
          requireSignin: true,
          access: 'canReadDashboardMonitor'
        },
        {
          component: '@/pages/login/index',
          path: '/login',
          title: 'LOGIN_TITLE',
          layout: 'BLANK',
          requireSignin: false
        },
        {
          component: '@/pages/Profile/index',
          path: '/profile',
          title: 'PROFILE_TITLE',
          layout: 'PRO_LAYOUT',
          requireSignin: true
        }
      ]
    }
  ]
})
```

### title

- Type: `string`

可直接使用国际化 `key`，自动被转成对应语言的文案。

### layout

- Type: `string`

路由必须指定自己使用的布局，目前内置有 `BLANK`, `PRO_LAYOUT` 两款布局。

如下图风格：

**BLANK** 空布局

<img :src="$withBase('/blank_layout.png')" alt="blank">

**PRO_LAYOU** ant-design-pro 布局

<img :src="$withBase('/pro_layout.png')" alt="pro">

### requireSignin

- Type: `boolean`

指定路由是否需要登录。

当一个路由的 `requireSignin` 指定为 `true`，如果用户未登录时访问该路由，回重定向到登录页面。

当一个路由的 `requireSignin` 指定为 `false`，用户是否登录，不影响路由访问。

### access

- Type: `string`

当路由的 `requireSignin = true` 时，可以设置 `access` 来描述该路由的详细权限诉求。

例如分析页面 `src/pages/admin/users/index.tsx`，该路由指定了 `Users.access = 'canReadAdminUserManagement'`。

如果你使用管理员账号（`admin/123456`），就能正常访问该页面（`/admin/users`）。

如果使用普通用户账号（`meimei.han/123456`），访问该页面（`/admin/users`）会看到如下界面：

<img :src="$withBase('/pro_403.png')" alt="403">

> 判定是否具有页面访问权限的操作之所以单独放在 `src/access.ts` 里，就是考虑到后端的 api 不一定和脚手架相同而需要变更，所以在 `src/access.ts` 里统一处理。

那么，如果页面没有额外的权限要求，仅登录后就能访问，例如：个人信息页。该如何处理？简单，只要不给 `access` 赋值就可以了。

## 不存在路由

如果访问的页面不存在，脚手架自带了 404 组件，如下：

<img :src="$withBase('/open_404.png')" alt="open 404">

## 权限路由的应用

分别使用 `admin/123456` 和 `meimei.han/123456` 两个账号登录系统，会看到不同的菜单。
