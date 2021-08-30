import { Request } from 'umi'
import ResponseError from './ResponseError'

export enum ContactsStatus {
  INITIAL = 'INITIAL',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
}

export interface IRawContacts {
  name: string
  team: string
  email: string
  status: ContactsStatus
}

interface IContacts extends IRawContacts {
  id: number
}

interface IQuery {
  page: number
  size: number
  name?: string
  team?: string
  status?: ContactsStatus
  email?: string
  sortField?: keyof IRawContacts
  sortOrder?: 'ascend' | 'descend'
}

interface IPagination {
  page: number
  size: number
  totalPage: number
  list: IContacts[]
}

function filterByStringField(list: any[], field: string, value: string) {
  return list.filter((l) => l[field].toLowerCase().includes(value.toLowerCase()))
}

function toPagination(result: any[], page: number, size: number): IPagination {
  const list = result.slice((page - 1) * size, page * size)

  return {
    page,
    size,
    totalPage: Math.ceil(result.length / size),
    list,
  }
}

class ContactsStore {
  contacts: IContacts[] = []

  async findPaginationContactsByQuery(query: IQuery, req: Request) {
    const result = (Object.keys(query) as (keyof IQuery)[])
      .filter((k) => !['page', 'size', 'sortField', 'sortOrder'].includes(k))
      .reduce((prev, cur) => {
        if (!query[cur]) {
          return prev
        }
        return filterByStringField(prev, cur, query[cur] as string)
      }, this.contacts)

    if (query.sortField && query.sortOrder) {
      result.sort((a, b) => {
        if (a[query.sortField!] === b[query.sortField!]) {
          return 0
        }
        if (query.sortOrder === 'ascend') {
          return a[query.sortField!].localeCompare(b[query.sortField!])
        }
        return b[query.sortField!].localeCompare(a[query.sortField!])
      })
    }

    return toPagination(result, query.page, query.size)
  }

  async findContactsById(id: number, req: Request) {
    return this.contacts.find((user) => user.id === id)
  }

  async findContactsByName(name: string, req: Request) {
    return this.contacts.find((user) => user.name === name)
  }

  async findContactsByEmail(email: string, req: Request) {
    return this.contacts.find((user) => user.email === email)
  }

  async saveContacts(user: IRawContacts, req: Request) {
    const foundUser = await this.findContactsByName(user.name, req)
    if (foundUser) {
      throw new ResponseError(409, 'user name exists')
    }
    const foundUser2 = await this.findContactsByEmail(user.email, req)
    if (foundUser2) {
      throw new ResponseError(409, 'user email exists')
    }

    const newUser: IContacts = {
      ...user,
      id: new Date().getTime(),
    }

    this.contacts.push(newUser)

    return newUser
  }

  async updateContacts(contacts: IContacts, req: Request) {
    const foundContacts = await this.findContactsById(contacts.id, req)
    if (!foundContacts) {
      throw new ResponseError(410, 'contacts not exist')
    }
    this.contacts = this.contacts.map((u) => {
      if (u.id === contacts.id) {
        return contacts
      }
      return u
    })

    return contacts
  }

  async deleteContacts(id: number, req: Request) {
    const foundContacts = await this.findContactsById(id, req)
    if (!foundContacts) {
      throw new ResponseError(410, 'contacts not exist')
    }
    this.contacts = this.contacts.filter((u) => u.id !== id)

    return foundContacts
  }
}

export const store = new ContactsStore()
