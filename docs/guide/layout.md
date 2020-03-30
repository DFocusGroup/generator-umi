# 布局

脚手架扩展了 `umi` 的布局内容，分两个方面：

1. 提供了一些默认的布局（`BLANK`、`PRO_LAYOUT`）
2. 提供了布局选择器，在无需调整布局入口 `src/layouts/index.tsx` 的前提下，通过在 `src/layouts/options` 下按规则编写新的布局，然后在 `src/layouts/options/layoutResolvers.ts` 将其注册到选择器列表里，就能在页面里使用了

## 内置布局介绍

### BLANK

即：空布局，也是登录页面 `src/pages/login/index.tsx` 使用的布局。可以看到 登录页面里有指定其使用的布局为 `BLANK`，如下：

```typescript
Login.layout = 'BLANK'
```

效果如下：

<img :src="$withBase('/blank_layout.png')" alt="blank">

### PRO_LAYOUT

即：ant-design-pro 使用的由导航、侧边栏、内容区域 组成的布局。由于该布局导航里的用户信息，侧边栏的菜单都依赖用户数据，所以该布局只能被 `requireSignin = true` 的路由 使用。也是分析（`src/pages/dashboard/analysis/index.tsx`）、监控页面（`src/pages/dashboard/monitor/index.tsx`）、个人信息页面（`src/pages/profile/index.tsx`） 使用的布局。可以看到 这几个页面里有指定其使用的布局为 `PRO_LAYOUT`，如下：

```typescript
Monitor.layout = 'PRO_LAYOUT'
```

效果如下：

<img :src="$withBase('/pro_layout.png')" alt="pro">

## 布局选择器

请看 `src/layouts/options/LayoutSelector.tsx`，找到如下代码：

```typescript
import { useMemo } from 'react'
import { isNotEmpty } from '@/helpers'
import { ILayoutResolver, IERoute } from '@/types'
import { LAYOUT_RESOLVERS } from './layoutResolvers'

interface ILayoutSelectorProps {
  children: JSX.Element
  route: IERoute
  routes: IERoute[]
  canAccess: boolean
}

export default function LayoutSelector({ route, routes, children, canAccess }: ILayoutSelectorProps) {
  console.count('LayoutSelector')

  // 在布局处理器列表里查找合适的布局处理器
  const resolver = useMemo(() => LAYOUT_RESOLVERS.find(r => r.is(route)), [route])

  // 使用布局处理器获取最终布局
  const layout = useMemo(() => {
    if (isNotEmpty<ILayoutResolver>(resolver)) {
      return resolver.get({ routes: routes!, children, route, canAccess })
    }
    return null
  }, [route, routes, children, canAccess, resolver])

  // 使用布局渲染路由
  if (isNotEmpty<JSX.Element>(layout)) {
    return layout
  }

  // 如果路由里指定的布局不存在，报错
  throw new Error(`no proper layout found for ${route.path}, please check your code`)
}
```

## 路由指定布局

上面讲了布局处理器，那么我们开发一个页面，是如何指定这个页面使用哪个布局的呢？ 有朋友应该已经注意到 上面提到的 `layout` 属性。没错，让我们再次打开 `src/pages/dashboard/analysis/index.tsx`：

```typescript
import React from 'react'

function Analysis() {
  return <div>analysis</div>
}

// 页面使用布局，本页面使用内置的PRO_LAYOUT
Analysis.layout = 'PRO_LAYOUT'

export default Analysis
```

## 自定义布局处理器

我们以 `BLANK` 布局为例，打开 `src/layouts/options/Blank/index.tsx`：

```typescript
import React from 'react'
import { useModel } from 'umi'

import { pick } from '@/helpers'

import { Exception403 } from '@/components'

import { ILayoutProps, ILayoutResolver, IERoute } from '@/types'

// 空布局实现
function Blank({ children, canAccess }: ILayoutProps) {
  console.count('Layout: BLANK')
  const { width, height } = useModel('useAppModel', m => pick(m, 'width', 'height'))

  // 没有该页面权限时，显示 403 页面
  if (!canAccess) {
    return <Exception403 style={{ width, height }} />
  }

  return children
}

const BlankResolver: ILayoutResolver = {
  // 路由是否可以使用当前布局的判定
  is(route: IERoute): boolean {
    return route.layout === 'BLANK'
  },
  // 把必要的 props 传给布局
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

之后，只要把写好的布局处理器注册到 `src/layouts/options/layoutResolvers.ts` (布局处理器列表) 里就可以使用了。
