import { FC } from 'react'
import { IQuiz } from '@/types/types'
import { Button } from 'antd'

interface IProps {
  answerHandle: (isRight: boolean) => void
  quizList: IQuiz[]
  index: number
}

const QuizBlockQuestion: FC<IProps> = ({ quizList, index, answerHandle }) => {
  const { question, answers, correctKey } = quizList[index]

  return (
    <div className="quiz-block__step">
      <div className="quiz-block__question">{question}</div>
      <div className="quiz-block__answerBlock">
        {answers
          .sort(() => Math.random() - 0.5)
          .map(({ key, text }) => {
            return (
              <Button
                key={key}
                onClick={() => answerHandle(key === correctKey)}
              >
                {text}
              </Button>
            )
          })}
      </div>
    </div>
  )
}
export default QuizBlockQuestion
