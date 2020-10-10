# 数据

数据管理使用详情，参考[plugin-model](https://umijs.org/zh-CN/plugins/plugin-model)。

核心思路就是利用 `hooks` 优秀的表达能力和简洁性来做 model，是有别于 `redux` 的另一种数据管理手段。唯一需要处理的就是 `hooks` 只能复用逻辑，不能复用状态的问题。还好这个已经在 `plugin-model` 里解决了。

> 有兴趣了解 `plugin-model` 如何解决状态复用问题的，可以参考[从 custom Hooks 到 shared Hooks ：hox 原理分析](https://zhuanlan.zhihu.com/p/89518937)

基于 `plugin-model`，所有的 model 都会放在 `src/models/` 下面。

我们以用户管理页面为例讲解。

`src/pages/admin/users/index.tsx`：

```typescript
import React from 'react'
import { useIntl, useModel } from 'umi'
import { useAntdTable } from 'ahooks'

import { pick } from '@/helpers'
import { ILdapUser, IPageComponent, IPageComponentProps, IUser } from '@/types'

import styles from './index.less'

const Users: IPageComponent = (props: IPageComponentProps) => {
  // 业务逻辑被提取到了 src/models/useUserManagementModel.ts 中
  // 需要哪个状态 或者 方法，pick 即可。pick不是必须的，也可引入所有内容，
  // 只不过那样可能会引起不必要的更新
  const { fetchUsers } = useModel('useUserManagementModel', m => pick(m, 'fetchUsers'))
  const { formatMessage } = useIntl()
  const { tableProps, refresh } = useAntdTable(fetchUsers, {
    defaultPageSize: 10
  })

  const { initialState } = useModel('@@initialState')

  const columns = [...]

  return (...)
}

Users.title = 'USERS_TITLE'
Users.layout = 'PRO_LAYOUT'
Users.requireSignin = true
Users.access = 'canReadAdminUserManagement'

export default Users
```

至于这种新的风格，基于 `hooks` 的 model 如何编写？ 那真的简单的一批，就是纯纯的 自定义 `hooks`。

打开 `src/models/useUserManagementModel.ts` 看看就知道了
