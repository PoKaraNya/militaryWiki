import {createSelector, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {QuizStatus} from "@/types/quiz";
import {IQuiz} from "@/types/types";
import quizList from '@/mock/quiz.json'
import {QUIZ_QUESTIONS_NUMBER} from "@/config/quiz";
import {RootState} from "@/store/store";

interface GoodsState {
    status: QuizStatus
    step: number
    success: number
    fail: number
    quizQuestionList: IQuiz[]
}

const initialState: GoodsState = {
    status: 'start',
    step: 0,
    success: 0,
    fail: 0,
    quizQuestionList: quizList
        .sort(() => Math.random() - 0.5)
        .slice(0, QUIZ_QUESTIONS_NUMBER),
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        reset: () => initialState,
        start: (state) => {
            state.step = initialState.step
            state.success = initialState.success
            state.fail = initialState.fail
            state.status = 'progress'
        },
        answer: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.success += 1
            } else {
                state.fail += 1
            }
            if (state.step >= QUIZ_QUESTIONS_NUMBER - 1) {
                state.status = 'finish'
            } else {
                state.step += 1
            }
        },
    },
})

export const isSuccessPercentSelector = createSelector(
    ({quiz}: RootState) => quiz,
    ({success, fail}) => {
        const allNum = success + fail
        return  Math.trunc((success / allNum) * 100)
    }
);

export const currentQuizSelector = createSelector(
    ({quiz}: RootState) => quiz,
    ({quizQuestionList, step}) => {
        const list = quizQuestionList[step]
        return {
            ...list,
            answers: list.answers.toSorted(() => Math.random() - 0.5)
        }
    }
)

export const { start, answer, reset } = quizSlice.actions
export default quizSlice.reducer