import { FC } from 'react'
import { Button, Result } from 'antd'
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {PASS_PERCENT} from "@/config/quiz";
import {isSuccessPercentSelector, start} from "@/store/slices/quizSlice";

const QuizBlockFinish: FC = () => {
  const dispatch = useAppDispatch()
  const successPercent = useAppSelector(isSuccessPercentSelector)
  const isSuccess = successPercent >= PASS_PERCENT

  return (
    <Result
      status={isSuccess ? 'success' : 'error'}
      title={`${successPercent}% правильно`}
      subTitle="Можете спробувати ще раз щоб покращити свій результат"
      extra={[
        <Button type="primary" key="console" onClick={() => dispatch(start())}>
          Спробувати ще раз
        </Button>,
      ]}
    />
  )
}
export default QuizBlockFinish
