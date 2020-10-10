export interface IPagination<T> {
  page: number
  size: number
  totalPage: number
  list: T[]
}

export enum SHOW_TYPE {
  SILENT = 0, // don't notify user
  WARN_MESSAGE = 1, // give user warning tips
  ERROR_MESSAGE = 2, // give user error tips
  NOTIFICATION = 4, // give user notification
  REDIRECT = 9 // page redirect
}

export interface IUmiRequestResult<T> {
  success: boolean
  data?: T
  errorCode?: number
  errorMessage?: string
  showType?: SHOW_TYPE
  traceId?: string
  host?: string
}

export interface IAntdTableFilters {
  [key: string]: string[]
}

export interface IAntdTableSorter {
  columnKey: string
  field: string
  order: 'ascend' | 'descend'
}
