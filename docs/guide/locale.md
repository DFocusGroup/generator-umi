# 国际化

国际化使用详情，参考[plugin-locale](https://umijs.org/zh-CN/plugins/plugin-locale)。

唯一要注意的是页面的 title。我们依旧以登录页面（`/src/pages/o/login/index.tsx`）为例：

```typescript
function Login() {
  ...
  ...
}

// title 在应用运行时，会被 src/locales/ 下对应语言文件里的内容替换
Login.title = 'LOGIN_TITLE'
Login.layout = 'BLANK'

export default Login
```

请看：

<img :src="$withBase('/locale.gif')" alt="locale">
