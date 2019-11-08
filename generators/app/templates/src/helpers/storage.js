import cookies from 'js-cookie'
import { STORAGE_TOKEN_KEY, STORAGE_DOMAIN, STORAGE_EXPIRE_DAYS } from '@/config'

const DEFAULT_COOKIE_OPTS = {
  expires: STORAGE_EXPIRE_DAYS, // 49 days
  domain: STORAGE_DOMAIN,
  path: '/'
}

const twoHours = new Date(new Date().getTime() + 60 * 2 * 60 * 1000)

const SHORT_TERM_COOKIE_OPTS = {
  expires: twoHours, // 2 hours
  domain: STORAGE_DOMAIN,
  path: '/'
}

export function clearAll() {
  Object.keys(cookies.get()).forEach(name => {
    cookies.remove(name, DEFAULT_COOKIE_OPTS)
  })
  sessionStorage.clear()
  localStorage.clear()
}

export function setToken(value) {
  if (getDoNotRememberme()) {
    return cookies.set(STORAGE_TOKEN_KEY, value, SHORT_TERM_COOKIE_OPTS)
  }
  return cookies.set(STORAGE_TOKEN_KEY, value, DEFAULT_COOKIE_OPTS)
}

export function getToken() {
  return cookies.get(STORAGE_TOKEN_KEY)
}

export function setDoNotRememberme() {
  return cookies.set('donotrememberme', 'true', DEFAULT_COOKIE_OPTS)
}

export function getDoNotRememberme() {
  return cookies.get('donotrememberme')
}

export function removeDoNotRememberme() {
  return cookies.remove('donotrememberme')
}
