import { OPEN_PAGES } from '../config'

export const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev'
export const isProduction = process.env.NODE_ENV === 'production'

export function isOpenPages(pathname) {
  return OPEN_PAGES.some(p => pathname === p)
}
