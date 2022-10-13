import { IUser, IResponseStructure, ILoginForm, ILoginResult } from '@/types';
import { request } from '@umijs/max';

export async function doLogin(
  form: ILoginForm,
): Promise<IResponseStructure<ILoginResult>> {
  return request('/login', {
    method: 'POST',
    data: form,
  });
}

export async function getCurrentUser(): Promise<IResponseStructure<IUser>> {
  return request('/user', {
    method: 'GET',
  });
}
