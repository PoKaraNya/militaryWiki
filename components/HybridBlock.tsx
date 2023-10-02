import { FC } from 'react'
import { BaseContentBlock } from '@/components/BaseContentBlock'
import '@/styles/ContentBlocks/HybridBlock.scss'

interface IProps {
  text: string
  img: string
  reverse?: boolean
}

export const HybridBlock: FC<IProps> = ({ text, img, reverse = false }) => {
  return (
    <BaseContentBlock className={'hybrid-block'}>
      <div className="content-container">
        {reverse || <p>{text}</p>}
        <img src={img} alt="Photo" />
        {reverse && <p>{text}</p>}
      </div>
    </BaseContentBlock>
  )
}
