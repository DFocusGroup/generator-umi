import {
  IResponseStructure,
  IRawContact,
  IContact,
  IPagination,
} from '@/types';
import { request } from '@umijs/max';

export async function addContact(
  form: IRawContact,
): Promise<IResponseStructure<IContact>> {
  return request('/contacts', {
    method: 'POST',
    data: form,
  });
}

export async function deleteContatct(
  id: string,
): Promise<IResponseStructure<IContact>> {
  return request(`/contacts/${id}`, {
    method: 'delete',
  });
}

export async function updateContatct(
  contact: IContact,
): Promise<IResponseStructure<IContact>> {
  return request(`/contacts/${contact.id}`, {
    method: 'put',
    data: contact,
  });
}

export async function searchContatct(
  query: string,
): Promise<IResponseStructure<IPagination<IContact>>> {
  return request(`/contacts?${query}`, {
    method: 'get',
  });
}
