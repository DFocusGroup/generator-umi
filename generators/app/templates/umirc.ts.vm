import { IConfig } from 'umi-types'

export default {
  hash: true,
  theme: './src/themes/index.js',
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: false,
        antd: true,
        routes: {
          exclude: [/model\.(j|t)sx?$/, /service\.(j|t)sx?$/, /hooks\//, /components\//, /services\//, /helpers\//]
        },
        locale: {
          default: 'zh-CN',
          baseNavigator: true,
          antd: true
        },
        library: 'react',
        dynamicImport: {
          webpackChunkName: true,
          level: 2
        },
        title: {
          defaultTitle: 'test-umi',
          useLocale: true
        },
        pwa: false,
        hd: false,
        fastClick: false
      }
    ]
  ]
} as IConfig
