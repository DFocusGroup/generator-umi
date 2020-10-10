export enum SHOW_TYPE {
  SILENT = 0, // don't notify user
  WARN_MESSAGE = 1, // give user warning tips
  ERROR_MESSAGE = 2, // give user error tips
  NOTIFICATION = 4, // give user notification
  REDIRECT = 9 // page redirect
}

interface IResponseInfoStructure {
  success?: boolean
  data?: any
  errorCode?: number
  errorMessage?: string
  showType?: SHOW_TYPE
  traceId?: string
  host?: string
}

export function success(data: any): IResponseInfoStructure {
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

export function failure(result: IResponseInfoStructure): IResponseInfoStructure {
  const { success = false, data = undefined, errorCode, errorMessage, showType, traceId, host } = result
  return {
    data,
    success,
    errorCode,
    errorMessage,
    showType,
    traceId,
    host
  }
}

export function parseCookie(cookies?: string) {
  if (!cookies) {
    return {}
  }
  return cookies
    .split(';')
    .map(v => v.split('='))
    .reduce<{ [key: string]: string }>((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      return acc
    }, {})
}
