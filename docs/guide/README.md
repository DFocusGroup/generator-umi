# 项目介绍

本脚手架使用了 [umi@3](https://umijs.org) + [typescript](http://www.typescriptlang.org)， 以及 [antd@4](https://ant.design)。对这三样完全不熟悉的朋友，强烈建议先做了解之后再来。（再见）

接下来，就是介绍脚手架的部分了。首先介绍下项目结构：

    .
    ├── config/
    ├── mock/
    ├── public/
    ├── server/
    ├── shells/
    ├── src
    │   ├── access.ts
    │   ├── app.ts
    │   └── serve.package.json
    ├── Dockerfile
    ├── package.json
    ├── tsconfig.json
    └── typings.d.ts

## 项目结构介绍

### Dockerfile

希望打包成 `docker` 镜像时使用。

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

存储 `mock` 文件，此目录下所有 `.js` 和 `.ts` 文件会被解析为 `mock` 文件。

### public 目录

此目录下所有文件会被 `copy` 到输出路径。

### server 目录

脚手架内置的服务启动脚本(`express` + `replace-in-file`)，为打包后的内容提供直接启用支持，无需外部再配置 `nginx` 或其他 web 容器。

并且在 `docker` 镜像方式里，支持容器启动 + 环境变量修改部分配置。（这种方式在一个包，需要不同配置运行在不同环境里非常好用，无需为不同环境打不同的包）。

### shells 目录

打包、运行脚本。

- `build.sh`：打包（`.zip`、`docker`均使用它）
- `git.sh`：本地 `git` 环境配置命令集合（配置当前仓库的 用户名、邮箱、`git` 别名等）
- `stop.sh`：`.zip` 包的专用停止服务脚本，

### `src` 目录

应用源码，都在这里了。

> `serve.package.json` 切记勿删，这个是打包时的必需品。

下面介绍应用启动，即，浏览器打开 `URL`, 回车敲下后，源码的运行大致流程（方便开发者阅读理解，及后续扩展变更）。

程序代码执行路径大致如下：

<img :src="$withBase('/data-flow.png')" alt="DataFlow">

## 特性列表

- [路由](/guide/route.html)
- [布局](/guide/layout.html)
- [国际化](/guide/locale.html)
- [数据](/guide/data.html)
- [打包](/guide/packaging.html)
