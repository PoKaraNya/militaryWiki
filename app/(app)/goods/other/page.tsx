'use client'
import { FC } from 'react'
import {useJson} from "@/hooks/useJson";
import {IGoodsCard} from "@/types/goods";
import BaseCardContainer from "@/components/BaseCardContainer";
import BaseCard from "@/components/BaseCard";

interface IProps {}

const OtherPage: FC<IProps> = () => {
  const {data} = useJson<IGoodsCard[]>('goodsOther')
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
export default OtherPage
