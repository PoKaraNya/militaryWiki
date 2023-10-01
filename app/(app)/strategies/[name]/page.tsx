import { FC } from 'react'
import { TransparentBlock } from '@/components/TransparentBlock'
import strategyList from '@/mock/strategyList.json'
import { HybridBlock } from '@/components/HybridBlock'
import { TextBlock } from '@/components/TextBlock'

interface IProps {
  params: {
    name: string
  }
}

const Page: FC<IProps> = ({ params }) => {
  const pageData = strategyList.find(({ id }) => id.toString() === params.name)

  if (!pageData) {
    return <h1>Сторінка не знайдена(</h1>
  }

  return (
    <>
      <TransparentBlock title={pageData.title} description={''} />
      {pageData.image ? (
        <HybridBlock text={pageData.description} img={pageData.image} />
      ) : (
        <TextBlock text={pageData.description} />
      )}
    </>
  )
}
export default Page
