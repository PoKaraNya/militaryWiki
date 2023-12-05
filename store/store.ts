import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from "@/store/slices/goodsSlice";
import quizSlice from "@/store/slices/quizSlice";

export const store = configureStore({
    reducer: {
        goods: goodsSlice,
        quiz: quizSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch