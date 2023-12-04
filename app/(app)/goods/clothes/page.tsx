'use client'
import { FC } from 'react'
import BaseCard from '@/components/BaseCard'
import BaseCardContainer from '@/components/BaseCardContainer'
import {useJson} from "@/hooks/useJson";
import {IGoodsCard} from "@/types/goods";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {clearCart, toggleGoods, totalPriceComputed} from "@/store/slices/goodsSlice";

interface IProps {}

const ClothesPage: FC<IProps> = () => {

  const {data} = useJson<IGoodsCard[]>('goodsClothes')

  const total = useAppSelector(totalPriceComputed)
  const cart = useAppSelector(state => state.goods.cart)
  const dispatch = useAppDispatch()

  if (!data) {
      return null
  }

  function toggleItemHandle(index: number) {
      dispatch(toggleGoods(index))
  }

  function clearCartHandle() {
      dispatch(clearCart())
  }

  return (
    <div>
      <h3 style={{color: 'white'}}>Всього: {total}</h3>
      <button onClick={clearCartHandle}>Очистити</button>
      <BaseCardContainer>
        {data.map(({title, description, img, price}, index) => {
          return (
            <BaseCard
              key={title}
              img={img}
              title={title}
              price={price}
              clickHandle={() => toggleItemHandle(index)}
              inCart={cart[index]}
            />
          )
        })}
      </BaseCardContainer>
    </div>
  )
}
export default ClothesPage
