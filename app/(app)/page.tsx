import {FC} from 'react'
import {TransparentBlock} from "@/components/TransparentBlock"
import {welcomeBlock, infoBlock, hybridBlock1, hybridBlock2} from '@/mock/mainPage.json'
import {TextBlock} from "@/components/TextBlock";
import {HybridBlock} from "@/components/HybridBlock";

interface IProps {
}

const Home: FC<IProps> = () => {
  return (
    <main>
      <TransparentBlock
          title={welcomeBlock.title}
          description={welcomeBlock.description}
      />
      <TextBlock
        text={infoBlock.text}
      />
      <HybridBlock
        text={hybridBlock1.text}
        img={hybridBlock1.img}
      />
      <HybridBlock
        text={hybridBlock1.text}
        img={hybridBlock2.img}
        reverse
      />

    </main>
  )
}
export default Home
