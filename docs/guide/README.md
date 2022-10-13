# 项目介绍

本脚手架使用了 [umi@4](https://umijs.org) + [typescript](http://www.typescriptlang.org)， 以及 [antd@4](https://ant.design)。对这三样完全不熟悉的朋友，强烈建议先做了解之后再来。（再见）

其次，本脚手架使用 [@umijs/max](https://umijs.org/docs/max/introduce)，快速得到企业中台项目需要的基本功能，如： 权限控制、统一数据流管理、统一状态管理、多语言和 [antd](https://ant.design/components/table/#components-table-demo-reset-filter) 配置。

所以对上述使用到的插件不熟悉的朋友，也需要先了解 [@umijs/max](https://umijs.org/docs/max/introduce) 之后再往下看，再见。

接下来，就是介绍脚手架的部分了。首先介绍下项目结构：

    .
    ├── config/
    ├── mock/
    ├── public/
    ├── src
    │   ├── components
    │   ├── constants
    │   ├── layouts
    │   ├── locales
    │   ├── models
    │   ├── pages
    │   ├── services
    │   ├── types
    │   ├── utils
    │   ├── access.ts
    │   └── app.ts
    │
    ├── package.json
    ├── tailwind.config.js
    ├── tailwind.css
    ├── tsconfig.json
    └── typings.d.ts

## 项目结构介绍

### package.json

没什么好说的，依赖管理

### tsconfig.json

希望使用 `typescript` 编码的核心配置文件，勿动（除非你知道自己在干嘛）。

### typings.d.ts

希望在 `.ts`、`.tsx` 模块中，引入`.css`、`.less`、`.png`、`.jpg` 而不产生语法错误的核心配置文件，勿动（除非你知道自己在干嘛）。

### config 目录

`umi` 配置文件支持 `<root>/.umirc.ts` 或者 `<root>/config/config.ts` 二选一（共存时，仅 `.umitc.ts` 有效）。

我们脚手架里采用了 `<root>/config/config.ts` 形式

### mock 目录

存储 `mock` 文件，此目录下所有 `.ts` 文件会被解析为 `mock` 文件。

### public 目录

此目录下所有文件会被 `copy` 到输出路径。

### `src` 目录

应用源码，都在这里了。


下面介绍应用启动，即，浏览器打开 `URL`, 回车敲下后，源码的运行大致流程（方便开发者阅读理解，及后续扩展变更）。

程序代码执行路径大致如下：

<img :src="$withBase('/callchain.png')" alt="call chain">

## 特性列表

- [路由](/guide/route.html)
- [布局](/guide/layout.html)
- [国际化](/guide/locale.html)
- [数据](/guide/data.html)
