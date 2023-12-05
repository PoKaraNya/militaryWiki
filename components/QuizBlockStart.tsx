import { FC } from 'react'
import { Button, Result } from 'antd'
import {useAppDispatch} from "@/store/hooks";
import {start} from "@/store/slices/quizSlice";

const QuizBlockStart: FC = () => {
  const dispatch = useAppDispatch()
  return (
    <Result
      status="info"
      title="Тестування"
      subTitle="Це допоможе закріпити ваші знання"
      extra={[
        <Button type="primary" key="console" onClick={() => dispatch(start())}>
          Почати
        </Button>,
      ]}
    />
  )
}
export default QuizBlockStart
