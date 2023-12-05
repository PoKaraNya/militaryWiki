'use client'
import { FC } from 'react'
import s from '@/styles/Goods/Card.module.scss'
interface IProps {
  img?: string
  title: string
  description?: string
  price: string
  clickHandle?: () => void
  inCart: boolean
}

const BaseCard: FC<IProps> = ({
  img,
  price,
  description,
  title,
  clickHandle = () => {},
  inCart
}) => {
  return (
    <div className={s.card} onClick={clickHandle}>
      <img className={s.preview} src={img} alt="preview" />
      <div className={s.title}>{title}</div>
      <div className={s.description}>{description ?? ''}</div>
      <div className={s.price} style={{outline: inCart ? '4px solid #c5b06b' : 'none' }}>{price + ' грн'}</div>
    </div>
  )
}
export default BaseCard
