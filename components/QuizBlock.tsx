'use client'
import { FC } from 'react'
import { IQuiz } from '@/types/types'
import { BaseContentBlock } from '@/components/BaseContentBlock'
import '@/styles/Quiz/quiz.scss'
import { QuizBlockQuestion } from '@/components/QuizBlockQuestion'

interface IProps {
  quizList: IQuiz[]
  questionNumber: number
}

export const QuizBlock: FC<IProps> = ({ quizList, questionNumber }) => {
  const startHandle = (): void => {}

  const answerHandle = (success: boolean) => {}

  return (
    <BaseContentBlock>
      <div className="quiz-block">
        {/*<QuizBlockFinish*/}
        {/*    failNum={1}*/}
        {/*    successNum={2}*/}
        {/*    returnHandle={startHandle}*/}
        {/*/>*/}
        {/*<QuizBlockStart*/}
        {/*    startHandler={startHandle}*/}
        {/*/>*/}
        <QuizBlockQuestion
          quizList={quizList}
          index={0}
          answerHandle={answerHandle}
        />
      </div>
    </BaseContentBlock>
  )
}
