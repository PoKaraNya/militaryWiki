'use client'
import { FC, useState } from 'react'
import { TransparentBlock } from '@/components/TransparentBlock'
import { TextBlock } from '@/components/TextBlock'
import { HybridBlock } from '@/components/HybridBlock'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import { useJson } from '@/hooks/useJson'

const DynamicVeryHeavyComponent = dynamic(
  () => import('@/components/VeryHeavyComponent'),
  {
    suspense: true,
    loading: () => <Loading />,
  },
)

const Home: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const { data, loading, error } = useJson<IMainPageJSON>('mainPage')

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <main>
      <TransparentBlock
        title={data?.welcomeBlock.title}
        description={data?.welcomeBlock.description}
        loading={loading}
      />
      <TextBlock loading={loading} text={data?.infoBlock.text} />
      <HybridBlock
        loading={loading}
        text={data?.hybridBlock1.text}
        img={data?.hybridBlock1.img}
      />
      <HybridBlock
        loading={loading}
        text={data?.hybridBlock2.text}
        img={data?.hybridBlock2.img}
        reverse
      />
      <HybridBlock
        loading={loading}
        text={data?.hybridBlock3.text}
        img={data?.hybridBlock3.img}
      />
      <HybridBlock
        loading={loading}
        text={data?.hybridBlock4.text}
        img={data?.hybridBlock4.img}
        reverse
      />
      {isShow ? (
        <DynamicVeryHeavyComponent />
      ) : (
        <button onClick={() => setIsShow(true)}>Показати</button>
      )}
    </main>
  )
}
export default Home
