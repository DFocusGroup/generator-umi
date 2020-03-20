import { defineConfig } from 'umi'

import theme from './theme'

export default defineConfig({
  hash: true,
  mock: {
    exclude: ['mock/**/_*.[jt]s']
  },
  antd: {},
  theme,
  locale: {
    antd: true,
    title: true
  }
})
