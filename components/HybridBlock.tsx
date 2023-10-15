import { FC } from 'react'
import { BaseContentBlock } from '@/components/BaseContentBlock'
import '@/styles/ContentBlocks/HybridBlock.scss'
import { Skeleton } from 'antd'

interface IProps {
  text?: string
  img?: string
  reverse?: boolean
  loading?: boolean
}

export const HybridBlock: FC<IProps> = ({
  text = '',
  img = '',
  reverse = false,
  loading = false,
}) => {
  return (
    <BaseContentBlock className={'hybrid-block'}>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="content-container">
          {reverse || <p>{text}</p>}
          {img ? <img src={img} alt="Photo" /> : null}
          {reverse && <p>{text}</p>}
        </div>
      )}
    </BaseContentBlock>
  )
}
