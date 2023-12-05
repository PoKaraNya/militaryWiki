import { ReactNode, FC } from 'react'
import { Metadata } from 'next'
import '@/styles/global.css'
import bgImage from '@/public/bg-layout.jpg'
import Image from 'next/image'
import Providers from "@/components/Providers";

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
        <Providers>
            <Image className="bg-block" src={bgImage} alt={'bg'} />
            {children}
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout
