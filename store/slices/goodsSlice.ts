import {createSelector, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import goodsClothes from '@/mock/goodsClothes.json'
import {IGoodsCard} from "@/types/goods";

interface GoodsState {
    total: number
    goods: IGoodsCard[]
    cart: boolean[]
    money: number
}

const initialState: GoodsState = {
    total: 0,
    goods: goodsClothes,
    cart: new Array(goodsClothes.length).fill(false),
    money: 10_000
}

export const goodsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: () => initialState,
        toggleGoods: (state, action: PayloadAction<number>) => {
            state.cart[action.payload] = !state.cart[action.payload]
        },
        clearCart: (state) => {
            state.cart = initialState.cart
        },
        buyCartOrFail: (state) => {
            const totalPrice = getTotalPrice(state.cart)
            if (state.money < totalPrice) {
                throw new Error('Не достатньо коштів')
            }
            state.money -= totalPrice
            state.cart = initialState.cart
        }
    },
})

function getTotalPrice(cart: boolean[]) {
    return cart.reduce((total, isInCart, index) => {
        if (isInCart) {
            return total + Number(goodsClothes[index].price)
        } else {
            return total
        }
    }, 0)
}

export const totalPriceComputed = createSelector(
    (state: { goods: GoodsState }) => state.goods.cart,
    (cart) => getTotalPrice(cart)
);

export const { toggleGoods, reset, clearCart, buyCartOrFail } = goodsSlice.actions
export default goodsSlice.reducer