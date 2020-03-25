# 路由

脚手架使用[约定式路由](https://umijs.org/docs/convention-routing)，并对其功能进行了扩展。

## 路由形态

脚手架中，路由分两种形态：

- OpenPage：无需登录就能访问的开放页面。判定标准，以 `/o/` 开始的路由会被判定为 OpenPage。例如：登录页面(`/o/login`)
- AuthRequiredPage：必须登录后才能访问的页面。判定标准，以 非 `/o/` 开始的路由会被判定为 AuthRequiredPage。未登录时访问此类路由，会跳转到登录页。例如：分析页面(`/dashboard/analysis`)

## 路由权限

权限路由指 AuthRequiredPage 形态下的权限控制细节。例如：页面 A 只要求登录就能访问；页面 B 即使登录后，还要求用户具备相应权限才能访问，否则提示 `403` 。

下面，打开 `src/pages/dashboard/analysis/index.tsx`, 按照 `umi` 约定式路由的规则我们知道，这个页面对应的路由是 `/dashboard/analysis`，它以 非 `/o/` 开始，所以是 AuthRequiredPage，即必须登录后才能访问的页面。那 **权限** 具体在哪里控制，请继续往下看，我们就以分析页面为例解释权限控制：

```typescript
import React from 'react'

function Analysis() {
  return <div>analysis</div>
}

// 指定本页面 title 使用 locales/ 下对应语言的替换
// 详情在 国际化 章节里看吧
Analysis.title = 'ANALYSIS_TITLE'

// 指定使用 PRO_LAYOUT 布局，详情在 布局 章节里看吧
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

## 不存在路由

如果访问的页面不存在，脚手架自带了 404 组件，如下：

在 OpenPage 形态下，显示：

<img :src="$withBase('/open_404.png')" alt="open 404">

在 AuthRequiredPage 形态下，显示：

<img :src="$withBase('/pro_404.png')" alt="pro 404">

有朋友可能会问，都是不存在的路由，脚手架里是如何判定应该使用哪个布局的？ 那就得熟悉下一章节，[布局-布局处理器列表](/guide/layout.md#布局处理器列表)
