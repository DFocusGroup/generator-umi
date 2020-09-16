# 主题

脚手架使用 [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) 来提供动态主题切换功能。

首先，多主题由 `config/theme.config.json` 定义，内容如下：

```json
{
  "theme": [
    {
      "fileName": "dust.css",
      "modifyVars": {
        "@primary-color": "#F5222D"
      }
    },
    {
      "fileName": "cyan.css",
      "modifyVars": {
        "@primary-color": "#13C2C2"
      }
    }
  ],
  "min": false,
  "isModule": true,
  "ignoreAntd": false,
  "ignoreProLayout": false,
  "cache": false
}
```

其中：

`fileName` 是每个主题最终输出的文件名，请务必保持命名通俗易懂，如上述所示，文件名去掉 `.css`，就是主题名。

`modifyVars` 就是 `antd` 的 less 变量，同 [theme](https://umijs.org/config#theme)。

## application-level 定制

你也可以通过在 `src/global.less` 中定义应用级别的 主题 变量，如下：

```less
// 默认主题
body {
  --title-color: #4f4f4f;
}

// 主题 dust
body.body-wrap-dust {
  --title-color: #8f1256;
}

// 主题 cyan
body.body-wrap-cyan {
  --title-color: #5cdc5a;
}
```

然后，通过如下方式(`var(定义好的变量)`)，在你的组件中，引用定义在 `src/global.less` 中变量就可以了:

```less
.desc {
  color: var(--title-color);
}
```
