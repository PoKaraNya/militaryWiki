import {FC} from "react";
import {BaseContentBlock} from "@/components/BaseContentBlock";
import '@/styles/ContentBlocks/TextBlock.scss'

interface IProps {
    text: string
}

export const TextBlock: FC<IProps> = ({text}) => {
    return (
        <BaseContentBlock className={'text-block'}>
           <div className="content-container">
               <p>{text}</p>
           </div>
        </BaseContentBlock>
    )
}
