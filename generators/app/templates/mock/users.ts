import { Request, Response } from 'umi'
import { success, failure, SHOW_TYPE } from './_utils/helper'
import ResponseError from './_utils/ResponseError'
import UserStore, { UserStatus, IRawUser } from './_utils/UserStore'
import LdapService from './_utils/LdapService'

export default {
  'get /apis/users': async function(req: Request, res: Response) {
    const { page, size, name, team, status, email, sortField, sortOrder } = req.query

    const userQuery = {
      page: Number(page),
      size: Number(size),
      name: (name as string) || undefined,
      team: (team as string) || undefined,
      status: (status as UserStatus) || undefined,
      email: (email as string) || undefined,
      sortField: (sortField as keyof IRawUser) || undefined,
      sortOrder: (sortOrder as 'ascend' | 'descend') || undefined
    }

    const users = await UserStore.findPaginationUsersByQuery(userQuery, req)

    return res.json(success(users))
  },

  'get /apis/ldapusers': async function(req: Request, res: Response) {
    const { name } = req.query

    const ldapUsers = await LdapService.searchUsersByName(name as string)

    return res.json(
      success(
        ldapUsers.map(l => ({
          name: l.name,
          email: l.email,
          team: l.team,
          status: UserStatus.INITIAL
        }))
      )
    )
  },

  'post /apis/users': async function(req: Request, res: Response) {
    const { name, team, status, email } = req.body

    try {
      const savedUser = await UserStore.saveUser(
        {
          name,
          team,
          status,
          email
        },
        req
      )
      return res.json(success(savedUser))
    } catch (error) {
      const err = error as ResponseError
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: SHOW_TYPE.WARN_MESSAGE
        })
      )
    }
  },

  'put /apis/users/:id': async function(req: Request, res: Response) {
    const { id } = req.params
    const { name, team, status, email } = req.body

    try {
      const savedUser = await UserStore.updateUser(
        {
          id: Number(id),
          name,
          team,
          status,
          email
        },
        req
      )
      return res.json(success(savedUser))
    } catch (error) {
      const err = error as ResponseError
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: SHOW_TYPE.WARN_MESSAGE
        })
      )
    }
  },

  'delete /apis/users/:id': async function(req: Request, res: Response) {
    const { id } = req.params

    try {
      const deletedUser = await UserStore.deleteUser(Number(id), req)
      return res.json(success(deletedUser))
    } catch (error) {
      const err = error as ResponseError
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: SHOW_TYPE.WARN_MESSAGE
        })
      )
    }
  }
}
