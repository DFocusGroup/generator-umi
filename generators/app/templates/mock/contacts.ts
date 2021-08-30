import { Request, Response } from 'umi'
import { success, failure, SHOW_TYPE } from './_utils/helper'
import ResponseError from './_utils/ResponseError'
import { store, ContactsStatus, IRawContacts } from './_utils/ContactsStore'

export default {
  'get /apis/contacts': async function (req: Request, res: Response) {
    const { page, size, name, team, status, email, sortField, sortOrder } = req.query

    const contactsQuery = {
      page: Number(page),
      size: Number(size),
      name: (name as string) || undefined,
      team: (team as string) || undefined,
      status: (status as ContactsStatus) || undefined,
      email: (email as string) || undefined,
      sortField: (sortField as keyof IRawContacts) || undefined,
      sortOrder: (sortOrder as 'ascend' | 'descend') || undefined,
    }

    const contacts = await store.findPaginationContactsByQuery(contactsQuery, req)

    return res.json(success(contacts))
  },

  'post /apis/contacts': async function (req: Request, res: Response) {
    const { name, team, status, email } = req.body

    try {
      const savedContacts = await store.saveContacts(
        {
          name,
          team,
          status,
          email,
        },
        req
      )
      return res.json(success(savedContacts))
    } catch (error) {
      const err = error as ResponseError
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: SHOW_TYPE.WARN_MESSAGE,
        })
      )
    }
  },

  'put /apis/contacts/:id': async function (req: Request, res: Response) {
    const { id } = req.params
    const { name, team, status, email } = req.body

    try {
      const savedContacts = await store.updateContacts(
        {
          id: Number(id),
          name,
          team,
          status,
          email,
        },
        req
      )
      return res.json(success(savedContacts))
    } catch (error) {
      const err = error as ResponseError
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: SHOW_TYPE.WARN_MESSAGE,
        })
      )
    }
  },

  'delete /apis/contacts/:id': async function (req: Request, res: Response) {
    const { id } = req.params

    try {
      const deletedContacts = await store.deleteContacts(Number(id), req)
      return res.json(success(deletedContacts))
    } catch (error) {
      const err = error as ResponseError
      return res.json(
        failure({
          errorCode: err.code,
          errorMessage: err.message,
          showType: SHOW_TYPE.WARN_MESSAGE,
        })
      )
    }
  },
}
