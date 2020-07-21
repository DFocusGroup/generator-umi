import { defineConfig } from 'umi'

export default defineConfig({
  hash: true,
  mock: {
    exclude: ['mock/**/_*.[jt]s']
  },
  antd: {},
  locale: {
    antd: true,
    title: true
  }
})
