# 路由

脚手架使用[约定式路由](https://umijs.org/docs/convention-routing)，并对其功能进行了扩展。

## 路由形态

脚手架中，路由分两种形态：

- OpenPage：无需登录就能访问的开放页面。判定标准，以 `/o/` 开始的路由会被判定为 OpenPage。例如：登录页面(`/o/login`)
- AuthRequiredPage：必须登录后才能访问的页面。判定标准，以 非 `/o/` 开始的路由会被判定为 AuthRequiredPage，例如：分析页面(`/dashboard/analysis`)

## 路由权限

打开 `src/pages/dashboard/analysis/index.tsx`, 按照 `umi` 约定式路由的规则我们知道，这个页面对应的路由是 `/dashboard/analysis`，它以 非 `/o/` 开始，所以是 AuthRequiredPage，即必须登录后才能访问的页面。我们就以它为例解释权限控制：

```typescript
import React from 'react'

function Analysis() {
  return <div>analysis</div>
}

// 不赘述，在 国际化 章节里看吧
Analysis.title = 'ANALYSIS_TITLE'

// 不赘述，在 布局 章节里看吧
Analysis.layout = 'PRO_LAYOUT'

// 这里为access指定了需要的权限为 ：canReadDashboardAnalysis
// 可以去 src/access.ts 里查看，这个值会在后端返回的 user.permissions
// 里包含 VIEW_DASHBOARD_ANALYSIS 权限时 会被置为 true
// 即：只有登录用户有 VIEW_DASHBOARD_ANALYSIS 权限时，才能打开本页面
// 否则会被转到 内置的 403 页面
Analysis.access = 'canReadDashboardAnalysis'

export default Analysis
```

> 找到 `mock/user.js`, 把 `VIEW_DASHBOARD_ANALYSIS` 改成其他任意字符，刷新页面，尝试访问 `/dashboard/analysis`，你会看到如下界面：

<img :src="$withBase('/403.png')" alt="403">

> 判定是否具有页面访问权限的操作之所以单独放在 `src/access.ts` 里，就是考虑到后端的 api 不一定和脚手架相同而需要变更，所以在 `src/access.ts` 里统一处理。

那么，如果页面没有额外的权限要求，仅登录后就能访问，例如：个人信息页。该如何处理？简单，只要删除 页面里的 `页面组件.access = '指定权限'` 这句话就行了。
