import {FC} from "react";
import {BaseContentBlock} from "@/components/BaseContentBlock";
import '@/styles/ContentBlocks/TrancparentBlock.scss'

interface IProps {
    title: string
    description: string
}

export const TransparentBlock: FC<IProps> = ({title, description}) => {
    return (
        <BaseContentBlock transparent className={'transparent-block'}>
            <h2>{title}</h2>
            <h4>{description}</h4>
        </BaseContentBlock>
    )
}
