'use client'
import {FC} from "react";
import s from '@/styles/Goods/Card.module.scss'
interface IProps {
    img?: string
    title: string
    description: string
    price: number
    clickHandle?: () => void
}

const BaseCard: FC<IProps> = ({img, price, description, title, clickHandle = () => {}}) => {
    return (
        <div className={s.card} onClick={clickHandle}>
            <img className={s.preview} src={img} alt="preview"/>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description ?? ''}</div>
            <div className={s.price}>{price + ' грн'}</div>
        </div>
    )
}
export default BaseCard