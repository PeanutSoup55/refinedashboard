import { Popover } from 'antd'
import React from 'react'
import CustomAvatar from '../custom-avatar'

const CurrentUser = () => {
  return (
    <div>
        <Popover
            placement="bottomRight"
            trigger="click"
            styles={{ root: { zIndex: 999 }, body: { padding: 0 } }}>

            <CustomAvatar />
        </Popover>
    </div>
  )
}

export default CurrentUser