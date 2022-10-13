import React from 'react';
import { useModel } from '@umijs/max';
import { Card } from 'antd';
import { IUser } from '@/types';

const Profile: React.FC = () => {
  // @ts-ignore
  const { initialState }: { initialState: IUser } = useModel('@@initialState');
  const { avatar, name, email, team, phone } = initialState;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="avatar" src={avatar} />}
      >
        <Card.Meta
          title={name}
          description={
            <span>
              <div>{email}</div>
              <div>
                {team} - {phone}
              </div>
            </span>
          }
        />
      </Card>
    </div>
  );
};

export default Profile;
