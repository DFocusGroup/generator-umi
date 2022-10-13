export interface IPagination<T> {
  page: number;
  size: number;
  total: number;
  list: T[];
}

export enum ErrorShowType {
  SILENT = 0, // don't notify user
  WARN_MESSAGE = 1, // give user warning tips
  ERROR_MESSAGE = 2, // give user error tips
  NOTIFICATION = 4, // give user notification
  REDIRECT = 9, // page redirect
}

export interface IResponseStructure<T> {
  success: boolean;
  data: T;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

export interface IAntdTableFilters {
  [key: string]: string;
}

export type IAntdTableSorterOrder = 'ascend' | 'descend';

export interface IAntdTableSorter {
  sortField?: string;
  sortOrder?: IAntdTableSorterOrder;
}
