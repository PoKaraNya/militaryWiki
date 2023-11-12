'use client'
import { FC } from 'react'
import BaseCard from '@/components/BaseCard'
import BaseCardContainer from '@/components/BaseCardContainer'
import {useJson} from "@/hooks/useJson";
import {IGoodsCard} from "@/types/goods";

interface IProps {}

const ClothesPage: FC<IProps> = () => {

  const {data} = useJson<IGoodsCard[]>('goodsClothes')
    console.log(data)
  if (!data) {
      return null
  }

  return (
    <div>
      <BaseCardContainer>
        {data.map(({title, description, img, price}) => {
          return (
            <BaseCard
              key={title}
              img={img}
              title={title}
              price={price}
            />
          )
        })}
      </BaseCardContainer>
    </div>
  )
}
export default ClothesPage
