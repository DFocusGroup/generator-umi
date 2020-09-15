import React from 'react'

import { IPageComponent, IPageComponentProps } from '@/types'

const Users: IPageComponent = (props: IPageComponentProps) => {
  return <div>User management</div>
}

Users.title = 'USERS_TITLE'
Users.layout = 'PRO_LAYOUT'
Users.requireSignin = true
Users.access = 'canReadAdminUserManagement'

export default Users
