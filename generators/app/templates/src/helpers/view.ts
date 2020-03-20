import { clearAll } from '@/helpers/storage'

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
  if (location.pathname === '/o/login' || !needRedirectBack) {
    location.href = '/o/login'
    return
  }
  location.href = `/o/login?redirectTo=${location.pathname}`
}
