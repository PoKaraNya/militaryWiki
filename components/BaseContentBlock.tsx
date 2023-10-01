import { FC, ReactNode } from 'react'
import '@/styles/ContentBlocks/ContentBlock.scss'

interface IProps {
  children: ReactNode
  transparent?: boolean
  className?: string
}

export const BaseContentBlock: FC<IProps> = ({
  children,
  transparent = false,
  className = '',
}) => {
  let sectionClass = 'content-block '
  if (transparent) {
    sectionClass += 'content-block--transparent '
  }
  sectionClass += className

  return <section className={sectionClass}>{children}</section>
}
