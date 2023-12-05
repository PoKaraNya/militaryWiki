import { Button } from 'antd'
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {answer, currentQuizSelector} from "@/store/slices/quizSlice";

const QuizBlockQuestion = () => {
  const dispatch = useAppDispatch()
  const { question, answers, correctKey } = useAppSelector(currentQuizSelector)

  return (
    <div className="quiz-block__step">
      <div className="quiz-block__question">{question}</div>
      <div className="quiz-block__answerBlock">
        {answers.map(({ key, text }) => {
            return (
              <Button
                key={key}
                onClick={() => dispatch(answer(key === correctKey))}
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
