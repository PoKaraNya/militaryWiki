import { FC } from 'react'
import { TransparentBlock } from '@/components/TransparentBlock'
import { QuizBlock } from '@/components/QuizBlock'
import quizList from '@/mock/quiz.json'

interface IProps {}

const Quiz: FC<IProps> = () => {
  return (
    <>
      <TransparentBlock
        title={'Вікторина'}
        description={
          'Дай відповідь на декілька питань і дізнайся наскільки ти засвоїв матеріал'
        }
      />
      <QuizBlock quizList={quizList} questionNumber={5} />
    </>
  )
}
export default Quiz
