export interface ILdapUser {
  id: number
  name: string
  email: string
  team: string
  phone: string
  avatar: string
  permissions?: string[]
}

export enum UserStatus {
  INITIAL = 'INITIAL',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED'
}

export interface IUser extends IRawUser {
  id: number
}

export interface IRawUser {
  name: string
  email: string
  team: string
  status: UserStatus
}
