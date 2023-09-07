import { Inter } from 'next/font/google'
import { ReactNode, FC } from 'react'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface IProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Strategies',
  description: 'Military',
}

const Layout: FC<IProps> = ({ children }) => {
  return (
      <main>
          layout
          {children}
      </main>
  )
}
export default Layout
