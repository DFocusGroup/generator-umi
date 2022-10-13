import { defineConfig } from '@umijs/max'
import routes from './routes'

export default defineConfig({
  antd: {
    import: true,
    style: 'css',
    dark: false,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  npmClient: 'pnpm',
  tailwindcss: {},
  locale: {
    default: 'zh-CN',
    title: false,
    useLocalStorage: true,
  },
  mock: {
    exclude: ['mock/**/_*.[jt]s', 'mock/**/_*/**'],
  },
  conventionRoutes: {
    exclude: [/\/components\//, /\/models\//],
  },
  routes,
  mfsu: {},
})
