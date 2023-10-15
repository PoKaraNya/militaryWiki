import { FC } from 'react'
import { BaseContentBlock } from '@/components/BaseContentBlock'
import '@/styles/ContentBlocks/TextBlock.scss'
import { Skeleton } from 'antd'

interface IProps {
  text?: string
  loading?: boolean
}

export const TextBlock: FC<IProps> = ({ text = '', loading = false }) => {
  return (
    <BaseContentBlock className={'text-block'}>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="content-container">
          <p>{text}</p>
        </div>
      )}
    </BaseContentBlock>
  )
}
