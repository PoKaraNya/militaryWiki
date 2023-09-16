import {FC} from "react";
import {BaseContentBlock} from "@/components/BaseContentBlock";

interface IProps {
    
}

export const TransparentBlock: FC<IProps> = () => {
    return (
        <BaseContentBlock transparent className={''}>
            <h2>Title</h2>
            <h4>Description</h4>
        </BaseContentBlock>
    )
}
