export enum ContactsStatus {
  INITIAL = 'INITIAL',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
}

export interface IContact extends IRawContact {
  id: number;
}

export interface IRawContact {
  name: string;
  email: string;
  team: string;
  status: ContactsStatus;
}
