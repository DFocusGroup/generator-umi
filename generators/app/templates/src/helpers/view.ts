import { clearAll } from '@/helpers'

export function destoryGlobalSpinner() {
  const splash = document.querySelector('#splash-spinner')
  const spinner = document.querySelector('.spinner')
  if (splash) {
    document.head.removeChild(splash)
  }
  if (spinner && spinner.parentNode) {
    spinner.parentNode.removeChild(spinner)
  }
}

export function redirectToLogin(needRedirectBack: boolean) {
  clearAll()
  const { location } = window
  if (location.pathname === '/login' || !needRedirectBack) {
    location.href = '/login'
    return
  }
  location.href = `/login?redirectTo=${location.pathname}`
}
