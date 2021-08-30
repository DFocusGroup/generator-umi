import { useCallback } from 'react'
import { useRequest, request } from 'umi'
import { PaginatedParams } from 'ahooks/lib/useAntdTable'

import { isNotEmpty, isEmpty } from '@/helpers'
import { IRawContacts, IContacts, IAntdTableFilters, IAntdTableSorter, IUmiRequestResult, IPagination } from '@/types'

export default function useUserManagementModel() {
  const { run: addContacts, loading: addContactsRunning } = useRequest(
    (user: IRawContacts) => ({
      url: '/apis/contacts',
      method: 'post',
      data: user,
    }),
    {
      manual: true,
    }
  )

  const { run: deleteContacts, loading: deleteContactsRunning } = useRequest(
    (id: number) => ({
      url: `/apis/contacts/${id}`,
      method: 'delete',
    }),
    {
      manual: true,
    }
  )

  const { run: updateContacts, loading: updateContactsRunning } = useRequest(
    (contacts: IContacts) => ({
      url: `/apis/contacts/${contacts.id}`,
      method: 'put',
      data: contacts,
    }),
    {
      manual: true,
    }
  )

  const fetchContacts = useCallback(({ current, pageSize, sorter, filters }: PaginatedParams[0]) => {
    let query = `page=${current}&size=${pageSize}`

    if (isNotEmpty<IAntdTableFilters>(filters)) {
      query = Object.keys(filters).reduce((prev, cur) => {
        const val = filters[cur]
        if (isEmpty(val)) {
          return prev
        }
        return `${prev}&${cur}=${filters[cur][0]}`
      }, query)
    }

    if (isNotEmpty<IAntdTableSorter>(sorter) && isNotEmpty<string>(sorter.field) && isNotEmpty<string>(sorter.order)) {
      query = `${query}&sortField=${sorter.field}&sortOrder=${sorter.order}`
    }

    return request(`/apis/contacts?${query}`).then((res: IUmiRequestResult<IPagination<IContacts>>) => {
      if (isNotEmpty<IPagination<IContacts>>(res.data)) {
        return {
          total: res.data.totalPage,
          list: res.data.list,
        }
      }
      return {
        total: 0,
        list: [],
      }
    })
  }, [])

  return {
    addContacts,
    addContactsRunning,
    deleteContacts,
    deleteContactsRunning,
    updateContacts,
    updateContactsRunning,
    fetchContacts,
  }
}
