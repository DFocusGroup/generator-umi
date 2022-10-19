# 路由

脚手架使用[配置路由](https://umijs.org/docs/guides/routes#%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1)。

## 路由扩展属性


```typescript
export default [
  {
    path: '/dashboard/monitor',
    component: './dashboard/monitor',
    access: 'canReadDashboardMonitor'
  }
]
```

### access

- Type: `string`

可以用来指定该路由需要哪个权限才能访问。[看这里](https://umijs.org/docs/max/access) 找到更多关于她的资料。


如果你使用管理员账号（`admin/123456`），就能正常访问该页面（`/admin/contacts`）。

如果使用普通用户账号（`meimei.han/123456`），访问该页面（`/admin/contacts`）会看到如下界面：

<img :src="$withBase('/pro_403.png')" alt="403">

> 判定是否具有页面访问权限的操作之所以单独放在 `src/access.ts` 里，就是考虑到后端的 api 不一定和脚手架相同而需要变更，所以在 `src/access.ts` 里统一处理。

那么，如果页面没有额外的权限要求，仅登录后就能访问，例如：个人信息页。该如何处理？简单，只要不给 `access` 赋值就可以了。

## 不存在路由

如果访问的页面不存在，脚手架自带了 404 组件，如下：

<img :src="$withBase('/open_404.png')" alt="open 404">

## 权限路由的应用

分别使用 `admin/123456` 和 `meimei.han/123456` 两个账号登录系统，会看到不同的菜单。
