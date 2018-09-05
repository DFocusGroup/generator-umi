export function inViewPort(elem) {
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

export function addGlobalSpinnerStyle() {
  const splash = document.querySelector('#splash-spinner')
  if (splash) {
    return
  }
  const style = document.createElement('style')
  style.id = 'splash-spinner'
  /* eslint-disable-next-line  */
  style.innerHTML = `.spinner {position: fixed;border: 4px solid #f3f3f3;border-top: 4px solid #3498db;border-radius: 50%;top: 40%;left: 50%;margin-left: -22.5px;width: 45px;height: 45px;animation: spin 1s linear infinite;} @keyframes spin {0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}`

  document.head.appendChild(style)
}
