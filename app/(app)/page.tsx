'use client'
import {FC, Suspense, useState} from 'react'
import { TransparentBlock } from '@/components/TransparentBlock'
import {
  welcomeBlock,
  infoBlock,
  hybridBlock1,
  hybridBlock2,
  hybridBlock3,
  hybridBlock4
} from '@/mock/mainPage.json'
import { TextBlock } from '@/components/TextBlock'
import { HybridBlock } from '@/components/HybridBlock'
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const DynamicVeryHeavyComponent = dynamic(() => import("@/components/VeryHeavyComponent"), {
    suspense: true,
    loading: () => <Loading/>
})

interface IProps {}


const Home: FC<IProps> = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <main>
      <TransparentBlock
        title={welcomeBlock.title}
        description={welcomeBlock.description}
      />
      <TextBlock text={infoBlock.text} />
      <HybridBlock text={hybridBlock1.text} img={hybridBlock1.img} />
      <HybridBlock text={hybridBlock1.text} img={hybridBlock2.img} reverse />
      <HybridBlock text={hybridBlock1.text} img={hybridBlock3.img}/>
      <HybridBlock text={hybridBlock1.text} img={hybridBlock4.img} reverse/>
        {
            isShow
                ? <DynamicVeryHeavyComponent/>
                : <button onClick={() => setIsShow(true)}>Показаті</button>
        }
    </main>
  )
}
export default Home
