export const FAKE_ADMIN_TOKEN = 'oijhdvkdsiiopwejr3209jds'
export const FAKE_HANMEIMEI_TOKEN = 'knfhsdop09923jds;kmnsdf'

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
