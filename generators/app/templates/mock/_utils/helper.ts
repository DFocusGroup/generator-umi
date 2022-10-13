import { IResponseStructure } from '../../src/types';

export function success(data: any): IResponseStructure<any> {
  return {
    success: true,
    data,
    errorCode: undefined,
    errorMessage: undefined,
    showType: undefined,
  };
}

export function failure(
  result: Pick<
    IResponseStructure<any>,
    'errorCode' | 'errorMessage' | 'showType'
  >,
): IResponseStructure<any> {
  const { errorCode, errorMessage, showType } = result;

  return {
    data: undefined,
    success: false,
    errorCode,
    errorMessage,
    showType,
  };
}

export function parseCookie(cookies?: string) {
  if (!cookies) {
    return {};
  }
  return cookies
    .split(';')
    .map((v) => v.split('='))
    .reduce<{ [key: string]: string }>((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
}
