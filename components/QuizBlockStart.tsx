import { FC } from 'react'
import { Button, Result } from 'antd'

interface IProps {
  startHandler: () => void
}
const QuizBlockStart: FC<IProps> = ({ startHandler }) => {
  return (
    <Result
      status="info"
      title="Тестування"
      subTitle="Це допоможе закріпити ваші знання"
      extra={[
        <Button type="primary" key="console" onClick={startHandler}>
          Почати
        </Button>,
      ]}
    />
  )
}
export default QuizBlockStart
