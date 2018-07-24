export default class PageNotFoundError extends Error {
  constructor(path, message) {
    super(message)

    this.path = path

    this.type = 'PAGE_NOT_FOUND_ERROR'

    this.name = this.constructor.name
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = new Error(message).stack
    }
  }
}
