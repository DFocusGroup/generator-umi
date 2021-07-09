import { useCallback } from 'react'
import { useRequest, request } from 'umi'
import { PaginatedParams } from 'ahooks/lib/useAntdTable'

import { isNotEmpty, isEmpty } from '@/helpers'
import { IRawUser, IUser, IAntdTableFilters, IAntdTableSorter, IUmiRequestResult, IPagination } from '@/types'

export default function useUserManagementModel() {
  const { run: addUser, loading: addUserRunning } = useRequest(
    (user: IRawUser) => ({
      url: '/apis/users',
      method: 'post',
      data: user
    }),
    {
      manual: true
    }
  )

  const { run: deleteUser, loading: deleteUserRunning } = useRequest(
    (id: number) => ({
      url: `/apis/users/${id}`,
      method: 'delete'
    }),
    {
      manual: true
    }
  )

  const { run: updateUser, loading: updateUserRunning } = useRequest(
    (user: IUser) => ({
      url: `/apis/users/${user.id}`,
      method: 'put',
      data: user
    }),
    {
      manual: true
    }
  )

  const fetchUsers = useCallback(({ current, pageSize, sorter, filters }: PaginatedParams[0]) => {
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

    return request(`/apis/users?${query}`).then((res: IUmiRequestResult<IPagination<IUser>>) => {
      if (isNotEmpty<IPagination<IUser>>(res.data)) {
        return {
          total: res.data.totalPage,
          list: res.data.list
        }
      }
      return {
        total: 0,
        list: []
      }
    })
  }, [])

  return {
    addUser,
    addUserRunning,
    deleteUser,
    deleteUserRunning,
    updateUser,
    updateUserRunning,
    fetchUsers
  }
}
