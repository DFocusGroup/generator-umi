interface Window {
  [index: string]: any
}
declare var window: Window

enum status {
  INIT,
  LOADED,
  LOADING
}

export function loadScript(url: string, nameOnWindow?: string) {
  return new Promise<any>((resolve, reject) => {
    if (!window[url]) {
      window[url] = { status: status.INIT, callbacks: [] }
    }
    if (window[url].status === status.LOADED) {
      return resolve(nameOnWindow ? window[nameOnWindow] : undefined)
    }

    if (window[url].status === status.LOADING) {
      return window[url].callbacks.push(() => {
        resolve(nameOnWindow ? window[nameOnWindow] : undefined)
      })
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onerror = err => {
      document.body.removeChild(script)
      reject(err)
    }
    script.onload = () => {
      window[url].status = status.LOADED
      window[url].callbacks.forEach((cb: Function) => cb())
      window[url].callbacks = []

      resolve(nameOnWindow ? window[nameOnWindow] : undefined)
    }
    document.body.appendChild(script)
  })
}
