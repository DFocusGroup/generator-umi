import { Request } from 'umi'
import ResponseError from './ResponseError'

export const FAKE_ADMIN_TOKEN = 'oijhdvkdsiiopwejr3209jds'
export const FAKE_HANMEIMEI_TOKEN = 'knfhsdop09923jds;kmnsdf'

const ADMIN_PERMISSIONS = ['VIEW_DASHBOARD_ANALYSIS', 'VIEW_DASHBOARD_MONITOR', 'VIEW_ADMIN_USER_MANAGEMENT']
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const USER_PERMISSIONS = ['VIEW_DASHBOARD_ANALYSIS', 'VIEW_DASHBOARD_MONITOR']

export const UserAdmin: IUser = {
  id: 1,
  name: 'Admin',
  email: 'admin@gmail.com',
  team: 'IT Support',
  avatar: '/admin_avatar.png',
  phone: '13795227864',
  permissions: ADMIN_PERMISSIONS
}

export const UserHanMeiMei: IUser = {
  id: 1,
  name: 'Meimei.Han',
  email: 'meimei.han@gmail.com',
  team: 'Human Resource',
  avatar: '/meimei_avatar.png',
  phone: '15618822986',
  permissions: USER_PERMISSIONS
}

interface IUser {
  id: number
  name: string
  email: string
  team: string
  phone: string
  avatar: string
  permissions?: string[]
}
