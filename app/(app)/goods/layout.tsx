import { FC, ReactNode } from 'react'
import Link from 'next/link'

interface IProps {
  children: ReactNode
}

const SettingsLayout: FC<IProps> = ({ children }) => {
  const settingTabs = [
    {
      name: 'Одяг',
      value: '/goods/clothes',
    },
    {
      name: 'Інші товари',
      value: '/goods/other',
    },
  ]

  return (
    <div>
      <div>
        {settingTabs.map(({ name, value }) => {
          return (
            <Link href={value} key={value}>
              {name}
            </Link>
          )
        })}
      </div>
      {children}
    </div>
  )
}
export default SettingsLayout
