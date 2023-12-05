'use client'
import { FC } from 'react'
import BaseCard from '@/components/BaseCard'
import BaseCardContainer from '@/components/BaseCardContainer'
import {useJson} from "@/hooks/useJson";
import {IGoodsCard} from "@/types/goods";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {buyCartOrFail, clearCart, reset, toggleGoods, totalPriceComputed} from "@/store/slices/goodsSlice";

interface IProps {}

const ClothesPage: FC<IProps> = () => {

  const {data} = useJson<IGoodsCard[]>('goodsClothes')

  const total = useAppSelector(totalPriceComputed)
  const cart = useAppSelector(state => state.goods.cart)
  const dispatch = useAppDispatch()
  const money = useAppSelector(state => state.goods.money)

  if (!data) {
      return null
  }

  function toggleItemHandle(index: number) {
      dispatch(toggleGoods(index))
  }

  function clearCartHandle() {
      dispatch(clearCart())
  }

  function buyCartHandle() {
    try {
        dispatch(buyCartOrFail())
    } catch (e: unknown) {
        if (e instanceof Error) {
            alert(e.message)
        }
    }
  }

  function resetHandle() {
      dispatch(reset())
  }

  return (
    <div>
      <h3 style={{color: 'white'}}>Всього: {total}</h3>
      <h3 style={{color: 'white'}}>Гроші: {money}</h3>
      <button onClick={clearCartHandle}>Очистити</button>
      <button onClick={buyCartHandle}>Купити</button>
      <button onClick={resetHandle}>Рестарт</button>
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
