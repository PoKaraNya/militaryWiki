import { ReactNode, FC } from 'react'
import { ConfigProvider, theme } from 'antd'
import { Metadata } from 'next'
import '@/styles/global.css'
import bgImage from '@/public/bg-layout.jpg'
import Image from 'next/image'

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
      <body suppressHydrationWarning={true}>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: '#007a4c',
              colorBgContainer: '#f6ffed',
            },
          }}
        >
          <Image className="bg-block" src={bgImage} alt={'bg'} />

          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
export default RootLayout
