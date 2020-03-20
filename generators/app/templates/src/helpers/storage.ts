import cookies from 'js-cookie'
import { STORAGE_DOMAIN } from '@/config'

const threeHours = new Date(new Date().getTime() + 60 * 3 * 60 * 1000)

const SHORT_TOKEN_COOKIE_OPTS = {
  expires: threeHours, // 3 hours
  domain: STORAGE_DOMAIN,
  path: '/'
}

const DEFAULT_COOKIE_OPTS = {
  expires: 30, // 30 days
  domain: STORAGE_DOMAIN,
  path: '/'
}

const REMEMBER_ME_KEY = 'REMEMBER_ME'
const TOKEN_KEY = 'APP_TOKEN'

export function clearAll() {
  Object.keys(cookies.get()).forEach(name => {
    cookies.remove(name, SHORT_TOKEN_COOKIE_OPTS)
    cookies.remove(name, DEFAULT_COOKIE_OPTS)
  })
  sessionStorage.clear()
  localStorage.clear()
}

export function setToken(value: string, willRememberme: boolean = false) {
  if (willRememberme) {
    return cookies.set(TOKEN_KEY, value, DEFAULT_COOKIE_OPTS)
  }
  return cookies.set(TOKEN_KEY, value, SHORT_TOKEN_COOKIE_OPTS)
}

export function getToken() {
  return cookies.get(TOKEN_KEY)
}

export function setRememberme(willRememberme: boolean) {
  if (willRememberme) {
    return cookies.set(REMEMBER_ME_KEY, '1', DEFAULT_COOKIE_OPTS)
  }
  return cookies.remove(REMEMBER_ME_KEY, DEFAULT_COOKIE_OPTS)
}

export function getRememberme() {
  return cookies.get(REMEMBER_ME_KEY)
}
