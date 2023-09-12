import { FC, ReactNode } from 'react'
import '@/styles/ContentBlock.scss'

interface IProps {
  children: ReactNode
  transparent?: boolean
}

export const BaseContentBlock: FC<IProps> = ({
  children,
  transparent = false,
}) => {
  let sectionClass = 'content-block'
  if (transparent) {
    sectionClass += ' content-block--transparent'
  }

  return <section className={sectionClass}>{children}</section>
}
