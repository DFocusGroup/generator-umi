# 布局

脚手架扩展了 `umi` 的布局内容，分两个方面：

1. 提供了一些默认的布局（`BLANK`、`PRO_LAYOUT`），可供选择
2. 提供了布局选择器，在无需调整布局入口 `src/layouts/index.tsx` 的前提下，通过在 `src/layouts/options` 下按规则编写新的布局，然后在 `src/layouts/options/index.tsx` 将其注册到对应的路由形态的选择器列表里，就能在页面里使用了

> 关于 路由形态，不清楚的朋友 [来来来](/guide/route.md)

## 内置布局介绍

### BLANK

即：空布局，也是登录页面 `src/pages/o/login/index.tsx` 使用的布局。可以看到 登录页面里有指定其使用的布局为 `BLANK`，如下：

```typescript
Login.layout = 'BLANK'
```

### PRO_LAYOUT

即：ant-design pro 使用的由导航、侧边栏、内容区域 组成的布局。由于该布局导航里的用户信息，侧边栏的菜单都依赖用户数据，所以该布局只能被 AuthRequiredPage 使用。也是分析（`src/pages/dashboard/analysis/index.tsx`）、监控页面（`src/pages/dashboard/monitor/index.tsx`） 使用的布局。可以看到 这两个页面里有指定其使用的布局为 `PRO_LAYOUT`，如下：

```typescript
Monitor.layout = 'PRO_LAYOUT'
```

## 布局处理器列表

请看 `src/layouts/options/index.tsx`，找到如下代码：

```typescript
// 路由形态为 OpenPage 时的布局处理器列表
const OPEN_LAYOUTS = [BlankResolver]
// 路由形态为 AuthRequiredPage 时的布局处理器列表
const AUTH_REQUIRED_LAYOUTS = [ProLayoutResolver, BlankResolver]
```

路由处理器执行逻辑为，先在布局入口 `src/layouts/index.tsx` 进行路由形态判定，然后根据形态在对应的布局处理器列表进行依次判定（从左至右），第一个匹配到的布局处理器，会被拿来对路由进行最终渲染。

现在大家应该可以猜出，登录页面 (`/o/login`) 只会在 `OPEN_LAYOUTS` 里找合适的布局，而目前，`OPEN_LAYOUTS` 里，只有一个内置布局 `BLANK`，未来，开发者可以增加自己新的针对 OpenPage 的布局，只要添加到 `OPEN_LAYOUTS` 即可。

而 分析、监控 页面则只能被 `AUTH_REQUIRED_LAYOUTS` 注册使用，因为他们都需要用户登录，以及用户的特定权限。

## 路由指定布局

上面讲了布局处理器，那么我们开发一个页面，是如何指定这个页面使用哪个布局的呢？ 有朋友应该已经注意到 上面提到的 `layout` 属性。没错，让我们再次打开 `src/pages/dashboard/analysis/index.tsx`：

```typescript
import React from 'react'

function Analysis() {
  return <div>analysis</div>
}

// 不赘述，在 国际化 章节里看吧
Analysis.title = 'ANALYSIS_TITLE'

// 页面使用布局，本页面使用内置的PRO_LAYOUT
Analysis.layout = 'PRO_LAYOUT'

// 不赘述，回 路由 章节里看吧
Analysis.access = 'canReadDashboardAnalysis'

export default Analysis
```

## 自定义布局处理器

我们以 `BLANK` 布局为例，打开 `src/layouts/options/Blank/index.tsx`：

```typescript
import React from 'react'
import { useModel } from 'umi'

import { isEmpty, pick } from '@/helpers/object'

import Exception403 from '@/components/exception/403'
import Exception404 from '@/components/exception/404'

import { ILayoutProps, ILayoutResolver, IERoute } from '@/types'

// 布局组件 props 必须是 ILayoutProps
function Blank({ children, route, canAccess }: ILayoutProps) {
  const { width, height } = useModel('useAppModel', m => pick(m, 'width', 'height'))

  // 如果路由信息不存在，当然，显示404
  if (isEmpty(route)) {
    return <Exception404 style={{ width, height }} />
  }

  // 如果布局入口传入的 canAccess 为 false，表示没有对应权限，当然应该显示 403
  if (!canAccess) {
    return <Exception403 style={{ width, height }} />
  }

  return children
}

// 布局处理器
const BlankResolver: ILayoutResolver = {
  // 判定传入路由是否可以被当前布局渲染
  is(route?: IERoute): boolean {
    return isEmpty(route) || route!.layout === 'BLANK' || route!.path === '/'
  },
  // 使用布局入口传入 props 渲染本布局
  // 不是所有参数都要传给布局，只传必须项可以减少不必要的 re-render
  get({ routes, children, route, canAccess }: ILayoutProps) {
    return (
      <Blank route={route} canAccess={canAccess}>
        {children}
      </Blank>
    )
  }
}

export default BlankResolver
```

之后，只要把写好的布局处理器注册到 [布局处理器列表](/guide/layout.md#布局处理器列表) 里就可以使用了。
