import {createSelector, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import goodsClothes from '@/mock/goodsClothes.json'
import {IGoodsCard} from "@/types/goods";

interface GoodsState {
    total: number
    goods: IGoodsCard[]
    cart: boolean[]
}

const initialState: GoodsState = {
    total: 0,
    goods: goodsClothes,
    cart: new Array(goodsClothes.length).fill(false)
}

export const goodsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toggleGoods: (state, action: PayloadAction<number>) => {
            state.cart[action.payload] = !state.cart[action.payload]
        },
        clearCart: (state) => {
            state.cart = new Array(state.cart.length).fill(false)
        }
    },
})

export const totalPriceComputed = createSelector(
    (state: { goods: GoodsState }) => state.goods.cart,
    (cart) => cart.reduce((total, isInCart, index) => {
        if (isInCart) {
            return total + Number(goodsClothes[index].price)
        } else {
            return total
        }
    }, 0),
);

export const { toggleGoods, clearCart } = goodsSlice.actions
export default goodsSlice.reducer