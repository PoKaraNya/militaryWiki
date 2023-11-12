import {FC, ReactNode} from "react";
import s from '@/styles/Goods/Container.module.scss'

interface IProps {
    children: ReactNode
}

const BaseCardContainer: FC<IProps> = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    )
}
export default BaseCardContainer
