import { FC } from 'react'
import { Button, Result } from 'antd'

interface IProps {
  successNum: number
  failNum: number
  returnHandle: () => void
}

const PASS_PERCENT = 50

const QuizBlockFinish: FC<IProps> = ({ successNum, failNum, returnHandle }) => {
  const allNum = successNum + failNum
  const successPercent = Math.trunc((successNum / allNum) * 100)
  const isSuccess = successPercent >= PASS_PERCENT

  return (
    <Result
      status={isSuccess ? 'success' : 'error'}
      title={`${successPercent}% правильно`}
      subTitle="Можете спробувати ще раз щоб покращити свій результат"
      extra={[
        <Button type="primary" key="console" onClick={returnHandle}>
          Спробувати ще раз
        </Button>,
      ]}
    />
  )
}
export default QuizBlockFinish
