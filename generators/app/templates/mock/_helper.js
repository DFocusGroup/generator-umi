export const FAKE_TOKEN = 'oijhdvkdsiiopwejr3209jds'

export const SHOW_TYPE = {
  SILENT: 0, // don't notify user
  WARN_MESSAGE: 1, // give user warning tips
  ERROR_MESSAGE: 2, // give user error tips
  NOTIFICATION: 4, // give user notification
  REDIRECT: 9 // page redirect
}

export function success(data) {
  return {
    success: true,
    data,
    errorCode: undefined,
    errorMessage: undefined,
    showType: undefined,
    traceId: undefined,
    host: undefined
  }
}

/**
 * ResponseInfoStructure
 * @typedef {Object} ResponseInfoStructure
 * @property {number} errorCode
 * @property {string} errorMessage
 * @property {0 | 1 | 2 | 4 | 9} showType
 * @property {string} traceId
 * @property {string} host
 */

/**
 *
 * @param {ResponseInfoStructure} data
 */
export function failure(data) {
  const { errorCode, errorMessage, showType, traceId, host } = data
  return {
    data: undefined,
    success: false,
    errorCode,
    errorMessage,
    showType,
    traceId,
    host
  }
}
