import { ReactNode, FC } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/Header'

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
      <Header />
      {children}
    </main>
  )
}
export default Layout
