import router from 'umi/router'
import { isString } from './object'

export function inViewport(elem) {
  if (!elem || !elem.getBoundingClientRect) {
    return false
  }

  const rect = elem.getBoundingClientRect()
  // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0

  return vertInView && horInView
}

export function destoryGlobalSpinner() {
  const splash = document.querySelector('#splash-spinner')
  const spinner = document.querySelector('.spinner')
  if (splash) {
    document.head.removeChild(splash)
  }
  if (spinner) {
    spinner.parentNode.removeChild(spinner)
  }
}

export function redirectTo(to, from) {
  if (isString(to) || isString(from)) {
    if (!from) {
      return router.push(to)
    }
    return router.push({
      pathname: to,
      query: {
        from
      }
    })
  }
  // to为完整的RouteData
  return router.push(to)
}

export function goBack() {
  return router.goBack()
}
