import { Inter } from 'next/font/google'
import { ReactNode, FC } from 'react'
import { ConfigProvider, theme } from 'antd'
import { Metadata } from 'next'
import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

interface IProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'MilitaryWiki',
  description: 'Military',
}

const RootLayout: FC<IProps> = ({ children }) => {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: '#007a4c',
              colorBgContainer: '#f6ffed',
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
export default RootLayout
