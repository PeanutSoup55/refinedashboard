import React from 'react'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'

type Props = AvatarProps & {
    name?: string;
}

const CustomAvatar = ({ name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
    alt={'ligma'}
    size="small"
    style={{backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        ...style
    }}
    {...rest}
    > 
        {name}
    </AntdAvatar>
  )
}

export default CustomAvatar