# 布局

脚手架扩展了 `umi` 的布局内容，分两个方面：

1. 提供了一些默认的布局（`BLANK`、`PRO_LAYOUT`），可供选择
2. 提供了布局选择器，在无需调整 `src/layouts/index.tsx` 的前提下，通过在 `src/layouts/options` 下按规则编写新的布局，然后在 `src/layouts/options/index.tsx` 将其注册到对应的路由形态的选择器列表里，就能在页面里使用了

> 关于 路由形态，不清楚的朋友 [来来来](/guide/route.md)

## 布局处理器列表

请看 `src/layouts/options/index.tsx`，找到如下代码：

```typescript
// 路由形态为 OpenPage 时的布局处理器列表
export const OPEN_LAYOUTS = [BlankResolver]
// 路由形态为 AuthRequiredPage 时的布局处理器列表
export const AUTH_REQUIRED_LAYOUTS = [ProLayoutResolver, BlankResolver]
```

路由选择器执行逻辑为，先在布局入口 `src/layouts/index.tsx` 进行路由形态判定，然后根据形态在对应的布局处理器列表进行依次判定（从左至右），第一个匹配到的布局处理器，会被拿来对路由进行最终渲染。

现在大家应该可以猜出，登录页面 (`/o/login`) 只会在 `OPEN_LAYOUTS` 里找合适的布局，而目前，`OPEN_LAYOUTS` 里，只有一个内置布局 `BLANK`，未来，开发者可以增加自己新的针对 OpenPage 的布局，只要添加到 `OPEN_LAYOUTS` 即可。

## 路由指定布局

上面讲了布局处理器，那么我们开发一个页面，是如何指定这个页面使用哪个布局的呢？ 记忆好的朋友已改已经想到 [路由](/guide/route.md#路由权限) ，提到的 `layout` 属性。没错，让我们再次打开 `src/pages/dashboard/analysis/index.tsx`：

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

## 自定义布局

我们以 `BLANK` 布局为例，打开 `src/layouts/options/Blank/index.tsx`：

```typescript
import React from 'react'
import { useModel } from 'umi'

import { isEmpty, pick } from '@/helpers/object'

import Exception403 from '@/components/exception/403'
import Exception404 from '@/components/exception/404'

import { ILayoutProps } from '@/types'

// props 必须是 ILayoutProps 或 其子集
export default function Blank({ children, route, canAccess }: ILayoutProps) {
  const { width, height } = useModel('useAppModel', m => pick(m, 'width', 'height'))

  // 如果路由信息不存在，当然，显示404
  if (isEmpty(route)) {
    return <Exception404 style={{ width, height }} />
  }

  // 如果布局入口传入的 canAccess 为 false，表示没有对应权限，当然应该显示 403
  if (!canAccess) {
    return <Exception403 style={{ width, height }} />
  }

  // children 就是路由对应的页面组件
  return children
}
```

## 自定义布局处理器

我们依旧以 `BLANK` 的布局处理器为例（谁让它最简单呢），打开 `src/layouts/options/index.tsx`:

```typescript
// 必须是 ILayoutResolver
const BlankResolver: ILayoutResolver = {
  // 用来判定布局入口传入的路由信息是否可以使用本布局渲染
  is(route?: IERoute): boolean {
    return isEmpty(route) || route!.layout === 'BLANK' || route?.path === '/'
  },
  // 用布局入口传入的 props 进行布局渲染。可以看到
  // 这里 routes 其实 Blank 布局并没有用到，所以没有传入，可以避免不要的刷新
  get({ routes, children, route, canAccess }: ILayoutProps) {
    return (
      <Blank route={route} canAccess={canAccess}>
        {children}
      </Blank>
    )
  }
}
```
