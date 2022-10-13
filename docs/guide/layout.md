# 布局

内置了一个简易的 `proLayout` 布局。

考虑到业务的多变性，所以没有使用 [antd-prolayout](https://umijs.org/docs/max/layout-menu)，通过示例代码提供实现思路作为参考。



## 菜单

布局配置，通过修改 `src/layouts/ProLayout/menuConfig.ts` ，开发者可以轻松获得如下内容：

1. 打开/关闭 侧边栏
2. 打开/关闭 导航菜单
3. 指定左上角的 应用图标
4. 指定左上角的 应用名称

效果如下：

<img :src="$withBase('/pro_layout.png')" alt="pro">

`proLayoutConfig.ts` 默认值如下：

```typescript

export default defineAppUIConfig({
  // 左上角应用名称
  appTitle: string,
  // 左上角应用图标
  appLogo: string,
  // 左侧菜单栏配置，
  sideMenus: ISideMenu[],
  // 上方导航栏配置
  navMenus: INavMenu[]
})
```

