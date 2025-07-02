import { Button, Popover } from 'antd'
import React from 'react'
import CustomAvatar from '../custom-avatar'
import { useGetIdentity } from '@refinedev/core'
import type {User} from '@/graphql/schema.types'
import { Text } from './text'
import { SettingOutlined } from '@ant-design/icons'

const CurrentUser = () => {
    const { data: user } = useGetIdentity<User>();
    const [isOpen, setIsOpen] = React.useState(false);
    const content = (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Text
        strong
        style={{ padding: '12px 20px'}}
        >
          {user?.name}
        </Text>

        <div>
          <Button
            style={{ textAlign: 'left'}}
            icon={<SettingOutlined />}
            type="text"
            block 
            onClick={() => setIsOpen(true)}
          >
            Account Settings
          </Button>
        </div>

      </div>
    )

  return (
    <div>
        <Popover
            placement="bottomRight"
            trigger="click"
            styles={{ root: { zIndex: 999 }, body: { padding: 0 } }}>

            <CustomAvatar 
              name={user?.name}
              src={user?.avatarUrl}
              size='default'
              style={{cursor: 'pointer'}}
            />
        </Popover>
    </div>
  )
}

export default CurrentUser