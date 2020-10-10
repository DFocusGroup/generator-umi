import { Request } from 'umi'
import ResponseError from './ResponseError'
import LdapService from './LdapService'

export enum UserStatus {
  INITIAL = 'INITIAL',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED'
}

export interface IRawUser {
  name: string
  team: string
  email: string
  status: UserStatus
}

interface IUser extends IRawUser {
  id: number
}

interface IQuery {
  page: number
  size: number
  name?: string
  team?: string
  status?: UserStatus
  email?: string
  sortField?: keyof IRawUser
  sortOrder?: 'ascend' | 'descend'
}

interface IPagination {
  page: number
  size: number
  totalPage: number
  list: IUser[]
}

function filterByStringField(list: any[], field: string, value: string) {
  return list.filter(l => l[field].toLowerCase().includes(value.toLowerCase()))
}

function toPagination(result: any[], page: number, size: number): IPagination {
  const list = result.slice((page - 1) * size, page * size)

  return {
    page,
    size,
    totalPage: Math.ceil(result.length / size),
    list
  }
}

class UserStore {
  users: IUser[] = []

  private async toUsers(req: Request): Promise<IUser[]> {
    const currentUser = await LdapService.getCurrentUser(req)
    return [
      {
        id: 100001,
        name: currentUser.name,
        team: currentUser.team,
        email: currentUser.email,
        status: UserStatus.ACTIVE
      }
    ].concat(this.users)
  }

  async findPaginationUsersByQuery(query: IQuery, req: Request): Promise<IPagination> {
    return new Promise(resolve => {
      setTimeout(async () => {
        const users = await this.toUsers(req)

        const result = (Object.keys(query) as (keyof IQuery)[])
          .filter(k => !['page', 'size', 'sortField', 'sortOrder'].includes(k))
          .reduce((prev, cur) => {
            if (!query[cur]) {
              return prev
            }
            return filterByStringField(prev, cur, query[cur] as string)
          }, users)

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

        resolve(toPagination(result, query.page, query.size))
      }, 500)
    })
  }

  async findUserById(id: number, req: Request) {
    const users = await this.toUsers(req)
    return users.find(user => user.id === id)
  }

  async findUserByName(name: string, req: Request) {
    const users = await this.toUsers(req)
    return users.find(user => user.name === name)
  }

  async saveUser(user: IRawUser, req: Request) {
    const foundUser = await this.findUserByName(user.name, req)
    if (foundUser) {
      throw new ResponseError(409, 'user name exists')
    }

    const newUser: IUser = {
      ...user,
      id: new Date().getTime()
    }

    this.users.push(newUser)

    return newUser
  }

  async updateUser(user: IUser, req: Request) {
    const foundUser = await this.findUserById(user.id, req)
    if (!foundUser) {
      throw new ResponseError(410, 'user not exist')
    }
    this.users = this.users.map(u => {
      if (u.id === user.id) {
        return user
      }
      return u
    })

    return user
  }

  async deleteUser(id: number, req: Request) {
    const foundUser = await this.findUserById(id, req)
    if (!foundUser) {
      throw new ResponseError(410, 'user not exist')
    }
    this.users = this.users.filter(u => u.id !== id)

    return foundUser
  }
}

export default new UserStore()
