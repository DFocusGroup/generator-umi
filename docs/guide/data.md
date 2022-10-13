# 数据

数据管理使用详情，参考[max-model](https://umijs.org/docs/max/data-flow)。

核心思路就是利用 `hooks` 优秀的表达能力和简洁性来做 model，是有别于 `redux` 的另一种数据管理手段。唯一需要处理的就是 `hooks` 只能复用逻辑，不能复用状态的问题。还好这个已经在 `max-model` 里解决了。

> 有兴趣了解 `max-model` 如何解决状态复用问题的，可以参考[从 custom Hooks 到 shared Hooks ：hox 原理分析](https://zhuanlan.zhihu.com/p/89518937)

基于 `max-model`，所有的 model 都会放在 `src/models/` 下面。

我们以用户管理页面为例讲解。

`src/pages/admin/contacts/index.tsx`：

```typescript
const Contacts: React.FC = () => {
  // 业务逻辑被提取到了 src/models/contacts.ts 中
  // 需要哪个状态 或者 方法，pick 即可。pick不是必须的，也可引入所有内容，
  // 只不过那样可能会引起不必要的更新
  const { contacts, loadingSearchContacts, doSearchContacts } = useModel(
    'contacts',
    (m) => pick(m, 'contacts', 'loadingSearchContacts', 'doSearchContacts'),
  );
  
  // 省略多行代码

  const columns = [...]

  return (...)
}

export default Contacts
```

至于这种新的风格，基于 `hooks` 的 model 如何编写？ 那真的简单的一批，就是纯纯的 自定义 `hooks`。

打开 `src/models/contacts.ts` 看看就知道了
