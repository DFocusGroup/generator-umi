---
home: true
heroText: umi 中台 助手
tagline: 快速构建一个中台系统所需的基础元素
actionText: 新手上路 →
actionLink: /guide/
features:
  - title: 布局管理
    details: 轻松实现自己的布局
  - title: 权限路由
    details: 内置和用户数据打通的权限系统可以针对路由做控制，并且内置无权限展示组件
  - title: 国际化
    details: 便捷的多语言切换功能
  - title: 数据管理
    details: 不同于 redux 的数据管理体验，让 hooks 带你high个够
  - title: mfsu 开启
    details: 默认开启 `mfsu` ，编译速度飙升，耗时仅为不开启时的 1/20 ~ 1/5。
footer: MIT Licensed | Copyright © 2020-present Howard.Zuo
---

[![NPM Version][npm-image]][npm-url]
![][david-url]
![][dt-url]
[![code style: prettier][prettier-image]][prettier-url]
![][license-url]

<div id="github">
  <iframe
    src="https://ghbtns.com/github-btn.html?user=DFocusGroup&repo=generator-umi&type=star&count=true"
    frameborder="0"
    width="100"
    height="20"
  >
  </iframe>
  <iframe
    src="https://ghbtns.com/github-btn.html?user=DFocusGroup&repo=generator-umi&type=fork&count=true"
    frameborder="0"
    width="100"
    height="20"
  >
  </iframe>
</div>

`generator-umi` 让中台业务开发更顺滑，更简单，并且保留扩展(变更)的能力。

## 快速开始

安装 umi 中台 助手

```bash
yarn global add yo generator-umi
```

然后，利用助手，创建一个 code base

<img :src="$withBase('/generator.gif')" alt="gen">

创建完毕，进入生成的项目，运行 `yarn start`, 能看到如下效果，就算成功了：

<img :src="$withBase('/demo.gif')" alt="demo">

## LICENSE

[MIT License](https://raw.githubusercontent.com/DFocusGroup/generator-umi/master/LICENSE)

[npm-url]: https://npmjs.org/package/generator-umi
[npm-image]: https://badge.fury.io/js/generator-umi.png
[david-url]: https://david-dm.org/DFocusGroup/generator-umi.png
[dt-url]: https://img.shields.io/npm/dt/generator-umi.svg
[license-url]: https://img.shields.io/github/license/DFocusGroup/generator-umi
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
