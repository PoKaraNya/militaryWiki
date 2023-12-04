import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from "@/store/slices/goodsSlice";

export const store = configureStore({
    reducer: {
        goods: goodsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch