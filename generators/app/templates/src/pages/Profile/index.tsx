import React from 'react'
import { useModel } from 'umi'
import { Card } from 'antd'
import { IUser, IPageComponent, IPageComponentProps } from '@/types'

import styles from './index.less'

const Profile: IPageComponent = (props: IPageComponentProps) => {
  // @ts-ignore
  const { initialState }: { initialState: IUser } = useModel('@@initialState')

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card hoverable style={{ width: 240 }} cover={<img alt="avatar" src={initialState.avatar} />}>
        <Card.Meta
          title={initialState.name}
          description={
            <span className={styles.desc}>
              <div>{initialState.email}</div>
              <div>
                {initialState.team} - {initialState.phone}
              </div>
            </span>
          }
        />
      </Card>
    </div>
  )
}

Profile.title = 'PROFILE_TITLE'
Profile.layout = 'PRO_LAYOUT'
Profile.requireSignin = true

export default Profile
