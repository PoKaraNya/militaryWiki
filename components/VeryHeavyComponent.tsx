'use client'
import { FC } from 'react'
import Avatar from 'antd/es/avatar/avatar'
import { UserOutlined } from '@ant-design/icons'

const VeryHeavyComponent: FC = () => {
  return (
    <div>
      {new Array(400).fill(null).map((_, index) => {
        return index % 10 !== 0 ? (
          <Avatar key={index} size="small" icon={<UserOutlined />} />
        ) : null
      })}
    </div>
  )
}
export default VeryHeavyComponent
