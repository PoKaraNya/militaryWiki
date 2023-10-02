import { FC } from 'react'
import { IQuiz } from '@/types/types'
import { Button } from 'antd'

interface IProps {
  answerHandle: (isRight: boolean) => void
  quizList: IQuiz[]
  index: number
}

export const QuizBlockQuestion: FC<IProps> = ({
  quizList,
  index,
  answerHandle,
}) => {
  const { question, answers, correctKey } = quizList[index]

  return (
    <div className="quiz-block__step">
      <div className="quiz-block__question">{question}</div>
      <div className="quiz-block__answerBlock">
        {answers.map(({ key, text }) => {
          return (
            <Button onClick={() => answerHandle(key === correctKey)}>
              {text}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
