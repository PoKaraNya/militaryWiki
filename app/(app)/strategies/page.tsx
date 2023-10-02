import { FC } from 'react'
import { TransparentBlock } from '@/components/TransparentBlock'
import { BaseContentBlock } from '@/components/BaseContentBlock'
import { StrategyList } from '@/components/StrategyList'

interface IProps {}

const Page: FC<IProps> = () => {
  return (
    <>
      <TransparentBlock title={'Стратегії'} description={'та купа цікавого'} />
      <BaseContentBlock>
        <StrategyList />
      </BaseContentBlock>
    </>
  )
}
export default Page
