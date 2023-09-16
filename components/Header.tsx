'use client'
import { FC } from 'react'
import '@/styles/Header.scss'
import Link from 'next/link'
import { headerLinks } from '@/config/header'
import { usePathname } from 'next/navigation'

interface IProps {}

export const Header: FC<IProps> = () => {
  const pathname = usePathname()

  return (
    <header className="header">
      <div className="header__logo">Military Wiki</div>

      {headerLinks.map(({ url, name }) => {
        let linkClass = 'header__link'
        if (url === pathname) {
          linkClass += ' header__link--active'
        }
        return (
          <Link href={url} className={linkClass}>
            {name}
          </Link>
        )
      })}
    </header>
  )
}
