# 数据

数据管理使用详情，参考[plugin-model](https://umijs.org/zh-CN/plugins/plugin-model)。

核心思路就是利用 `hooks` 优秀的表达能力和简洁性来做 model，是有别于 `redux` 的另一种数据管理手段。唯一需要处理的就是 `hooks` 只能复用逻辑，不能复用状态的问题。还好这个已经在 `plugin-model` 里解决了。

> 有兴趣了解 `plugin-model` 如何解决状态复用问题的，可以参考[从 custom Hooks 到 shared Hooks ：hox 原理分析](https://zhuanlan.zhihu.com/p/89518937)

基于 `plugin-model`，所有的 model 都会放在 `src/models/` 下面。

我们依旧以登录页面为例讲解。

`src/pages/login/index.tsx`：

```typescript
// 业务逻辑被提取到了 src/models/useLoginModel.ts 中
// 本组件只用到了 initBackground
const { initBackground } = useModel('useLoginModel', m => pick(m, 'initBackground'))

// 然后组件挂载后，执行该方法，我们就得到了一个酷炫的背景
useEffect(() => {
  initBackground()
}, [initBackground])
```

至于这种新的风格，基于 `hooks` 的 model 如何编写？ 那真的简单的一批，就是纯纯的 自定义 `hooks`。

打开 `src/models/useLoginModel.ts` 看看就知道了
