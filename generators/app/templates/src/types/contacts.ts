export enum ContactsStatus {
  INITIAL = 'INITIAL',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED'
}

export interface IContacts extends IRawContacts {
  id: number
}

export interface IRawContacts {
  name: string
  email: string
  team: string
  status: ContactsStatus
}
