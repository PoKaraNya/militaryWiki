import { FC } from 'react'
import { BaseContentBlock } from '@/components/BaseContentBlock'
import '@/styles/ContentBlocks/TrancparentBlock.scss'
import { Skeleton } from 'antd'

interface IProps {
  title?: string
  description?: string
  loading?: boolean
}

export const TransparentBlock: FC<IProps> = ({
  title = '',
  description = '',
  loading = false,
}) => {
  return (
    <BaseContentBlock transparent className={'transparent-block'}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <h2>{title}</h2>
          <h4>{description}</h4>
        </>
      )}
    </BaseContentBlock>
  )
}
