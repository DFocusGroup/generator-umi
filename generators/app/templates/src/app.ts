import { RequestConfig } from '@umijs/max';
import { API_HOST, destoryGlobalSpinner } from '@/utils';
import { USER_TOKEN_KEY } from '@/constants';
import { IInvalidInitState, IUser } from '@/types';
import { getCurrentUser } from '@/services';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
// IInvalidInitState will be handled in layout
export async function getInitialState(): Promise<IInvalidInitState | IUser> {
  destoryGlobalSpinner();

  if (!localStorage.getItem(USER_TOKEN_KEY)) {
    return 'LOGIN_REQUIRED';
  }

  try {
    const res = await getCurrentUser();
    if (!res.data) {
      return 'LOGIN_REQUIRED';
    }
    return res.data;
  } catch (error) {
    return 'LOGIN_REQUIRED';
  }
}

// powered by https://umijs.org/plugins/plugin-request
// have token specifid in custom header
export const request: RequestConfig = {
  baseURL: API_HOST,
  requestInterceptors: [
    (url, options) => {
      const token = localStorage.getItem(USER_TOKEN_KEY);
      if (!token) {
        return { url, options };
      }
      const headers = options.headers || {};
      headers.Authorization = JSON.parse(token);
      return { url, options: { ...options, headers } };
    },
  ],
  responseInterceptors: [
    (response) => {
      const { data } = response;
      // @ts-ignore
      if (!data.success) {
        // @ts-ignore
        throw new Error(data.errorMessage);
      }
      return response;
    },
  ],
};
