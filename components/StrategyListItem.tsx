import { FC } from 'react'
import Link from 'next/link'
import '@/styles/Strategy/Strategy.scss'

interface IProps {
  id: number
  title: string
}

export const StrategyListItem: FC<IProps> = ({ id, title }) => {
  return (
    <Link href={`/strategies/${id}`} className="strategy-list__item">
      {title}
    </Link>
  )
}
